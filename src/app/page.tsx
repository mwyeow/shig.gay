"use client";

import { useState } from "react";
import Image from "next/image";
import Side from "@/components/side";
import Footer from "@/components/footer";

const skwills = [
  "https://skillicons.dev/icons?i=html,css,typescript,python,c,cs,cpp,dotnet,go,ruby,java,dart&perline=12&theme=dark",
  "https://skillicons.dev/icons?i=nextjs,astro,nodejs,bun,react,supabase,mongodb,express,discordjs,bootstrap&perline=12&theme=dark",
  "https://skillicons.dev/icons?i=aws,cloudflare,apple,linux,discord,bots&perline=12&theme=dark",
  "https://skillicons.dev/icons?i=docker,visualstudio,vscode,blender,figma,github,gitlab&perline=12&theme=dark",
];

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">

      <main className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 p-8 pt-10 lg:pt-14">
        <Side />

        <section className="flex-1 max-w-2xl mt-6 lg:mt-10">
          <div className="relative mb-6">
            <div
              className="absolute -inset-1 bg-cover bg-center blur-xl opacity-40 scale-110 rounded-2xl"
              style={{ backgroundImage: "url('/banner.webp')" }}
            />
            <div className="relative h-48 rounded-xl overflow-hidden z-10">
              <Image
                src="/banner.webp"
                alt="Banner"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-pixel mb-3 leading-snug">
            Mwyeowo you, welcome to my page!
          </h1>
          <div className="text-subtext leading-relaxed text-lg space-y-4">
            <p>
              I&apos;m a programmer based in the UK who loves turning random
              sparks of inspiration into creative little projects. I build
              things purely because I enjoy it (although the feeling of
              accomplishment afterwards is a pretty nice bonus!).{" "}
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-white hover:opacity-80 transition-opacity inline"
              >
                See {expanded ? "Less" : "More"}
              </button>
            </p>
            {expanded && (
              <>
                <p>
                  I&apos;ve been programming for almost 10 years now and while I
                  studied computing at college, most of what I know is self-taught,
                  learned through countless projects, experiments, mistakes, and
                  super stubborn late-night rabbit holes. I originally started
                  programming with Visual Basic, and although I&apos;ve worked with
                  many different languages since then, that curiosity to learn and
                  create is still what drives me today.
                </p>
                <p>
                  That said, creativity doesn&apos;t always come without its
                  challenges for me, i&apos;m notoriously indecisive, and it
                  definitely shows sometimes. I can spend ages choosing between two
                  ideas, only to come up with a third one halfway through. It&apos;s a
                  bit chaotic, but it&apos;s all part of the fun, and I
                  wouldn&apos;t have it any other way.
                </p>
              </>
            )}
          </div>

          <div className="w-full h-px bg-secondary mt-4" />
          <h2 className="text-xl text-white mt-2">🪅Mwyeowi Tech</h2>

          <div className="mt-2 flex flex-col gap-2">
            {skwills.map((url, idx) => (
              <Image
                key={idx}
                src={url}
                alt={`Skills row ${idx + 1}`}
                width={500}
                height={40}
                className="opacity-80 h-10 w-full object-contain object-left"
                loading="lazy"
                unoptimized
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}