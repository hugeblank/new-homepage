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
        typescript, and most recently with Svelte. I&apos;d like to get a job so
        if you&apos;re hiring shoot me an email or something.
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
        <Social src="signal.png" alt="Signal" username="@hugeblank.01" />
        <Social src="discord.png" alt="Discord" username="@hugeblank" />
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
      <h2 className="pt-4 pb-2">Bagel lore</h2>
      <h3 className="pt-2">The name</h3>
      <p>
        The name &quot;hugeblank&quot; dates back to 2010 when I was in my local
        library, signing up for Roblox. I had a few criteria for the name. I
        didn&apos;t want it to have any numbers, and I wanted it to be comprised
        of real words. That made things difficult enough, but to top it all off
        Roblox was already really popular back then, despite it being entirely
        different from what it is now. The only saving grace for me was that
        below the username box, if you put in a username that already existed,
        it would provide a few alternatives that weren&apos;t already taken. I
        spent what felt like an eternity typing combinations of words in with no
        luck whatsoever. It got to the point that I gave up and just slammed the
        keyboard and got a bunch of gibberish which was, hilariously, taken. But
        whatever keysmash I threw in opened the username suggestion area&apos;s
        third eye. Up until now it had just been putting numbers onto what I
        wrote in, but this time, it came close to the answer. hugeblank0. I took
        that username, put it in the input box, and then removed the 0 and
        prayed. It worked, I signed up, and the rest is history.
      </p>
      <h3 className="pt-2">The bagel</h3>
      <p>
        The bagel motif was a later occurence in the hugeblank lore. It happened
        due to a user in a Minecraft server I was playing on back in 2014. They
        were messing with anagrams of other online players usernames and
        eventually got to me. They landed on &quot;bagel hunk&quot; which I
        thought was funny. At that time I didn&apos;t exactly have a profile
        icon I was set on using, so I went and googled a photo of a bagel, and
        found this one:
      </p>
      <a className="mr-auto ml-auto" href="bagel.png">
        <img
          className="w-64"
          src="bagel.png"
          alt="Watercolor Rendering of a plain bagel by Judy Unger"
          title="(click to open) Watercolor Rendering of a plain bagel by Judy Unger"
        />
      </a>
      <p>
        While working on this website I decided to finally see if I could find
        the source, and with a reverse image search I was able to. I had
        initially thought that the image was lost media, so was very happy to
        have been able to track it down. Not only that, but the bagel
        wasn&apos;t a photo at all, it was an illustration, done by a woman
        named Judy Unger. Judy was a professional illustrator who had done
        commission work for food companies like Del Monte, Kirkland, Little
        Debbie, and Meow Mix cat food. I have an appreciation for artists and
        firmly believe that their work should be properly attributed and
        compensated if necessary, so I reached out to her about the story of how
        I ended up with the bagel motif and how her illustration ended up being
        my profile picture for the last decade. I continued by asking her for a
        way to obtain a license to use the image, in hopes that she might
        respond so I could rest easy knowing I&apos;m using it fairly. To my
        delight she replied with a similar gratitude for me even bothering to
        ask about licensing, and gave me a perpetual commercial use license at a
        discount! The image you see above is the highest resolution publicly
        available rendering of her watercolor illustration of a plain bagel she
        did for Lender&apos;s Manhattan in January of 2003. Please enjoy her
        blog post&nbsp;
        <a
          className="text-cyan-600 hover:underline"
          href="https://foodartist.wordpress.com/2011/02/23/41-i-had-a-hole-lox-of-fun-illustrating-bagels/"
        >
          found here
        </a>
        , where she talks about the process of the commission, making 15
        different bagels, and how the director of the project actually prefered
        her marker technique over the watercolor version for the plain bagel!
        Her work is incredibly impressive and when I have the free time I will
        be spending it reading through her blog and admiring the illustrations.
      </p>
    </div>
  );
}
