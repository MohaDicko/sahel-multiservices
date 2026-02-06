"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Champs manquants" };
    }

    // Configuration du transporteur SMTP
    // Vous devez configurer ces variables d'environnement dans votre fichier .env.local
    // Exemple pour Gmail :
    // SMTP_HOST=smtp.gmail.com
    // SMTP_PORT=465
    // SMTP_USER=votre-email@gmail.com
    // SMTP_PASS=votre-mot-de-passe-d-application

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.log("⚠️ Email non envoyé : Variables d'environnement SMTP manquantes.");
        console.log("Coordonnées reçues :", { name, email, subject, message });
        // On retourne true pour simuler le succès côté client même si le serveur n'est pas configuré
        // afin de ne pas bloquer l'expérience utilisateur en démo.
        // DANS LA VRAIE VIE : retourner { success: false, error: "Configuration serveur manquante" }
        return { success: true, warning: "Mode simulation: voir logs serveur" };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: true, // true pour le port 465, false pour les autres ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // L'expéditeur doit souvent être le compte authentifié
            replyTo: email, // Pour répondre directement au client
            to: process.env.SMTP_USER, // L'email arrive chez vous
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
        console.error("Erreur d'envoi d'email:", error);
        return { success: false, error: "Erreur lors de l'envoi de l'email" };
    }
}
