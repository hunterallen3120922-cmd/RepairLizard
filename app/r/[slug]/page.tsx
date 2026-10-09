import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RequestForm } from "@/components/request-form";
import { PoweredBy, ShopHeader } from "@/components/shop-header";
import { getShopBySlug } from "@/lib/mock-data";

export async function generateMetadata({ params }: PageProps<"/r/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const shop = getShopBySlug(slug);
  return { title: shop ? `Repair request · ${shop.name}` : "Shop not found" };
}

export default async function RequestPage({ params }: PageProps<"/r/[slug]">) {
  const { slug } = await params;
  // TODO(backend): look up the shop in Supabase.
  const shop = getShopBySlug(slug);
  if (!shop) notFound();

  return (
    <>
      <ShopHeader shopName={shop.name} />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8">
        <h1 className="text-2xl font-semibold">Request a repair</h1>
        <p className="mt-1 mb-8 text-zinc-600">
          Tell {shop.name} what&apos;s going on. You&apos;ll get a job number and a link to check on your repair.
        </p>
        <RequestForm slug={shop.slug} />
      </main>
      <PoweredBy />
    </>
  );
}
