import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "MindBuddy - Your AI Powered Mental Health Companion",
  description: "Get personalized mental health support, evidence-based techniques, and 24/7 guidance for your wellness journey. Join thousands who have transformed their mental health with MindBuddy.",
  keywords: "mental health, AI therapy, wellness, mindfulness, anxiety, depression, support",
  authors: [{ name: "MindBuddy Team" }],
  robots: "index, follow",
  openGraph: {
    title: "MindBuddy - Your AI-Powered Mental Health Companion",
    description: "Get personalized mental health support with AI-powered insights and 24/7 guidance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindBuddy - Your AI-Powered Mental Health Companion",
    description: "Get personalized mental health support with AI-powered insights and 24/7 guidance.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
