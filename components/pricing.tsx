"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { LoopIcon, UsersIcon, LockIcon } from "@/icons";
import { Button } from "./ui/button";
import { getCalApi } from "@calcom/embed-react";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const Pricing = () => {
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
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden" id="contact">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <Subheading className="mt-2">
            Ready to make your basement safe and legal?
          </Subheading>
          <Heading>
            Get Your Free <br />
            Quote Today
          </Heading>
          <Subheading className="mt-4">
            Every project is different. We provide clear quotes based on your
            specific needs. No hidden fees. No surprises.
          </Subheading>
          <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex flex-col gap-2">
            <li>
              <LockIcon />
              <p>Free On-Site Assessment</p>
            </li>
            <li>
              <UsersIcon />
              <p>Clear, Detailed Quote</p>
            </li>
            <li>
              <LoopIcon />
              <p>Fast Response Time</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div className="p-4 md:p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800">
            <Heading className="text-2xl md:text-3xl lg:text-4xl">
              Book Your Free Assessment
            </Heading>
            <Subheading className="mt-4">
              Schedule a time that works for you. We'll assess your project and
              provide a detailed quote.
            </Subheading>
            <div className="mt-6 space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <strong>Phone:</strong> (613) XXX-XXXX
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <strong>Email:</strong> info@egressexperts.ca
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <strong>Service Area:</strong> Ottawa and surrounding areas
              </p>
            </div>
            <Button
              data-cal-namespace="30min"
              data-cal-link="lemonbrand/30min"
              data-cal-config='{"layout":"month_view"}'
              className="mt-6 w-full"
            >
              Schedule Free Assessment
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

const PricingCard = ({
  price,
  description,
  ctaLink,
  ctaText,
  steps,
}: {
  price: string;
  description: string;
  ctaLink: string;
  ctaText: string;
  steps: string[];
}) => {
  return (
    <div className="p-4 md:p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <Heading>
          ${price}
          <span className="text-neutral-400 text-sm md:text-xl lg:text-3xl">
            /mo
          </span>
        </Heading>
        <Subheading className="mt-4">{description}</Subheading>
        <Button asChild className="mt-4">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
      <ul className="list-none *:flex *:items-center *:gap-2 *:font-medium mt-4 flex flex-col gap-2">
        {steps.map((step, index) => (
          <Step key={step + index} title={step} />
        ))}
      </ul>
    </div>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li>
      <IconCircleCheckFilled className="size-5 text-neutral-500" />
      <p className="text-sm md:text-base">{title}</p>
    </li>
  );
};
