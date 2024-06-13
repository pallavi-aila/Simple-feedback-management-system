import sgMail from "@sendgrid/mail";
import { config } from "dotenv";

config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendAcknowledgmentEmail = async (toEmail, userName) => {
    try {
        const msg = {
            to: toEmail,
            from: process.env.FROM_EMAIL,
            subject: "Feedback Acknowledgment",
            text: `Thank you for your feedback, ${userName}! We appreciate your input.`,
        };
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);
    }
};

export const notifySupportTeam = async (userName, userEmail, feedback) => {
    try {
        const msg = {
            to: process.env.SUPPORT_EMAIL,
            from: process.env.FROM_EMAIL,
            subject: "New Feedback",
            text: `You have received a new feedback from ${userName} (${userEmail}). Feedback: ${feedback}`,
        };
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);
    }
};
