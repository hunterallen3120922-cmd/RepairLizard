// Reusable Tailwind class strings so buttons and inputs look the same everywhere.

export const primaryButton =
  "inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:opacity-60";

export const secondaryButton =
  "inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-3 font-medium text-zinc-800 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600";

export const label = "block text-sm font-medium text-zinc-800";

// text-base (16px) stops iPhones from zooming in when you tap a field.
export const input =
  "mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20";

export const hint = "mt-1 text-sm text-zinc-500";

export const fieldError = "mt-1 text-sm text-red-600";

export const card = "rounded-xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6";
