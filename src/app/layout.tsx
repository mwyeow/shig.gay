import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#b62b4a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mwyeow.shig.gay"),
  title: "@mwyeow",
  description:
    "An indecisive pro'grammer developing silly things for the internet.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "@mwyeow",
    description:
      "An indecisive pro'grammer developing silly things for the internet.",
    images: ["/avatar.webp"],
  },
  twitter: {
    card: "summary",
    title: "@mwyeow",
    description:
      "An indecisive pro'grammer developing silly things for the internet.",
    images: ["/avatar.webp"],
  },
};

const cv2 = {
  component: {
    type: 17,
    accent_color: 11938634,
    components: [
      {
        type: 9,
        components: [
          {
            type: 10,
            content:
              "# **[@mwyeow](https://mwyeow.shig.gay)**\nAn indecisive pro'grammer developing silly things for the internet.",
          },
        ],
        accessory: {
          type: 11,
          media: {
            url: "https://mwyeow.shig.gay/avatar.webp",
          },
        },
      },
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 5,
            url: "https://mwyeow.shig.gay/projects",
            label: "Projects",
          },
          {
            type: 2,
            style: 5,
            url: "https://wamoone.com",
            label: "Wamoone",
          },
          {
            type: 2,
            style: 5,
            url: "https://discord.gg/Bjgx9gaaHG",
            label: "Community",
          },
        ],
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          id="discord:component-embed"
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cv2),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
