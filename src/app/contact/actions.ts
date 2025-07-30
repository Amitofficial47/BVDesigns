
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import { ContactFormEmail } from '@/emails/contact-form-email';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export type FormState = {
  success: boolean;
  message: string;
}

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM_ADDRESS, SMTP_TO_ADDRESS } = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: parseInt(SMTP_PORT || '587', 10),
  secure: (SMTP_PORT === '465'),
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function sendContactEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM_ADDRESS || !SMTP_TO_ADDRESS) {
      console.error('SMTP environment variables are not set. Please check your .env file.');
      return {
        success: false,
        message: 'The server is not configured to send emails. Please contact the site administrator.',
      };
    }

  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
        success: false,
        message: 'Invalid form data. Please check your inputs.',
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const emailHtml = render(
      ContactFormEmail({ name, email, subject, message })
    );

    const mailOptions = {
      from: `B&V Designs Contact Form <${SMTP_FROM_ADDRESS}>`,
      to: SMTP_TO_ADDRESS,
      subject: `New Message: ${subject}`,
      replyTo: email,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);
    
    return { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.'
    };

  } catch (e: any) {
    console.error('Failed to send email:', e);
    return {
        success: false,
        message: 'There was a problem sending your message. Please try again later.' 
    };
  }
}
