"use client";
import React, { useEffect } from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";
import { getCalApi } from "@calcom/embed-react";

export const Hero = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#38412F" },
          dark: { "cal-brand": "#EFE4B5" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <Heading as="h1">
          Safe, Legal Basement Living Spaces <br /> in Ottawa
        </Heading>

        <Subheading className="py-8">
          We turn basement windows into code-compliant egress systems. From
          design to install. One point of contact. Full Ontario Building Code
          compliance.
        </Subheading>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          <Button
            size="lg"
            className="shadow-brand w-full sm:w-auto"
            data-cal-namespace="30min"
            data-cal-link="lemonbrand/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Get a Free Quote
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="#process">See How It Works</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
      <GradientDivider />
    </section>
  );
};
