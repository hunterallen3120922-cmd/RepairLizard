// Supabase client for SERVER code (server components, server actions, route handlers).
// It reads the logged-in technician's session from cookies, so queries run
// as that user and Row Level Security still applies.
import "server-only";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Server components can't set cookies. That's fine: the session
            // refresh will happen in a server action or the auth proxy instead.
          }
        },
      },
    },
  );
}
