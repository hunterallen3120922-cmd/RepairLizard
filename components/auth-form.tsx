"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { card, hint, input, label, primaryButton } from "@/components/ui";

type Mode = "signup" | "login";

// One form used by both /signup and /login.
export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const isSignup = mode === "signup";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO(backend): sign up / log in with Supabase Auth.
    // For now, pretend it worked: new users go set up a shop, returning users go to the dashboard.
    router.push(isSignup ? "/onboarding" : "/dashboard");
  }

  return (
    <div className={card}>
      <h1 className="text-2xl font-semibold">{isSignup ? "Create your account" : "Log in"}</h1>
      <p className="mt-1 text-zinc-600">
        {isSignup ? "Start tracking repairs in minutes." : "Welcome back."}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={input} />
        </div>
        <div>
          <label htmlFor="password" className={label}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={isSignup ? "new-password" : "current-password"}
            minLength={isSignup ? 8 : undefined}
            required
            className={input}
          />
          {isSignup && <p className={hint}>At least 8 characters.</p>}
        </div>
        <button type="submit" disabled={submitting} className={`${primaryButton} w-full`}>
          {submitting ? "Please wait…" : isSignup ? "Sign up" : "Log in"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-600">
        {isSignup ? "Already have an account? " : "New here? "}
        <Link
          href={isSignup ? "/login" : "/signup"}
          className="font-medium text-emerald-700 hover:underline"
        >
          {isSignup ? "Log in" : "Create an account"}
        </Link>
      </p>
    </div>
  );
}
