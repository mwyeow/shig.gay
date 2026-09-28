import { Metadata } from "next";
import Link from "next/link";
import Banner from "@/components/banner";
import Embedded from "@/components/ui/embedded";
import { getOg } from "@/lib/og";

export const metadata: Metadata = {
  title: "@mwyeow's silly projects :3",
};

const projectUrls = [
  "https://wamoone.com",
  "https://github.com/mwyeow/moonify.js",
  "https://github.com/mwyeow/discord-bot-namestyles",
];

export const revalidate = 86400;

export default async function ProjectsPage() {
  const previews = await Promise.all(projectUrls.map((url) => getOg(url)));

  return (
    <section className="w-full">
      <div className="lg:hidden absolute top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="w-full max-w-2xl px-4 sm:px-8 flex justify-end">
          <Link
            href="/"
            className="pointer-events-auto px-3 py-1.5 text-xs text-white bg-black hover:bg-black/80 rounded-md transition-all font-pixel"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="hidden lg:block w-full">
        <Banner buttonHref="/" buttonLabel="Back" />
      </div>

      <h1 className="text-3xl lg:text-4xl font-pixel mb-3 leading-snug">
        Projects
      </h1>

      <div className="columns-1 sm:columns-2 gap-3.5 [column-fill:balance]">
        {previews.map((item) => (
          <Embedded key={item.url} data={item} />
        ))}
      </div>
    </section>
  );
}
