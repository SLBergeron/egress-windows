"use client";
import React from "react";
import Image from "next/image";

import { motion } from "motion/react";

export const LogoCloud = () => {
  const logos = [
    {
      title: "Ontario Building Code",
      src: "/logos/OBC.svg",
    },
    {
      title: "WSIB Covered",
      src: "/logos/WSIB.svg",
    },
    {
      title: "Energy Star Certified",
      src: "/logos/EnergyStar.svg",
    },
  ];
  return (
    <section className="pb-10 md:pb-10">
      <h2 className="text-neutral-600 font-medium dark:text-neutral-400 text-lg text-center max-w-xl mx-auto">
        Fully licensed and insured.{" "}
        <br className="hidden md:block" />{" "}
        <span className="text-neutral-400">
          {" "}
          Your basement project is in safe hands.
        </span>
      </h2>
      <div className="grid grid-cols-3 max-w-2xl mx-auto mt-10 gap-8">
        {logos.map((logo, index) => (
          <motion.div
            initial={{
              y: -10,
              opacity: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            key={logo.title}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.title}
              width={150}
              height={90}
              className="h-24 w-auto object-contain invert dark:invert-0"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
