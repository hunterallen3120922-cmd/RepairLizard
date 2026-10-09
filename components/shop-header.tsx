import { APP_NAME } from "@/lib/constants";

// Header for customer-facing pages: shows the tech's shop, not our brand.
export function ShopHeader({ shopName }: { shopName: string }) {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4">
        <p className="text-lg font-semibold">{shopName}</p>
      </div>
    </header>
  );
}

export function PoweredBy() {
  return (
    <footer className="py-6 text-center text-xs text-zinc-500">Powered by {APP_NAME}</footer>
  );
}
