import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import Banner from "@/components/banner";

export const metadata: Metadata = {
  title: "@mwyeow's silly communities :3",
};

interface Community {
  name: string;
  url: string;
  description: string;
  image: string;
}

const communities: Community[] = [
  {
    name: "Moonebase",
    url: "https://discord.gg/Bjgx9gaaHG",
    description:
      "The official community for the better free discord levelling bot alternative!!!",
    image: "/servers/wm.png",
  },
  {
    name: "Enshrouded Modding",
    url: "https://discord.gg/JN4fTcrxxz",
    description: "An unofficial modding community for the game Enshrouded.",
    image: "/servers/em.png",
  },
];

export default function CommunitiesPage() {
  return (
    <section className="w-full">
      <div className="lg:hidden absolute top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="w-full max-w-2xl px-4 sm:px-8 flex items-center justify-end gap-2">
          <Link
            href="/"
            className="pointer-events-auto w-7 h-7 rounded-full overflow-hidden shrink-0 border border-white/20 hover:border-accent bg-black/50"
            title="Home"
          >
            <Image
              src="/avatar.webp"
              alt="Home"
              width={28}
              height={28}
              className="w-full h-full object-cover"
            />
          </Link>
          <Link
            href="/projects"
            className="pointer-events-auto px-3 py-1.5 text-xs text-white bg-black hover:bg-black/80 rounded-md font-pixel"
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="hidden lg:block w-full">
        <Banner showHome buttons={[{ href: "/projects", label: "Projects" }]} />
      </div>

      <h1 className="text-3xl lg:text-4xl font-pixel mb-3 leading-snug">
        Communities
      </h1>

      <div className="columns-1 sm:columns-2 gap-3.5 [column-fill:balance]">
        {communities.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="break-inside-avoid block mb-3.5 p-3.5 rounded-lg bg-black/20 hover:bg-black/35 backdrop-blur-md border border-white/10 transition-colors group"
          >
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 relative bg-background/50 border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-sm font-semibold text-white group-hover:text-accent transition-colors font-pixel truncate">
                  {item.name}
                </h2>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <FaDiscord className="w-4 h-4 text-[#5865F2]" />
                <HiOutlineExternalLink className="w-3.5 h-3.5 text-subtext group-hover:text-white transition-colors" />
              </div>
            </div>

            <p className="text-xs text-subtext leading-relaxed line-clamp-3">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
