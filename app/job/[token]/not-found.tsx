import { PoweredBy } from "@/components/shop-header";

export default function JobNotFound() {
  return (
    <>
      <main className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-3 px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold">Repair not found</h1>
        <p className="text-zinc-600">
          This status link doesn&apos;t match any repair. Check that you copied the whole link, or contact the shop
          that&apos;s fixing your device.
        </p>
      </main>
      <PoweredBy />
    </>
  );
}
