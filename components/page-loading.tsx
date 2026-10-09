// Simple placeholder shown while a page's data is loading.
export function PageLoading() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 animate-pulse px-4 py-10" aria-busy="true">
      <span className="sr-only">Loading…</span>
      <div className="h-7 w-48 rounded bg-zinc-200" />
      <div className="mt-3 h-4 w-72 max-w-full rounded bg-zinc-200" />
      <div className="mt-8 h-64 rounded-xl bg-zinc-200" />
    </main>
  );
}
