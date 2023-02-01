import "./globals.css";
import Header from "@/app/components/Header";
import { IBM_Plex_Mono } from "@next/font/google";

const IBM_PLEX_MONO_FONT = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  style: "normal",
  variable: "--font-ibm-flex-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={IBM_PLEX_MONO_FONT.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
