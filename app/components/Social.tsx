import z from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SocialType = z.object({
  src: z.string(),
  alt: z.string(),
  username: z.string(),
  href: z.string().optional(),
});

export default function Social({
  src,
  username,
  alt,
  href,
}: z.infer<typeof SocialType>) {
  const basic = (
    <div className="flex flex-row items-center justify-center gap-1">
      <img
        className="h-5 w-5"
        src={`images/social/${src}`}
        alt={`${alt} logo`}
      />
      <p className="overflow-hidden">{username}</p>
    </div>
  );

  return href ? (
    <div className="rounded-[1em] border border-solid border-gray-500 pt-1 pr-2 pb-1 pl-2 hover:border-cyan-600">
      <a href={href}>{basic}</a>
    </div>
  ) : (
    <div className="rounded-[1em] border border-solid border-gray-500 pt-1 pr-2 pb-1 pl-2">
      <a href={href}>{basic}</a>
    </div>
  );
}
