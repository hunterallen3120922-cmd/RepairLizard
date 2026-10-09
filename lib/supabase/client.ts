// Supabase client for code that runs in the BROWSER (client components).
// It only uses the public anon key, so it can only do what Row Level Security allows.
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
