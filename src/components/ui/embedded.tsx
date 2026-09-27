import Image from "next/image";
import { OgData } from "@/lib/og";

interface EmbeddedProps {
  data: OgData;
}

export default function Embedded({ data }: EmbeddedProps) {
  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ borderLeftColor: data.color }}
      className="group inline-flex flex-col w-full mb-3.5 break-inside-avoid bg-black/40 hover:bg-black/60 transition-colors rounded-lg border-l-[4px] border border-white/10 p-3 gap-2.5 shadow-sm overflow-hidden"
    >
      <div className="flex gap-2.5 items-start justify-between">
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            {data.icon && (
              <div className="relative w-3.5 h-3.5 shrink-0">
                <Image
                  src={data.icon}
                  alt=""
                  fill
                  unoptimized
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <span className="text-[11px] text-subtext truncate">
              {data.siteName || data.domain}
            </span>
          </div>

          {data.title && (
            <h3 className="text-white group-hover:text-accent transition-colors text-sm font-semibold leading-snug line-clamp-1">
              {data.title}
            </h3>
          )}

          {data.description && (
            <p className="text-[11px] text-subtext leading-relaxed line-clamp-2">
              {data.description}
            </p>
          )}
        </div>

        {data.image && data.small && (
          <div className="relative w-16 h-16 shrink-0 rounded overflow-hidden border border-white/10 bg-black/20">
            <Image
              src={data.image}
              alt={data.title || "Preview"}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        )}
      </div>

      {data.image && !data.small && (
        <div
          className="relative w-full rounded overflow-hidden border border-white/10 bg-black/20 mt-1"
          style={{
            aspectRatio:
              data.width && data.height
                ? `${data.width} / ${data.height}`
                : "16 / 9",
          }}
        >
          <Image
            src={data.image}
            alt={data.title || "Preview"}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      )}
    </a>
  );
}
