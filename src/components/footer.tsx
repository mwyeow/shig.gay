import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full pt-16 pb-10 mt-auto z-10">
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
            <Image
              src="/avatar.webp"
              alt=""
              width={28}
              height={28}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-pixel font-bold bg-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent whitespace-nowrap">
            angel@mwyeow.dev
          </h2>
        </div>
        <div>
          <p className="text-subtext text-base">© Copyright mwyeow.dev.</p>
        </div>
      </div>
    </footer>
  );
}
