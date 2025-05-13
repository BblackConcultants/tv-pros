import type { Metadata } from 'next';
import { generateMetadata } from '../config/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Contact TV Pro\'s Electronics for professional TV repair services in Johannesburg. Call us at +27 71 734 3348 or visit our location.',
  path: '/contact'
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
