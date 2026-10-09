import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyLink } from "@/components/copy-link";
import { PoweredBy, ShopHeader } from "@/components/shop-header";
import { card } from "@/components/ui";
import { getJobByToken, getShopBySlug } from "@/lib/mock-data";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = { title: "Request received" };

export default async function SuccessPage({ params, searchParams }: PageProps<"/r/[slug]/success">) {
  const { slug } = await params;
  const { job: token } = await searchParams;

  // TODO(backend): look these up in Supabase.
  const shop = getShopBySlug(slug);
  if (!shop) notFound();
  const job = typeof token === "string" ? getJobByToken(token) : null;
  const jobBelongsToShop = job !== null && job.shopId === shop.id;

  return (
    <>
      <ShopHeader shopName={shop.name} />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
        {job && jobBelongsToShop ? (
          <div className={card}>
            <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-2xl">✓</div>
            <h1 className="mt-4 text-2xl font-semibold">Thanks! Your request is in.</h1>
            <p className="mt-2 text-lg">
              Your job number is <span className="font-mono font-semibold">#{job.jobNumber}</span> with {shop.name}.
            </p>

            <h2 className="mt-8 font-semibold">Your private status link</h2>
            <p className="mt-1 mb-3 text-sm text-zinc-600">
              Save this link to check on your repair anytime. Don&apos;t share it, since anyone with the link can see
              your repair&apos;s status.
            </p>
            <CopyLink url={`${SITE_URL}/job/${job.publicToken}`} />
          </div>
        ) : (
          <div className={`${card} text-center`}>
            <h1 className="text-xl font-semibold">We couldn&apos;t find that request</h1>
            <p className="mt-2 text-zinc-600">
              If you just sent a request, check your email or contact {shop.name}.
            </p>
          </div>
        )}
      </main>
      <PoweredBy />
    </>
  );
}
