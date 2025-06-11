import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Vazirmatn } from "next/font/google";

export const metadata: Metadata = {
  title: "رضا آقاجانی | دکا",
  description: "نمونه کار رضا آقاجانی برای شرکت دکا",
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>",
    },
  ],
  openGraph: {
    title: "رضا آقاجانی | دکا",
    description: "نمونه کار رضا آقاجانی برای شرکت دکا",
    type: "website",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-vazirmatn",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={`${geist.variable} ${vazirmatn.variable}`}>
      <body className="min-h-screen antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        {children}
      </body>
    </html>
  );
}
