import Image from "next/image";
import Link from "next/link";

export interface BannerButton {
  href: string;
  label: string;
}

interface BannerProps {
  buttons?: BannerButton[];
  showHome?: boolean;
  className?: string;
}

export default function Banner({
  buttons = [],
  showHome = false,
  className = "",
}: BannerProps) {
  return (
    <div className={`relative mb-6 w-full ${className}`}>
      <div
        className="absolute -inset-1 bg-cover bg-center blur-xl opacity-40 scale-110 rounded-2xl"
        style={{ backgroundImage: "url('/banner.webp')" }}
      />
      <div className="relative h-48 rounded-xl overflow-hidden z-10">
        <Image
          src="/banner.webp"
          alt="Banner"
          fill
          sizes="(max-width: 1024px) 100vw, 672px"
          className="object-cover object-center"
          priority
        />

        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          {showHome && (
            <Link
              href="/"
              className="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-white/20 hover:border-accent bg-black/50"
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
          )}
          {buttons.map((btn) => (
            <Link
              key={btn.href}
              href={btn.href}
              className="px-3 py-1.5 text-xs text-white bg-black hover:bg-black/80 rounded-md font-pixel"
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
