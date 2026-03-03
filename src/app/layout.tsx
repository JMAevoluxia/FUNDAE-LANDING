import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FUNDAE Manager | Automatiza tu Formación Bonificada",
  description: "Plataforma SaaS que centraliza y automatiza toda la gestión de la formación bonificada. Control de crédito, ROI y asistente IA integrado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} antialiased bg-night text-pearl`}
      >
        {children}
      </body>
    </html>
  );
}
