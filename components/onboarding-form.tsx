"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { card, fieldError, hint, input, label, primaryButton } from "@/components/ui";
import { isSlugTaken } from "@/lib/mock-data";
import { SITE_URL } from "@/lib/site-url";
import { slugError, slugify } from "@/lib/slug";

export function OnboardingForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  // Once the tech types in the slug box themselves, stop overwriting it from the name.
  const [slugEdited, setSlugEdited] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // TODO(backend): check availability against the real shops table.
  const problem = slug === "" ? null : slugError(slug) ?? (isSlugTaken(slug) ? "That link is already taken." : null);
  const available = slug !== "" && problem === null;

  function handleNameChange(value: string) {
    setName(value);
    if (!slugEdited) setSlug(slugify(value));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!available) return;
    setSubmitting(true);
    // TODO(backend): create the shop in Supabase.
    router.push("/dashboard");
  }

  return (
    <div className={card}>
      <h1 className="text-2xl font-semibold">Set up your shop</h1>
      <p className="mt-1 text-zinc-600">This is what your customers will see.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className={label}>
            Shop name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={80}
            placeholder="Hunter PC Builds"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className={input}
          />
        </div>

        <div>
          <label htmlFor="slug" className={label}>
            Your request page link
          </label>
          <div className="mt-1 flex rounded-lg border border-zinc-300 bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20">
            <span className="flex items-center rounded-l-lg border-r border-zinc-300 bg-zinc-50 px-3 text-sm text-zinc-500">
              /r/
            </span>
            <input
              id="slug"
              name="slug"
              required
              maxLength={40}
              placeholder="hunterpcbuilds"
              value={slug}
              onChange={(e) => {
                setSlugEdited(true);
                setSlug(e.target.value.toLowerCase());
              }}
              className="block w-full min-w-0 rounded-r-lg px-3 py-2.5 text-base focus:outline-none"
            />
          </div>
          {problem && <p className={fieldError}>{problem}</p>}
          {available && <p className="mt-1 text-sm text-emerald-700">✓ Available</p>}
          <p className={hint}>
            Lowercase letters, numbers, and dashes. Your link will be{" "}
            <span className="font-mono text-zinc-700">
              {SITE_URL}/r/{slug || "your-shop"}
            </span>
          </p>
        </div>

        <div>
          <label htmlFor="contactEmail" className={label}>
            Contact email
          </label>
          <input
            id="contactEmail"
            name="contactEmail"
            type="email"
            required
            placeholder="you@example.com"
            className={input}
          />
          <p className={hint}>Where customers can reach you about a repair.</p>
        </div>

        <button type="submit" disabled={!available || submitting} className={`${primaryButton} w-full`}>
          {submitting ? "Creating…" : "Create my shop"}
        </button>
      </form>
    </div>
  );
}
