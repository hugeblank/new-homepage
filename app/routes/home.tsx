import type { Route } from "./+types/home";
import { prefetch } from "~/lib/prefetch";
import Button from "~/components/Button";
import Social from "~/components/Social";
import Project from "~/components/Project";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.png" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "it's hugeblank" },
    { name: "description", content: "the homepage" },

    //  Facebook Meta Tags
    { property: "og:url", content: "https://hugeblank.dev" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "it's hugeblank" },
    { property: "og:description", content: "the home page" },
    {
      property: "og:image",
      content: "https://hugeblank.dev/images/hugeblank.png",
    },

    // Twitter Meta Tags
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:domain", content: "hugeblank.dev" },
    { property: "twitter:url", content: "https://hugeblank.dev" },
    { name: "twitter:title", content: "it's hugeblank" },
    { name: "twitter:description", content: "the home page" },
    {
      name: "twitter:image",
      content: "https://hugeblank.dev/images/hugeblank.png",
    },
  ];
}

export const middleware: Route.MiddlewareFunction[] = [
  async ({ context }) => {
    const { queryClient, trpc } = prefetch(context);

    // Block the page to prefetch
    await queryClient.prefetchQuery(trpc.hero.message.queryOptions());

    // Or, if you don't want to block the page:
    // void queryClient.prefetchQuery(trpc.hero.message.queryOptions());

    // If you need to prevent internal navigations from causing prefetching, use skipIfSameOrigin
    // await skipIfSameOrigin(request, async () => {
    //   await queryClient.prefetchQuery(trpc.hero.message.queryOptions());
    // });
  },
];

