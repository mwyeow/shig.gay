import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full py-10">
      <div className="pl-8 lg:pl-111 pr-8 lg:pr-16 flex flex-col gap-4">
        <div className="w-full h-px bg-white/10" />

        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md overflow-hidden shrink-0">
            <Image
              src="/avatar.webp"
              alt=""
              width={28}
              height={28}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-pixel font-bold bg-linear-to-r from-accent to-white bg-clip-text text-transparent whitespace-nowrap">
            angel@shig.gay
          </h2>
        </div>

        <div>
          <p className="text-subtext text-base">© Copyright shig.gay group.</p>
          <p className="text-subtext text-base mt-1">
            Kemomimi-chan (Shiggy) is not a creation by the shig.gay group.{" "}
            <Link
              href="https://www.pixiv.net/en/users/2509595"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Source
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
