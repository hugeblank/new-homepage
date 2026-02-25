import type { JSX } from "react";

export default function Project({
  src,
  title,
  href,
  children,
}: {
  src: string;
  href: string | undefined;
  title: string;
  children: JSX.Element | undefined;
}) {
  return (
    <div className="flex flex-col items-center justify-start rounded-[1em] border border-solid border-gray-500 pt-1 pr-2 pb-1 pl-2">
      <a href={href} className="group">
        <div className="flex w-fit flex-row items-center justify-center gap-1 text-cyan-600 group-hover:underline">
          <img src={src} width={32} alt={`${title} logo`} />
          <p>{title}</p>
        </div>
      </a>
      {children ? children : ""}
    </div>
  );
}
