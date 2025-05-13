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

const BookingFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  tvBrand: z.string().min(1, 'TV Brand is required'),
  issue: z.string().min(1, 'Issue description is required'),
  location: z.string().min(1, 'Location is required'),
});

export type BookingFormResponse = {
  success: boolean;
  error?: string;
};

export async function sendEmail(formData: FormData): Promise<BookingFormResponse> {
  const data = {
    name: formData.get('name') as string,
    phone: formData.get('phone') as string,
    tvBrand: formData.get('tvBrand') as string,
    issue: formData.get('issue') as string,
    location: formData.get('location') as string,
  };

  const validationResult = BookingFormSchema.safeParse(data);
  if (!validationResult.success) {
    return { success: false, error: 'Please fill in all required fields' };
  }

  const validatedData = validationResult.data;

  try {
    await transporter.sendMail({
      from: 'tvprosjay@gmail.com',
      to: 'tvprosjay@gmail.com',
      subject: `New TV Repair Booking from ${validatedData.name}`,
      html: `
        <h2>New TV Repair Booking</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>TV Brand:</strong> ${validatedData.tvBrand}</p>
        <p><strong>Issue Description:</strong> ${validatedData.issue}</p>
        <p><strong>Location:</strong> ${validatedData.location}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
