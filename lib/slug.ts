import { RESERVED_SLUGS } from "./constants";

// Turn a shop name into a URL-friendly slug.
// "Hunter's PC Builds!" -> "hunters-pc-builds"
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['’]/g, "") // drop apostrophes instead of turning them into dashes
    .replace(/[^a-z0-9]+/g, "-") // anything else that isn't a letter/number becomes a dash
    .replace(/^-+|-+$/g, "") // no dashes at the start or end
    .slice(0, 40)
    .replace(/-+$/g, "");
}

// Returns an error message, or null if the slug looks fine.
// (Whether it's already taken is checked separately.)
export function slugError(slug: string): string | null {
  if (slug.length < 3) return "Must be at least 3 characters.";
  if (slug.length > 40) return "Must be 40 characters or fewer.";
  if (!/^[a-z0-9-]+$/.test(slug)) return "Use only lowercase letters, numbers, and dashes.";
  if (slug.startsWith("-") || slug.endsWith("-")) return "Can't start or end with a dash.";
  if (RESERVED_SLUGS.includes(slug)) return "That name is reserved. Try another.";
  return null;
}
