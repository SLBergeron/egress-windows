"use client";
import React, { useEffect } from "react";
import { Logo } from "./logo";
import { Container } from "./container";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconSend,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

export const Footer = () => {
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

  const services = [
    {
      title: "Egress Windows",
      href: "#services",
    },
    {
      title: "Window Wells",
      href: "#services",
    },
    {
      title: "Drainage Systems",
      href: "#services",
    },
    {
      title: "Code Compliance",
      href: "#services",
    },
    {
      title: "Permits & Inspections",
      href: "#process",
    },
  ];

  const company = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Our Process",
      href: "#process",
    },
    {
      title: "Service Areas",
      href: "#",
    },
    {
      title: "Contact",
      href: "#contact",
    },
    {
      title: "Get a Quote",
      href: "#contact",
    },
  ];

  return (
    <footer className="border-t perspective-distant overflow-hidden border-neutral-200 dark:border-neutral-800 py-10 md:py-20 lg:py-32 relative">
      <Container className="grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-20">
        <div className="lg:col-span-2 flex flex-col gap-4 items-start">
          <Logo />
          <Subheading>Safe, legal basement living spaces. One window at a time.</Subheading>
          <Button
            className="shadow-brand"
            data-cal-namespace="30min"
            data-cal-link="lemonbrand/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Get a Free Quote
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Services</h4>
          <ul className="list-none flex flex-col gap-2">
            {services.map((item, index) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-neutral-600 text-sm hover:text-black dark:text-neutral-400 dark:hover:text-white transition duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Company</h4>
          <ul className="list-none flex flex-col gap-2">
            {company.map((item, index) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-neutral-600 text-sm hover:text-black dark:text-neutral-400 dark:hover:text-white transition duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Contact</h4>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <strong>Phone:</strong><br />
              (613) XXX-XXXX
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <strong>Email:</strong><br />
              info@egressexperts.ca
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <strong>Service Area:</strong><br />
              Ottawa & surrounding areas
            </p>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col sm:flex-row justify-between mt-10 relative z-20 gap-4 md:gap-0">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Egress Experts. All rights reserved.
        </p>

        <div className="flex md:items-end items-start flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 *:text-sm *:text-neutral-500">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Link
              href="/"
              className="p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Twitter"
            >
              <IconBrandTwitter className="size-5" />
            </Link>
            <Link
              href="/"
              className="p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Instagram"
            >
              <IconBrandInstagram className="size-5" />
            </Link>
            <Link
              href="/"
              className="p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="size-5" />
            </Link>
          </div>
        </div>
      </Container>

      <div
        className={cn(
          "flex items-center justify-center gap-20 h-[200%]",
          "absolute -inset-x-[150%] -inset-y-40",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-900)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-900)_1px,transparent_1px)]",
          "mask-radial-from-50%"
        )}
        style={{
          transform: " rotateX(60deg) ",
        }}
      />
    </footer>
  );
};
