import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { FeaturesSecondary } from "@/components/features-secondary";
import { FeaturesTertiary } from "@/components/features-tertiary";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Outcomes } from "@/components/outcomes";
import { Pricing } from "@/components/pricing";
import { Speed } from "@/components/speed";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://egressexperts.ca',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <Speed />
      <FeaturesSecondary />
      <Outcomes />
      <FeaturesTertiary />
      <Pricing />
      <FAQs />
    </>
  );
}
