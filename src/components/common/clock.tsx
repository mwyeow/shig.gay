"use client";
import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState("--:--:--");
  const [hoverTime, setHoverTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
      setHoverTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full flex items-center justify-between px-2">
      <span className="text-subtext text-base font-semibold">
        Greater Manchester, UK
      </span>

      <div className="group relative">
        <span className="bg-gray-500/10 rounded px-2 py-0.5 text-subtext text-base font-mono tabular-nums cursor-default transition-colors group-hover:bg-gray-500/15 group-hover:text-accent">
          {time}
        </span>
        <div className="absolute top-full mt-2 right-0 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50">
          <div className="bg-black text-white text-sm px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg border border-white/5 font-mono">
            {hoverTime}
            <div className="absolute -top-1 right-4 w-2 h-2 bg-black border-l border-t border-white/5 rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}
