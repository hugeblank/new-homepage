import { Outlet } from "react-router";
import type { Route } from "./+types/layout";

export default function Layout({}: Route.ComponentProps) {
  return (
    <>
      <main>
        <div className="mr-auto ml-auto max-w-4xl">
          <Outlet />
        </div>
      </main>
      <footer className="mt-24 text-center">
        hugeblank is not a registered trademark of Hugeblank Entertainment. For
        more information please make a blood sacrifice to the harvest goddess
        Demeter.
      </footer>
    </>
  );
}
