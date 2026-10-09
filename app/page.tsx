import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { primaryButton, secondaryButton } from "@/components/ui";
import { APP_NAME } from "@/lib/constants";

const steps = [
  {
    title: "Set up your shop",
    body: "Sign up, name your shop, and pick your link, like /r/hunterpcbuilds.",
  },
  {
    title: "Share your request page",
    body: "Customers describe the problem, pick drop-off, meetup, or remote, and add photos.",
  },
  {
    title: "Track every job",
    body: "Each request gets a job number and a private status link for the customer.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            {APP_NAME}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Repair tracking for solo techs.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600">
            Stop juggling texts and sticky notes. Give customers one link to
            request a repair, and keep every job in one simple list.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/signup" className={primaryButton}>
              Get started
            </Link>
            <Link href="/login" className={secondaryButton}>
              Log in
            </Link>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title}>
                <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 font-semibold text-emerald-800">
                  {i + 1}
                </div>
                <h2 className="mt-4 font-semibold text-zinc-900">{step.title}</h2>
                <p className="mt-2 text-zinc-600">{step.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
        {APP_NAME}: repair tracking for solo techs
      </footer>
    </>
  );
}
