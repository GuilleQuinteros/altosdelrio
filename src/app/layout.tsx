import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PwaRegister } from "@/components/PwaRegister";
export const metadata: Metadata = {
  title: "Altos del Río | Experiencias gastronómicas",
  description: "Descubrí Altos del Río, un espacio gastronómico en Formosa Capital, Formosa, Argentina.",
  manifest: "/manifest.webmanifest"
};
export const viewport: Viewport = { themeColor: "#202521", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><PwaRegister />{children}</body></html>;
}
