import type { Metadata, Viewport } from "next";
import Image from "next/image";
import "./globals.css";
import Side from "@/components/side";
import Footer from "@/components/footer";

export const viewport: Viewport = {
  themeColor: "#accf77",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mwyeow.shig.gay"),
  title: "@mwyeow ~ the silliest developer :3",
  description:
    "An indecisive pro'grammer developing silly things for the internet.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "@mwyeow ~ the silliest developer :3",
    description:
      "An indecisive pro'grammer developing silly things for the internet.",
    images: ["/avatar.webp"],
  },
  twitter: {
    card: "summary",
    title: "@mwyeow ~ the silliest developer :3",
    description:
      "An indecisive pro'grammer developing silly things for the internet.",
    images: ["/avatar.webp"],
  },
};

const cv2 = {
  component: {
    type: 17,
    accent_color: 11325303,
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
      <body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <div className="lg:hidden absolute top-0 left-0 right-0 h-64 pointer-events-none z-0 overflow-hidden">
          <Image
            src="/banner.webp"
            alt=""
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            className="object-cover object-top opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/60 to-background" />
        </div>

        <div className="w-full flex-1 flex flex-col items-center relative z-10">
          <div className="w-full max-w-2xl lg:max-w-none lg:w-[calc(21.25rem+4rem+42rem)] xl:w-[calc(23.75rem+4rem+42rem)] px-4 sm:px-8 pt-6 sm:pt-10 lg:pt-14 flex-1 flex flex-col">
            <main className="flex-1 flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
              <Side />
              <div className="flex-1 max-w-2xl w-full">{children}</div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
