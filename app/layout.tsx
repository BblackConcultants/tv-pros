import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { generateMetadata } from "./config/metadata";
import Navigation from "./components/Navigation";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  ...generateMetadata(),
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'icon', url: '/favicon.ico' }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${montserrat.variable} font-montserrat bg-white antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <BookingForm />
          <Footer />
        </div>
      </body>
    </html>
  );
}
