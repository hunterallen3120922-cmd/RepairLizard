import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center gap-6 px-4 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Repair Tracker</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        Repair tracking for solo techs.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400">
        Get your own repair request page to share with customers, and keep
        every job in one place.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/signup"
          className="rounded-lg bg-zinc-900 px-5 py-3 text-center font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Sign up
        </Link>
        <Link
          href="/login"
          className="rounded-lg border border-zinc-300 px-5 py-3 text-center font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Log in
        </Link>
      </div>
    </main>
  );
}
