const WHATSAPP_MESSAGE =
  "Hi, we received your request. Our team will analyze your system and connect shortly.";

type SendWhatsAppInput = {
  assessmentId: string;
  to?: string;
};

/**
 * Placeholder WhatsApp notification.
 * Replace with a real provider (Twilio, Meta Cloud API, etc.) later.
 */
export async function sendWhatsAppMessage({
  assessmentId,
  to = "placeholder-recipient",
}: SendWhatsAppInput): Promise<{ sent: boolean; message: string }> {
  // Mock only — no external API call yet.
  console.log("[whatsapp:mock]", {
    to,
    assessmentId,
    message: WHATSAPP_MESSAGE,
  });

  return {
    sent: true,
    message: WHATSAPP_MESSAGE,
  };
}
