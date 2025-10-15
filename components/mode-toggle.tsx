"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const SWITCH = () => {
    console.log("switch working");
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }

      case "dark": {
        setTheme("light");
        return;
      }

      case "system": {
        setTheme(systemTheme === "light" ? "dark" : "light");
        return;
      }
      default: {
        return;
      }
    }
  };
  return (
    <button
      onClick={SWITCH}
      className="size-4 flex items-center justify-center relative"
    >
      <SunIcon
        size={14}
        className="rotate-0 absolute inset-0 scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0"
      />
      <MoonIcon
        size={14}
        className="rotate-90 absolute inset-0 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};
