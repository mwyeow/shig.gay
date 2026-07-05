"use client";
import { useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import Clock from "../common/clock";
import Button from "../common/button";

export default function Side() {
  const [imgError, setImgError] = useState(false);

  return (
    <aside className="w-85 lg:w-95 shrink-0 flex flex-col items-center gap-7 p-6 lg:p-8 pt-10 lg:pt-14 relative z-20">
      <div className="w-full flex justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="w-56 h-56 rounded-full bg-background overflow-hidden shrink-0">
            {imgError ? (
              <span className="text-7xl font-pixel text-accent flex items-center justify-center h-full">
                M
              </span>
            ) : (
              <Image
                src="/avatar.webp"
                alt="mwyeow"
                className="w-full h-full object-cover"
                width={512}
                height={512}
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <Image
            src="/overlay.gif"
            alt=""
            className="absolute w-54 h-54 object-cover pointer-events-none z-10 scale-125"
            width={512}
            height={512}
          />
        </div>
      </div>

      <div className="w-full text-center">
        <h2 className="text-3xl font-pixel font-bold bg-linear-to-r from-accent to-white bg-clip-text text-transparent">
          ~@mwyeow.shig.gay~
        </h2>
      </div>

      <Clock />

      <div className="w-full h-px bg-white/10" />

      <div className="w-full flex flex-col gap-3">
        <Button
          icon={FaDiscord}
          href="https://discord.gg/oopsy"
          text="Discord"
          variant="primary"
        />
        <Button
          icon={FaGithub}
          href="https://github.com/mwyeow"
          text="GitHub"
          variant="secondary"
        />
        <Button
          icon={IoMdMail}
          href="mailto:mwyeow@shig.gay"
          text="Email"
          variant="secondary"
        />
      </div>
    </aside>
  );
}
