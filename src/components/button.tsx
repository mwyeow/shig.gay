import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href?: string;
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  icon: Icon,
  href,
  text,
  variant = "primary",
  className = "",
}: Props) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-pixel font-semibold px-4 py-2 rounded-lg transition-all duration-150 outline-none cursor-pointer active:scale-98";

  const variants = {
    primary: "bg-accent text-background hover:bg-accent/90",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 border border-white/10",
  };

  const finalStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalStyles}
      >
        <Icon className="text-lg shrink-0" />
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button className={finalStyles}>
      <Icon className="text-lg shrink-0" />
      <span>{text}</span>
    </button>
  );
}
