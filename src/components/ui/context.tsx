"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface ContextPopupProps {
  children: [ReactNode, ReactNode];
  className?: string;
}

export default function ContextPopup({ children, className = "" }: ContextPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative group" ref={popupRef}>
      <div onClick={() => setIsOpen((prev) => !prev)}>
        {children[0]}
      </div>
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full transition-all duration-200 z-50 ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100"
        } ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children[1]}
      </div>
    </div>
  );
}