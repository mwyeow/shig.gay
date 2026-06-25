import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#5aa8eb",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mwyeow.shig.gay"),
  title: "@mwyeow",
  description:
    "A programmer based in the UK who loves turning random sparks of inspiration into creative little projects.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "@mwyeow",
    description:
      "A programmer based in the UK who loves turning random sparks of inspiration into creative little projects.",
    images: ["/avatar.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
