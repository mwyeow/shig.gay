import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  buttonHref?: string;
  buttonLabel?: string;
}

export default function Banner({ buttonHref, buttonLabel }: BannerProps) {
  return (
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

        {buttonHref && buttonLabel && (
          <Link
            href={buttonHref}
            className="absolute top-3 right-3 z-20 px-3 py-1.5 text-xs text-white bg-black hover:bg-black/80 rounded-md transition-all font-pixel"
          >
            {buttonLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
