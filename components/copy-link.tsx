"use client";

import { useState } from "react";

// Shows a link in a box with a "Copy" button next to it.
export function CopyLink({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Some browsers block clipboard access; the link is still selectable.
    }
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <input
        readOnly
        value={url}
        onFocus={(e) => e.target.select()}
        aria-label="Link"
        className="min-w-0 flex-1 rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2.5 font-mono text-sm text-zinc-800"
      />
      <button
        type="button"
        onClick={copy}
        className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
