'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'tvprosjay@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD,
  }
});

const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  message: z.string().min(1, 'Message is required'),
});

export type ContactFormResponse = {
  status: 'success' | 'error';
  message: string;
};

export async function sendContactEmail(formData: FormData): Promise<ContactFormResponse> {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    message: formData.get('message') as string,
  };

  const validationResult = ContactFormSchema.safeParse(data);
  if (!validationResult.success) {
    return { status: 'error', message: 'Invalid form data' };
  }

  const validatedData = validationResult.data;
  try {
    await transporter.sendMail({
      from: 'tvprosjay@gmail.com',
      to: 'tvprosjay@gmail.com',
      subject: `New Contact Form Message from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
      replyTo: validatedData.email,
    });

    return { status: 'success', message: 'Email sent successfully' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { status: 'error', message: 'Failed to send message. Please try again.' };
  }
}
