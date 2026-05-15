import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blackfox Phones - Premium Apple Accessories Wholesale",
  description:
    "Premium wholesale distribution of authentic Apple phone accessories from Dubai and India. Trusted by 500+ retailers across MENA and South Asia.",
  keywords:
    "wholesale, apple, accessories, chargers, cables, cases, dubai, india, retail",
  robots: "index, follow",
  openGraph: {
    title: "Blackfox Phones - Wholesale Apple Accessories",
    description: "Premium wholesale distribution across MENA and South Asia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col bg-dark text-white">
        {children}
      </body>
    </html>
  );
}
