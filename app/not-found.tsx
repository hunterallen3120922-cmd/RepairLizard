import Link from "next/link";
import { primaryButton } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <p className="text-5xl font-semibold text-zinc-300">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-zinc-600">We couldn&apos;t find the page you were looking for.</p>
      <Link href="/" className={primaryButton}>
        Go home
      </Link>
    </main>
  );
}
