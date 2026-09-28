"use client";
import { useState, useEffect } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineLink,
  HiOutlineMail,
} from "react-icons/hi";
import Image from "next/image";
import Button from "@/components/button";

export default function Side() {
  const [imgError, setImgError] = useState(false);
  const [timeDiff, setTimeDiff] = useState("");

  useEffect(() => {
    const calcTimeDiff = () => {
      const now = new Date();

      const ukDateStr = now.toLocaleString("en-US", {
        timeZone: "Europe/London",
      });
      const ukDate = new Date(ukDateStr);
      const ukOffsetMinutes = Math.round(
        (ukDate.getTime() - now.getTime()) / 60000,
      );
      const diffHours = Math.round(ukOffsetMinutes / 60);

      const ukTzParts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        timeZoneName: "short",
      }).formatToParts(now);
      const tzCode =
        ukTzParts.find((p) => p.type === "timeZoneName")?.value || "GMT";

      if (diffHours === 0) {
        setTimeDiff(`${tzCode} (same time)`);
      } else {
        const sign = diffHours > 0 ? "ahead" : "behind";
        const absHours = Math.abs(diffHours);
        const unit = absHours === 1 ? "hr" : "hrs";
        setTimeDiff(`${tzCode} (${absHours} ${unit} ${sign})`);
      }
    };

    calcTimeDiff();
    const timer = setInterval(calcTimeDiff, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="w-full lg:w-85 xl:w-95 shrink-0 flex flex-col items-start gap-4 relative z-30">
      <div className="w-full flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-3">
        <div className="shrink-0 flex items-center justify-center lg:w-full lg:px-2.5">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-full lg:max-w-72 lg:h-auto lg:aspect-square shrink-0 flex items-center justify-center cursor-pointer">
            <div className="w-full h-full rounded-full bg-background overflow-hidden shrink-0 relative aspect-square">
              {!imgError && (
                <Image
                  src="/avatar.webp"
                  alt="mwyeow"
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 288px"
                  className="object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              )}
            </div>

            <div className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%] pointer-events-none z-10 overflow-visible">
              <Image
                src="/overlay.gif"
                alt=""
                fill
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 115px, 345px"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center leading-tight text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-pixel font-semibold bg-linear-to-r bg-white from-accent/50 to-white bg-clip-text text-transparent">
            mwyeow ~ angel, angle
          </h2>
          <span className="text-sm sm:text-base font-pixel text-white mt-0.5 lg:mt-1">
            @mwyeow • any
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 mt-1">
        <Button
          icon={FaGithub}
          href="https://github.com/mwyeow"
          text="GitHub"
          variant="secondary"
          className="w-full text-xs py-2"
        />
        <Button
          icon={FaDiscord}
          href="https://discord.gg/Bjgx9gaaHG"
          text="Discord"
          variant="secondary"
          className="w-full text-xs py-2"
        />
      </div>

      <div className="w-full h-px bg-white/10 my-1" />

      <div className="w-full flex flex-col items-start gap-2.5 text-sm text-subtext">
        <div className="flex items-center gap-2.5">
          <HiOutlineLocationMarker className="w-4.5 h-4.5 shrink-0 text-white/70" />
          <span>Greater Manchester, UK</span>
        </div>

        <div className="flex items-center gap-2.5">
          <HiOutlineClock className="w-4.5 h-4.5 shrink-0 text-white/70" />
          <span>{timeDiff || "GMT / BST"}</span>
        </div>

        <div className="flex items-center gap-2.5">
          <HiOutlineLink className="w-4.5 h-4.5 shrink-0 text-white/70" />
          <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1">
            <a
              href="https://shig.gay"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              shig.gay
            </a>
            <span>•</span>
            <a
              href="https://wamoone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              wamoone.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <HiOutlineMail className="w-4.5 h-4.5 shrink-0 text-white/70" />
          <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1">
            <a
              href="mailto:angel@shig.gay"
              className="hover:text-accent transition-colors"
            >
              angel@shig.gay
            </a>
            <span>•</span>
            <a
              href="mailto:angel@wamoone.com"
              className="hover:text-accent transition-colors"
            >
              angel@wamoone.com
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
