// ADMIN Supabase client using the SERVICE ROLE key.
// This key bypasses Row Level Security, so it must only ever run on the server.
// The "server-only" import makes the build fail if a client component imports this file.
import "server-only";
import { createClient } from "@supabase/supabase-js";

export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variable.",
    );
  }

  return createClient(url, serviceRoleKey, {
    // No user session here: this client acts as the server itself, not a logged-in person.
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
