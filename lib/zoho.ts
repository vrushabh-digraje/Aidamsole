import type { LeadTag } from "@/lib/utils";

type ZohoConfig = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  accountsUrl: string;
  apiDomain: string;
};

export type ZohoLeadInput = {
  companySize: string;
  industry: string;
  leads: string;
  system: string;
  challenge: string;
  tag: LeadTag;
};

function getZohoConfig(): ZohoConfig {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  const accountsUrl = process.env.ZOHO_ACCOUNTS_URL;
  const apiDomain = process.env.ZOHO_API_DOMAIN;

  if (!clientId || !clientSecret || !refreshToken || !accountsUrl || !apiDomain) {
    throw new Error("Missing Zoho environment variables");
  }

  return {
    clientId,
    clientSecret,
    refreshToken,
    accountsUrl,
    apiDomain,
  };
}

async function getAccessToken(config: ZohoConfig): Promise<string> {
  const url = new URL("/oauth/v2/token", config.accountsUrl);

  url.searchParams.set("refresh_token", config.refreshToken);
  url.searchParams.set("client_id", config.clientId);
  url.searchParams.set("client_secret", config.clientSecret);
  url.searchParams.set("grant_type", "refresh_token");

  const response = await fetch(url, { method: "POST" });
  const data = (await response.json()) as {
    access_token?: string;
    error?: string;
  };

  if (!response.ok || !data.access_token) {
    throw new Error(data.error ?? "Failed to refresh Zoho access token");
  }

  return data.access_token;
}

function mapLeadFields(input: ZohoLeadInput) {
  // Custom field API names must match Zoho CRM field definitions.
  return {
    Last_Name: "Website Assessment",
    Lead_Source: "Website Assessment",
    Industry: input.industry,
    Description: input.challenge,
    Company_Size: input.companySize,
    Monthly_Leads: input.leads,
    Current_System: input.system,
    Biggest_Challenge: input.challenge,
    Lead_Tag: input.tag,
    Tag: [{ name: input.tag }],
  };
}

async function postZohoLead(
  data: Record<string, unknown>,
): Promise<{ id?: string }> {
  const config = getZohoConfig();
  const accessToken = await getAccessToken(config);

  const response = await fetch(`${config.apiDomain}/crm/v6/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [data],
    }),
  });

  const result = (await response.json()) as {
    data?: Array<{ details?: { id?: string }; message?: string; code?: string }>;
    message?: string;
  };

  if (!response.ok) {
    throw new Error(result.message ?? "Failed to create Zoho lead");
  }

  const record = result.data?.[0];

  if (record?.code && record.code !== "SUCCESS") {
    throw new Error(record.message ?? "Zoho lead creation unsuccessful");
  }

  return { id: record?.details?.id };
}

export async function createZohoLead(input: ZohoLeadInput): Promise<{ id?: string }> {
  return postZohoLead(mapLeadFields(input));
}

export type ZohoContactLeadInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export async function createContactZohoLead(
  input: ZohoContactLeadInput,
): Promise<{ id?: string }> {
  return postZohoLead({
    First_Name: input.firstName,
    Last_Name: input.lastName,
    Email: input.email,
    Phone: input.phone,
    Lead_Source: "Website Contact",
    Description: `Service: ${input.service}\n\n${input.message}`,
  });
}

export function isZohoConfigured(): boolean {
  return !!(
    process.env.ZOHO_CLIENT_ID &&
    process.env.ZOHO_CLIENT_SECRET &&
    process.env.ZOHO_REFRESH_TOKEN &&
    process.env.ZOHO_ACCOUNTS_URL &&
    process.env.ZOHO_API_DOMAIN
  );
}
