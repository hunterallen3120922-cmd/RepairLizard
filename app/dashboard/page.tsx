import type { Metadata } from "next";
import Link from "next/link";
import { CopyLink } from "@/components/copy-link";
import { StatusBadge } from "@/components/status-badge";
import { card } from "@/components/ui";
import { APP_NAME } from "@/lib/constants";
import { formatDate } from "@/lib/format";
import { mockJobs, mockShop } from "@/lib/mock-data";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  // TODO(backend): load the logged-in tech's shop and jobs from Supabase.
  const shop = mockShop;
  const jobs = mockJobs; // already newest first
  const formUrl = `${SITE_URL}/r/${shop.slug}`;

  return (
    <>
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <div className="min-w-0">
            <p className="text-xs text-zinc-500">{APP_NAME}</p>
            <h1 className="truncate font-semibold">{shop.name}</h1>
          </div>
          {/* TODO(backend): sign out with Supabase, then go to the home page. */}
          <Link
            href="/"
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium hover:bg-zinc-100"
          >
            Log out
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 space-y-6 px-4 py-8">
        <section className={card}>
          <h2 className="font-semibold">Your repair request page</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Share this link with customers (text it, put it on your socials, or
            print it on a card).
          </p>
          <div className="mt-4">
            <CopyLink url={formUrl} />
          </div>
          <Link
            href={`/r/${shop.slug}`}
            className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:underline"
          >
            Open my request page →
          </Link>
        </section>

        <section>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold">Jobs</h2>
            <p className="text-sm text-zinc-500">{jobs.length} total</p>
          </div>

          {jobs.length === 0 ? (
            <div className={`${card} text-center text-zinc-600`}>
              No jobs yet. Share your request page link to get your first one.
            </div>
          ) : (
            <>
              {/* Phones: one card per job */}
              <ul className="space-y-3 sm:hidden">
                {jobs.map((job) => (
                  <li key={job.id} className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono font-semibold">#{job.jobNumber}</span>
                      <StatusBadge status={job.status} />
                    </div>
                    <p className="mt-2 font-medium">{job.customerName}</p>
                    <p className="text-sm text-zinc-600">
                      {job.deviceType} · {job.deviceModel}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{formatDate(job.createdAt)}</p>
                  </li>
                ))}
              </ul>

              {/* Bigger screens: a table */}
              <div className="hidden overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm sm:block">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-50 text-zinc-600">
                    <tr>
                      <th className="px-4 py-3 font-medium">Job #</th>
                      <th className="px-4 py-3 font-medium">Customer</th>
                      <th className="px-4 py-3 font-medium">Device</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {jobs.map((job) => (
                      <tr key={job.id} className="hover:bg-zinc-50">
                        <td className="px-4 py-3 font-mono font-semibold">#{job.jobNumber}</td>
                        <td className="px-4 py-3">{job.customerName}</td>
                        <td className="px-4 py-3">
                          {job.deviceType}
                          <span className="text-zinc-500"> · {job.deviceModel}</span>
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={job.status} />
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-zinc-600">{formatDate(job.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}
