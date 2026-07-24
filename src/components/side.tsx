"use client";
import { useState, useEffect } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import Clock from "@/components/ui/clock";
import Button from "@/components/button";
import ContextPopup from "@/components/ui/context";

export default function Side() {
  const [imgError, setImgError] = useState(false);
  const [avatars, setAvatars] = useState<string[]>([]);
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch("/api/avatars");
        const data = await response.json();
        setAvatars(data.files || []);
      } catch (error) {
        console.error("Failed to fetch avatars:", error);
        setAvatars(["/avatars/0.webp"]);
      }
    };

    fetchAvatars();
  }, []);

  const currentAvatar = avatars[currentAvatarIndex] || "/avatars/0.webp";

  const selectAvatar = (idx: number) => {
    setCurrentAvatarIndex(idx);
    setImgError(false);
  };

  return (
    <aside className="w-85 lg:w-95 shrink-0 flex flex-col items-start gap-7 p-6 lg:p-8 pt-10 lg:pt-14 relative z-20">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-center">
          <ContextPopup className="mb-2">
            <div className="relative w-56 h-56 flex items-center justify-center cursor-pointer">
              <div className="w-56 h-56 rounded-full bg-background overflow-hidden shrink-0">
                {imgError ? (
                  <span className="text-7xl font-pixel text-accent flex items-center justify-center h-full">
                    M
                  </span>
                ) : (
                  <Image
                    key={currentAvatar}
                    src={currentAvatar}
                    alt="mwyeow"
                    className="w-full h-full object-cover"
                    width={512}
                    height={512}
                    onError={() => setImgError(true)}
                    priority={currentAvatarIndex === 0}
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
            {avatars.length > 1 && (
              <div className="bg-black text-white px-2 py-1.5 rounded-md shadow-lg border border-white/10 flex items-center">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black border-l border-t border-white/10 rotate-45" />
                {avatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="w-7 h-7 rounded-full overflow-hidden shrink-0 cursor-pointer border-2 border-black transition-all hover:border-transparent hover:z-10"
                    style={{ marginLeft: idx === 0 ? 0 : -6 }}
                    onClick={() => selectAvatar(idx)}
                  >
                    <Image
                      src={avatar}
                      alt={`avatar ${idx}`}
                      className="w-full h-full object-cover"
                      width={28}
                      height={28}
                    />
                  </div>
                ))}
              </div>
            )}
          </ContextPopup>
        </div>

        <div className="w-full">
          <h2 className="text-3xl text-center font-pixel font-bold bg-linear-to-r from-accent to-white bg-clip-text text-transparent">
            @mwyeow, angel
          </h2>
        </div>
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