import type { Metadata } from 'next';
import { generateMetadata } from '../config/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Our Portfolio',
  description: 'View our completed TV repair projects and success stories. Professional TV repair services in Johannesburg.',
  path: '/portfolio'
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