export default function Home() {
  // const trpc = useTRPC();
  // const message = useQuery(trpc.hero.message.queryOptions());

  return (
    <div className="flex flex-col place-content-center text-center">
      <div className="flex flex-row place-content-center gap-3">
        <img
          className="h-10 w-10 self-center"
          src="favicon.png"
          alt="A bagel"
        />
        <h1>
          Welcome to <p title="you are here">hugeblank.dev</p>
        </h1>
        <img
          className="h-10 w-10 self-center"
          src="favicon.png"
          alt="A bagel"
        />
      </div>
      <p>Important Viewing:</p>
      <video controls className="mr-auto ml-auto min-w-1/6">
        <source src="nene~yayboom.mp4" type="video/mp4" />
        <track src="nene~yayboom.vtt" kind="captions" />
      </video>
      <h2 className="pt-4 pb-2">Hello</h2>
      <p>
        I&apos;m hugeblank, or Todd depending on the time of day and who you
        ask. I have a bachelors degree in CS and use my skills in ways that
        would make my professors wish they didn&apos;t let me graduate. I spend
        most of my time programming in Java, but got my degree using other
        languages like C/C++, Python, and frameworks like Flutter and Django.
        Recently I&apos;ve been dipping my toe into web development via
        TypeScript, and most recently with React.
      </p>
      <img
        src="images/bug.png"
        alt="bug in my website"
        title="bug in my website"
        width={16}
      />
      <p>
        Over the last few years I&apos;ve also gained an unhealthy obsession
        over public transit (trains),{" "}
        <a className="text-cyan-600 hover:underline" href="https://baub.au">
          vTubers
        </a>
        , and Japanese culture, and even the language itself. This obsession has
        (naturally) resulted in me learning Japanese and going on a 2 month trip
        to Japan, where I visited over 20 cities and made over{" "}
        <a
          id="oops"
          href="#oops"
          title="I forgot one already"
          className="line-through"
        >
          20
        </a>{" "}
        19 memories. I will definitely be making a blog post about that so
        please stay tuned.
      </p>
      <h2 className="pt-4 pb-2">I have a blog</h2>
      <p>
        <a
          href="https://blog.hugeblank.dev/"
          className="text-cyan-600 hover:underline"
        >
          It is here
        </a>
        . I recommend{" "}
        <a
          href="https://blog.hugeblank.dev/3mgzae7yxt22k"
          className="text-cyan-600 hover:underline"
        >
          this entry
        </a>
        .
      </p>
      <h2 className="pt-4 pb-2">I have projects</h2>
      <div className="auto-cols grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2">
        <Project
          title="Allium"
          src="https://allium.moongarden.dev/icon.png"
          href="https://allium.moongarden.dev/"
        >
          <p>
            Minecraft mod that embeds an interpreter to allow you to write mods
            in Lua.
          </p>
        </Project>
        <Project
          title="Asahi"
          src="https://cdn.modrinth.com/data/CPo6Ht5f/ca3370b0beaeb5addfe3ae58b3b8d8a9a0a4f817.png"
          href="https://modrinth.com/mod/asahi"
        >
          <p>
            Minecraft mod that fixes Minecraft&apos;s daylight cycle skipping
            when on a laggy server.
          </p>
        </Project>
        <Project
          title="Piston Maven"
          src="https://www.minecraft.net/etc.clientlibs/minecraftnet/clientlibs/clientlib-site/resources/android-icon-192x192.png"
          href="https://github.com/hugeblank/piston-maven"
        >
          <p>
            Spoof maven repository backed by minecraft.net&apos;s launcher
            version manifest data.
          </p>
        </Project>
        <Project
          title="Stubtool"
          src="images/text-x-script.svg"
          href="https://github.com/hugeblank/stubtool"
        >
          <p>
            Bootstrap script for{" "}
            <code className="rounded-sm bg-gray-800 px-1 py-0.5">
              efibootmgr
            </code>
            . Makes setting up efistubs on{" "}
            <a
              className="text-cyan-600 hover:underline"
              href="https://archlinux.org/"
            >
              archlinux
            </a>{" "}
            easier.
          </p>
        </Project>
        <Project
          title="Tegami"
          src="https://tegami.hugeblank.dev/static/icon.png"
          href="https://github.com/hugeblank/tegami"
        >
          <p>
            A small web app for writing & self-hosting password protected
            letters & unlisted blog posts.
          </p>
        </Project>
        <Project
          title="WhiteBreeze"
          src="https://blog.hugeblank.dev/favicon.png"
          href="https://github.com/hugeblank/whitebreeze"
        >
          <p>
            A custom frontend for{" "}
            <a
              href="https://whtwnd.com"
              className="text-cyan-600 hover:underline"
            >
              WhiteWind
            </a>
            , a blog service that utilizes{" "}
            <a
              href="https://atproto.com"
              className="text-cyan-600 hover:underline"
            >
              ATProto
            </a>
            .&nbsp;
            <a
              href="https://blog.hugeblank.dev/"
              className="text-cyan-600 hover:underline"
            >
              My blog
            </a>{" "}
            uses this.
          </p>
        </Project>
        <Project
          title="GrayHaze"
          src="https://grayhaze.live/favicon.png"
          href="https://grayhaze.live/"
        >
          <p>
            Defunct Live streaming service served via{" "}
            <a
              href="https://atproto.com"
              className="text-cyan-600 hover:underline"
            >
              ATProto
            </a>
            .
          </p>
        </Project>
      </div>
      <h2 className="pt-4 pb-2">I have social media</h2>
      <div className="mr-auto ml-auto grid grid-cols-2 gap-2">
        <Social
          href="https://github.com/hugeblank/"
          src="github.svg"
          alt="GitHub"
          username="@hugeblank"
        />
        <Social
          href="https://bsky.hugeblank.dev/"
          src="bluesky.png"
          alt="Bluesky"
          username="@hugeblank.dev"
        />
        <Social
          href="https://steamcommunity.com/id/hugeblank/"
          src="steam.ico"
          alt="Steam"
          username="hugeblank"
        />
        <Social
          href="mailto:hugeblank@gmail.com"
          src="email.png"
          alt="Email"
          username="hugeblank@gmail.com"
        />
        <Social src="signal.png" alt="Signal" username="@hugeblank.01" />
        <Social src="discord.png" alt="Discord" username="@hugeblank" />
      </div>
      <h2 className="pt-4 pb-2">The buttons</h2>
      <div className="mr-auto ml-auto grid grid-cols-3 gap-y-2 pt-2">
        <p>My button:</p>
        <Button
          href="hugeblank.dev"
          site="hugeblank.dev"
          alt="The official hugeblank.dev button"
        />
        <p></p>
        <Button site="aspenr.dev" />
        <Button site="ally.cat" ext="png" />
        <Button site="danii.fi" />
        <Button
          href="github.com/tmpim"
          site="tmpim.pw"
          alt="tmpim.pw button"
          ext="png"
        />
        <Button site="archlinux.org" />
        {/* Other buttons go above */}
      </div>
    </div>
  );
}
