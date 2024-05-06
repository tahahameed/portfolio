import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "@/app/ui/styles/css/bootstrap.min.css";
import "@/app/ui/styles/css/font-awesome.min.css";
import "@/app/ui/styles/css/magnific-popup.css";
import "@/app/ui/styles/css/animate.css";
import "@/app/ui/styles/css/main.css";
import "@/app/ui/styles/css/responsive.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taha Hameed - Resume",
  description: "Generated by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
