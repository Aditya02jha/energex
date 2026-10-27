import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ENERGEX | Solar & Lighting Infrastructure in Bihar",
    template: "%s | ENERGEX",
  },
  description:
    "ENERGEX is an execution-driven solar and lighting infrastructure company in Bihar. Rooftop solar, PM Surya Ghar Yojana, solar street lights, high mast lighting and end-to-end execution.",
  icons: { icon: "/images/logo-mark.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
