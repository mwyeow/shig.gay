import Side from "@/components/base/side";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-80 lg:h-100 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/banner.webp')" }}
      />

      <div className="absolute top-0 left-0 w-full h-80 lg:h-100 bg-linear-to-b from-background/40 via-background/70  to-background z-1" />

      <main className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-8 pt-10 lg:pt-14">
        <Side />

        <section className="flex-1 max-w-2xl pt-8 lg:pt-12">
          <h1 className="text-3xl lg:text-4xl font-pixel mb-8 leading-snug">
            Mwyeowo you, welcome to my page!
          </h1>
          <div className="text-subtext leading-relaxed text-lg space-y-4">
            <p>
              I&apos;m a programmer based in the UK who loves turning random
              sparks of inspiration into creative little projects. I build
              things purely because I enjoy it (although the feeling of
              accomplishment afterwards is a pretty nice bonus!).
            </p>
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
              ideas, only to come up with a third one halfway through. It's a
              bit chaotic, but it&apos;s all part of the fun, and I
              wouldn&apos;t have it any other way.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
