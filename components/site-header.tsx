import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

// Top bar for the marketing and sign-in pages.
// Pass showAuthLinks={false} on pages where the person is already signed in.
export function SiteHeader({ showAuthLinks = true }: { showAuthLinks?: boolean }) {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-white">
            🔧
          </span>
          {APP_NAME}
        </Link>
        {showAuthLinks && (
          <nav className="flex items-center gap-1 text-sm">
            <Link href="/login" className="rounded-lg px-3 py-2 font-medium text-zinc-700 hover:bg-zinc-100">
              Log in
            </Link>
            <Link href="/signup" className="rounded-lg bg-emerald-600 px-3 py-2 font-medium text-white hover:bg-emerald-700">
              Sign up
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
