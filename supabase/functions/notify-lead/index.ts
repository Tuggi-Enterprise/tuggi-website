
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = "re_cqswxVj6_5XiqCQRdGqXVWT3JwgVrvgnQ"; // Hardcoded for initial setup, ideally use Deno.env.get

interface LeadPayload {
  record: {
    id: string;
    email: string;
    language: string;
    phone_e164: string;
    best_contact: string;
    page: string;
    source: string;
    device: string;
    utm_source: string;
    utm_medium: string;
    created_at: string;
    name?: string; // Sometimes notes contains name, or we parse from notes
    notes?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const payload: LeadPayload = await req.json();
    const lead = payload.record;

    console.log("New Lead Received:", lead.email);

    // Extract Name from Notes if possible (Format: "Name: Leandrinho")
    let leadName = "Motorista";
    if (lead.notes && lead.notes.startsWith("Name:")) {
      leadName = lead.notes.replace("Name:", "").trim();
    }

    // Build WhatsApp Link
    const whatsAppLink = lead.phone_e164 
      ? `https://wa.me/${lead.phone_e164.replace('+', '')}`
      : '#';

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>🚀 Novo Motorista Beta Cadastrado!</h2>
        <p>Um novo lead acabou de entrar na base de dados.</p>
        
        <div style="background: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${leadName}</p>
          <p><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>
          <p><strong>País/Língua:</strong> ${lead.language}</p>
          <p><strong>Contato:</strong> ${lead.phone_e164 || 'N/A'}</p>
          <p><strong>Preferência:</strong> ${lead.best_contact}</p>
          <p><strong>Origem:</strong> ${lead.source} (${lead.utm_source || 'Direto'})</p>
          <p><strong>Dispositivo:</strong> ${lead.device}</p>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          ${lead.phone_e164 ? 
            `<a href="${whatsAppLink}" style="background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
               Chamar no WhatsApp AGORA
             </a>` 
            : ''
          }
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 40px;">
          Lead ID: ${lead.id} | Recebido em: ${new Date(lead.created_at).toLocaleString('pt-BR')}
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Tuggi Leads <suporte@tuggi.app>", // Verified sender
        to: ["suporte@tuggi.app"], // Must match verified sender on free plan
        subject: `Novo Motorista: ${leadName} (${lead.language})`,
        html: emailHtml,
      }),
    });

    const data = await res.json();
    console.log("Email sent via Resend:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

serve(handler);
