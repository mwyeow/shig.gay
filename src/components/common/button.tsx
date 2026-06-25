import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href?: string;
  text: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  icon: Icon,
  href,
  text,
  variant = "primary",
}: Props) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-pixel font-semibold px-6 py-3 rounded-2xl transition-colors duration-200 outline-none cursor-pointer";
  const innerShadow = "shadow-[inset_0_-4px_0px_0px_rgba(0,0,0,0.4)]";

  const variants = {
    primary: `bg-accent text-background hover:bg-accent/90 ${innerShadow}`,
    secondary: `bg-white/10 text-text border border-white/10 hover:bg-white/20 ${innerShadow}`,
  };

  const finalStyles = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalStyles}
      >
        <Icon className="text-xl" />
        {text}
      </a>
    );
  }

  return (
    <button className={finalStyles}>
      <Icon className="text-xl" />
      {text}
    </button>
  );
}
