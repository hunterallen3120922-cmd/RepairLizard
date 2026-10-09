import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PoweredBy, ShopHeader } from "@/components/shop-header";
import { StatusBadge } from "@/components/status-badge";
import { card } from "@/components/ui";
import { formatDate } from "@/lib/format";
import { getJobByToken, getShopById } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Repair status",
  // Private links shouldn't show up in search engines.
  robots: { index: false, follow: false },
};

// Placeholder status page. The full version (timeline, quote approval) comes in Week 3.
// Only shows customer-safe fields: never tech notes or anything about other customers.
export default async function JobStatusPage({ params }: PageProps<"/job/[token]">) {
  const { token } = await params;

  // TODO(backend): look up the job by token in Supabase.
  const job = getJobByToken(token);
  if (!job) notFound();
  const shop = getShopById(job.shopId);
  if (!shop) notFound();

  return (
    <>
      <ShopHeader shopName={shop.name} />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
        <div className={card}>
          <p className="text-sm text-zinc-500">Job</p>
          <h1 className="font-mono text-3xl font-semibold">#{job.jobNumber}</h1>

          <div className="mt-6">
            <p className="text-sm text-zinc-500">Current status</p>
            <div className="mt-1 text-base">
              <StatusBadge status={job.status} />
            </div>
          </div>

          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-zinc-500">Device</dt>
              <dd className="font-medium">
                {job.deviceType}
                {job.deviceModel && ` · ${job.deviceModel}`}
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Submitted</dt>
              <dd className="font-medium">{formatDate(job.createdAt)}</dd>
            </div>
          </dl>

          <p className="mt-8 border-t border-zinc-200 pt-4 text-sm text-zinc-600">
            Questions? Email{" "}
            <a href={`mailto:${shop.contactEmail}`} className="font-medium text-emerald-700 hover:underline">
              {shop.contactEmail}
            </a>
            . Bookmark this page to check back anytime.
          </p>
        </div>
      </main>
      <PoweredBy />
    </>
  );
}
