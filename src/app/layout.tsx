import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#e74c62",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mwyeow.shig.gay"),
  title: "@mwyeow",
  description:
    "An indecisive pro'grammer making random things on the internet.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "@mwyeow",
    description:
      "An indecisive pro'grammer making random things on the internet.",
    images: ["/avatar.webp"],
  },

  twitter: { // ew, shitwitter.
    card: "summary",
    title: "@mwyeow",
    description: "An indecisive pro'grammer making random things on the internet.",
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
