import type { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-md flex-1 px-4 py-12">
        <AuthForm mode="login" />
      </main>
    </>
  );
}
