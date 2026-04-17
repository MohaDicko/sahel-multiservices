"use server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Champs manquants" };
    }

    // --- OPTION 1: RESEND (Prioritaire si configuré) ---
    if (resend) {
        try {
            await resend.emails.send({
                from: "Sahel MULTISERVICES <onboarding@resend.dev>", // À changer avec votre domaine vérifié
                to: process.env.CONTACT_EMAIL || "contact@sahel-multiservices.com",
                replyTo: email,
                subject: `[Site Web] ${subject}`,
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px;">Nouveau message de contact</h2>
                        <p><strong>Nom :</strong> ${name}</p>
                        <p><strong>Email :</strong> ${email}</p>
                        <p><strong>Sujet :</strong> ${subject}</p>
                        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                        <h3>Message :</h3>
                        <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d97706; font-style: italic; line-height: 1.6;">
                            ${message.replace(/\n/g, '<br>')}
                        </p>
                        <footer style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
                            Ce message a été envoyé depuis le formulaire de contact de sahel-multiservices.com
                        </footer>
                    </div>
                `,
            });
            return { success: true };
        } catch (error) {
            console.error("Erreur Resend:", error);
            // On continue vers Nodemailer si Resend échoue
        }
    }

    // --- OPTION 2: NODEMAILER (Fallback) ---
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.log("⚠️ Email non envoyé : Pas de configuration SMTP ou Resend.");
        console.log("Coordonnées reçues :", { name, email, subject, message });
        return { success: true, warning: "Mode simulation: voir logs serveur" };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            replyTo: email,
            to: process.env.SMTP_USER,
            subject: `[Site Web] ${subject}`,
            text: message,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #d97706;">Nouveau message de contact</h2>
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Sujet :</strong> ${subject}</p>
                    <hr />
                    <h3>Message :</h3>
                    <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #d97706;">
                        ${message.replace(/\n/g, '<br>')}
                    </p>
                </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Erreur Nodemailer:", error);
        return { success: false, error: "Erreur lors de l'envoi de l'email" };
    }
}
