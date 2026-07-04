import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Painel Boi Gordo FGA",
  description: "Monitor diário de mercado pecuário, exportações, câmbio, alimentação e clima.",
  manifest: "/manifest.json"
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 1, themeColor: "#07110c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
