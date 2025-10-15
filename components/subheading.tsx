import { cn } from "@/lib/utils";
import React from "react";

export const Subheading = ({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "p";
}) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "text-base md:text-lg  text-neutral-500 dark:text-neutral-400 font-inter max-w-xl",
        className
      )}
    >
      {children}
    </Tag>
  );
};
