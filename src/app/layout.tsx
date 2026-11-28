import type { Metadata, Viewport } from "next";
// @ts-ignore CSS is resolved by the Next.js bundler.
import "./globals.css";

export const metadata: Metadata = {
  title: "Paseo Altos del Río · Menús",
  description: "Elegí un local y mirá su carta.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="min-h-dvh bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
