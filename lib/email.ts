import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const senderEmail = process.env.SENDER_EMAIL ?? "vrushabhdigraje07@gmail.com";

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
 * Sends assessment form notification emails using Resend.
 * Fallbacks to console logs if RESEND_API_KEY is not defined.
 */
export async function sendAssessmentEmails(
  context: AssessmentEmailContext,
): Promise<EmailResult> {
  const adminTo = process.env.ADMIN_EMAIL ?? "vrushabhdigraje07@gmail.com";
  
  const adminBody = [
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
  ].join("\n");

  let adminSent = false;

  if (resend) {
    try {
      const response = await resend.emails.send({
        from: `Aidamsole Audit <${senderEmail}>`,
        to: adminTo,
        subject: `New assessment submission (${context.tag})`,
        text: adminBody,
      });
      if (response.error) {
        console.error("Resend admin assessment email failed:", response.error);
      } else {
        adminSent = true;
      }
    } catch (error) {
      console.error("Resend admin assessment email exception:", error);
    }
  } else {
    console.log("[email:mock:admin]", {
      to: adminTo,
      subject: `New assessment submission (${context.tag})`,
      body: adminBody,
    });
    adminSent = true;
  }

  let userSent = false;

  if (context.userEmail) {
    const userBody = [
      "Hi,",
      "",
      "Thank you for submitting your assessment.",
      "Our team will review your system details and connect shortly.",
      "",
      `Reference: ${context.assessmentId}`,
    ].join("\n");

    if (resend) {
      try {
        const response = await resend.emails.send({
          from: `Aidamsole <${senderEmail}>`,
          to: context.userEmail,
          subject: "We received your system assessment request",
          text: userBody,
        });
        if (response.error) {
          console.error("Resend user assessment confirmation failed:", response.error);
        } else {
          userSent = true;
        }
      } catch (error) {
        console.error("Resend user assessment confirmation exception:", error);
      }
    } else {
      console.log("[email:mock:user]", {
        to: context.userEmail,
        subject: "We received your system assessment request",
        body: userBody,
      });
      userSent = true;
    }
  }

  return {
    adminSent,
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

/**
 * Sends contact form notification emails using Resend.
 * Fallbacks to console logs if RESEND_API_KEY is not defined.
 */
export async function sendContactEmails(
  context: ContactEmailContext,
): Promise<{ adminSent: boolean }> {
  const adminTo = process.env.ADMIN_EMAIL ?? "vrushabhdigraje07@gmail.com";

  const adminBody = [
    "A new website contact message was submitted.",
    "",
    `ID: ${context.contactId}`,
    `Name: ${context.firstName} ${context.lastName}`,
    `Email: ${context.email}`,
    `Phone: ${context.phone}`,
    `Service Requested: ${context.service}`,
    `Message:`,
    context.message,
  ].join("\n");

  let adminSent = false;

  if (resend) {
    try {
      const response = await resend.emails.send({
        from: `Aidamsole Contact <${senderEmail}>`,
        to: adminTo,
        subject: `New website contact message from ${context.firstName} ${context.lastName}`,
        text: adminBody,
      });
      if (response.error) {
        console.error("Resend admin contact email failed:", response.error);
      } else {
        adminSent = true;
      }
    } catch (error) {
      console.error("Resend admin contact email exception:", error);
    }
  } else {
    console.log("[email:mock:admin:contact]", {
      to: adminTo,
      subject: `New website contact message from ${context.firstName} ${context.lastName}`,
      body: adminBody,
    });
    adminSent = true;
  }

  return {
    adminSent,
  };
}
