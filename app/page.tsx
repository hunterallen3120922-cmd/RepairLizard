import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { primaryButton, secondaryButton } from "@/components/ui";
import { galleryPhotos, heroPhoto } from "@/lib/builds";
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
        <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-12 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              {APP_NAME}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
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
          </div>
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            placeholder="blur"
            priority
            sizes="(min-width: 1024px) 480px, 100vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg lg:aspect-[4/5]"
          />
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

        <section className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Made by a working tech
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            {APP_NAME} is built by someone who builds and fixes PCs every week.
            Here are a few recent builds.
          </p>
          {/* "columns" makes a masonry layout, so tall and wide photos both fit without cropping. */}
          <div className="mt-8 columns-2 gap-3 sm:columns-3 sm:gap-4">
            {galleryPhotos.map((photo) => (
              <a
                key={photo.src.src}
                href={photo.src.src}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 block break-inside-avoid overflow-hidden rounded-xl sm:mb-4"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 330px, (min-width: 640px) 33vw, 50vw"
                  className="w-full transition duration-300 hover:scale-105"
                />
              </a>
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
