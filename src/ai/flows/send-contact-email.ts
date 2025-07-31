
'use server';
/**
 * @fileOverview A flow for sending a contact form email using Nodemailer.
 *
 * - sendContactEmail - A function that handles sending the contact form data via email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 * - SendContactEmailOutput - The return type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import { ContactFormEmail } from '@/ai/emails/contact-form-email';

const SendContactEmailInputSchema = z.object({
  name: z.string().min(2).describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  phone: z.string().optional().describe('The phone number of the person submitting the form.'),
  subject: z.string().min(5).describe('The subject of the contact message.'),
  message: z.string().min(10).describe('The content of the contact message.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

const SendContactEmailOutputSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});
export type SendContactEmailOutput = z.infer<typeof SendContactEmailOutputSchema>;

// IMPORTANT: You must add your SMTP credentials to your .env file.
// For example:
// SMTP_HOST="smtp.example.com"
// SMTP_PORT="587"
// SMTP_USER="your_username"
// SMTP_PASS="your_password"
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM_ADDRESS, SMTP_TO_ADDRESS } = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: parseInt(SMTP_PORT || '587', 10),
  secure: (SMTP_PORT === '465'), // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function sendContactEmail(input: SendContactEmailInput): Promise<SendContactEmailOutput> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: SendContactEmailOutputSchema,
  },
  async (input) => {
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM_ADDRESS || !SMTP_TO_ADDRESS) {
      console.error('SMTP environment variables are not set. Please check your .env file.');
      return {
        success: false,
        error: 'The server is not configured to send emails. Please contact the site administrator.',
      };
    }

    try {
      const emailHtml = render(
        ContactFormEmail({
          name: input.name,
          email: input.email,
          phone: input.phone,
          subject: input.subject,
          message: input.message,
        })
      );

      const mailOptions = {
        from: `B&V Designs Contact Form <${SMTP_FROM_ADDRESS}>`,
        to: SMTP_TO_ADDRESS,
        subject: `New Message: ${input.subject}`,
        replyTo: input.email,
        html: emailHtml,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log('Email sent successfully:', info.messageId);
      return { success: true };

    } catch (e: any) {
      console.error('Failed to send email:', e);
      return { success: false, error: e.message };
    }
  }
);
