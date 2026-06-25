import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href: string;
  text: string;
}

export default function Link({ icon: Icon, href, text }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between py-2.5 group"
    >
      <Icon className="text-accent text-2xl group-hover:scale-110 transition-transform" />
      <span className="text-accent text-lg group-hover:underline underline-offset-4">
        {text}
      </span>
    </a>
  );
}
