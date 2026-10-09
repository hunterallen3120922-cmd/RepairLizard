import type { Metadata } from "next";
import { OnboardingForm } from "@/components/onboarding-form";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Set up your shop" };

export default function OnboardingPage() {
  return (
    <>
      <SiteHeader showAuthLinks={false} />
      <main className="mx-auto w-full max-w-md flex-1 px-4 py-12">
        <OnboardingForm />
      </main>
    </>
  );
}
