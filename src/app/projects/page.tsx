import Side from "@/components/side";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import Embedded from "@/components/ui/embedded";
import { getOg } from "@/lib/og";

const projectUrls = [
  "https://wamoone.com",
  "https://github.com/mwyeow/moonify.js",
  "https://github.com/mwyeow/discord-bot-namestyles",
];

export const revalidate = 86400;

export default async function ProjectsPage() {
  const previews = await Promise.all(projectUrls.map((url) => getOg(url)));

  return (
    <div className="relative min-h-screen overflow-hidden">
      <main className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 p-8 pt-10 lg:pt-14">
        <Side />

        <section className="flex-1 max-w-2xl mt-6 lg:mt-10">
          <Banner buttonHref="/" buttonLabel="Back" />

          <h1 className="text-3xl lg:text-4xl font-pixel mb-3 leading-snug">
            Projects
          </h1>

          <div className="columns-1 sm:columns-2 gap-3.5 [column-fill:balance]">
            {previews.map((item) => (
              <Embedded key={item.url} data={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
