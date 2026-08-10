import { SITE } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

/**
 * Organization + LocalBusiness JSON-LD using real NAP from SITE.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE.legalName,
        alternateName: SITE.name,
        url: SITE_URL,
        email: SITE.email,
        description: SITE.description,
        sameAs: [
          "https://www.linkedin.com/company/aidamsole",
          "https://x.com/aidamsole",
          "https://www.youtube.com/@aidamsole",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness-india`,
        name: `${SITE.name} — India`,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        url: SITE_URL,
        email: SITE.email,
        telephone: SITE.phones.india.tel,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st Floor, Madhuban Complex, Office no. 103, 104, near Maxcare Hospital",
          addressLocality: "Manchar",
          addressRegion: "Maharashtra",
          postalCode: "410503",
          addressCountry: "IN",
        },
        areaServed: ["IN", "AE"],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness-uae`,
        name: `${SITE.name} — UAE`,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        url: SITE_URL,
        email: SITE.email,
        telephone: SITE.phones.uae.tel,
        address: {
          "@type": "PostalAddress",
          streetAddress: "C1 - 1F - SF7618, Ajman Free Zone C1 Building",
          addressLocality: "Ajman",
          addressCountry: "AE",
        },
        areaServed: ["AE", "IN"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
