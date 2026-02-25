import z from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ButtonType = z.object({
  site: z.string(),
  ext: z.enum(["gif", "png"]).default("gif").optional(),
  href: z.string().optional(),
  alt: z.string().optional(),
});

export default function Button({
  site,
  ext = "gif",
  href,
  alt,
}: z.infer<typeof ButtonType>) {
  return href ? (
    <a href={`https://${href}`}>
      <img
        src={`images/${site}.${ext}`}
        alt={`${alt}`}
        title={`${alt}`}
        className="ml-2"
      />
    </a>
  ) : (
    <a href={`https://${site}`}>
      <img
        src={`images/${site}.${ext}`}
        alt={`${site} badge`}
        title={`${site} badge`}
        className="ml-2"
      />
    </a>
  );
}
