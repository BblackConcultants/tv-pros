import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { generateMetadata } from "./config/metadata";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  ...generateMetadata(),
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
