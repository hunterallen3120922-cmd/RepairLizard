import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center gap-6 px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Repair Tracker</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Need a computer, phone, or console fixed? Send a repair request and
        we&apos;ll get back to you.
      </p>
      <div>
        <Link
          href="/request"
          className="inline-block rounded-lg bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Request a repair
        </Link>
      </div>
    </main>
  );
}
