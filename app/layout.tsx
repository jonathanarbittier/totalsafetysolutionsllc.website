import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "Total Safety Solutions LLC | Safety Consulting & Compliance",
  description:
    "Practical safety consulting, OSHA compliance, training, audits, staffing, and field support for contractors and businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
