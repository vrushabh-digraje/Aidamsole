type AssessmentEmailContext = {
  assessmentId: string;
  companySize: string;
  industry: string;
  leads: string;
  system: string;
  challenge: string;
  score: string;
  tag: string;
  userEmail?: string;
};

type EmailResult = {
  adminSent: boolean;
  userSent: boolean;
};

/**
 * Placeholder email notifications.
 * Replace with Resend / SES / SMTP later.
 */
export async function sendAssessmentEmails(
  context: AssessmentEmailContext,
): Promise<EmailResult> {
  const adminTo = process.env.ADMIN_EMAIL ?? "suyog@damsole.com";

  console.log("[email:mock:admin]", {
    to: adminTo,
    subject: `New assessment submission (${context.tag})`,
    body: [
      "A new assessment was submitted.",
      "",
      `ID: ${context.assessmentId}`,
      `Industry: ${context.industry}`,
      `Company size: ${context.companySize}`,
      `Monthly leads: ${context.leads}`,
      `Current system: ${context.system}`,
      `Score: ${context.score}`,
      `Tag: ${context.tag}`,
      `Challenge: ${context.challenge}`,
    ].join("\n"),
  });

  let userSent = false;

  if (context.userEmail) {
    console.log("[email:mock:user]", {
      to: context.userEmail,
      subject: "We received your system assessment request",
      body: [
        "Hi,",
        "",
        "Thank you for submitting your assessment.",
        "Our team will review your system details and connect shortly.",
        "",
        `Reference: ${context.assessmentId}`,
      ].join("\n"),
    });
    userSent = true;
  }

  return {
    adminSent: true,
    userSent,
  };
}

export type ContactEmailContext = {
  contactId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export async function sendContactEmails(
  context: ContactEmailContext,
): Promise<{ adminSent: boolean }> {
  const adminTo = process.env.ADMIN_EMAIL ?? "suyog@damsole.com";

  console.log("[email:mock:admin:contact]", {
    to: adminTo,
    subject: `New website contact message from ${context.firstName} ${context.lastName}`,
    body: [
      "A new website contact message was submitted.",
      "",
      `ID: ${context.contactId}`,
      `Name: ${context.firstName} ${context.lastName}`,
      `Email: ${context.email}`,
      `Phone: ${context.phone}`,
      `Service Requested: ${context.service}`,
      `Message:`,
      context.message,
    ].join("\n"),
  });

  return {
    adminSent: true,
  };
}
