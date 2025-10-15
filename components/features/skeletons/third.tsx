"use client";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

export const SkeletonThree = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative h-full w-full flex items-center justify-center">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-70% mask-radial-at-center absolute inset-0"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg opacity-100"
      >
        <Image
          src="/escape dark.svg"
          alt="Safe Exit"
          width={120}
          height={120}
          className="block dark:hidden"
        />
        <Image
          src="/escape light.svg"
          alt="Safe Exit"
          width={120}
          height={120}
          className="hidden dark:block"
        />
      </motion.div>
    </div>
  );
};
