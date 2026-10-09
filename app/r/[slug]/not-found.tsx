import { PoweredBy } from "@/components/shop-header";

export default function ShopNotFound() {
  return (
    <>
      <main className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-3 px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold">Shop not found</h1>
        <p className="text-zinc-600">
          We couldn&apos;t find a repair shop at this link. Double-check the link you were given, or ask the shop to
          send it again.
        </p>
      </main>
      <PoweredBy />
    </>
  );
}
