import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#d2405c",
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

function Noise() {
  return (
    <div className="absolute inset-0 w-full h-full min-h-screen -z-40 pointer-events-none flex flex-col overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <svg
          key={i}
          className="w-screen h-screen saturate-0 shrink-0"
          viewBox="0 0 142 158"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id={`noiseFilter-${i}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="9"
              numOctaves="1"
              stitchTiles="stitch"
              result="turbulence"
            />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="-1 0.2" />
              <feFuncG type="table" tableValues="-1 0.2" />
              <feFuncB type="table" tableValues="-1 0.2" />
            </feComponentTransfer>
          </filter>
          <rect
            className="w-screen h-screen"
            filter={`url(#noiseFilter-${i})`}
          />
        </svg>
      ))}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Noise />
        {children}
      </body>
    </html>
  );
}