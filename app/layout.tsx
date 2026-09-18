import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Clarasight - The AI platform for corporate travel & finance",
  description:
    "Purpose-built operating system for enterprise travel and finance leaders to move faster, work smarter and automate savings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans h-full overflow-hidden`}>
      <body className="h-full h-[100dvh] max-h-screen overflow-hidden bg-[#070919] text-white selection:bg-indigo-500 selection:text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
