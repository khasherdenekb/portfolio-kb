"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button aria-label="theme-changer" className=" 2xl:h-12 2xl:w-12 h-11 w-11 3xl:h-14 3xl:w-14 4xl:h-16 4xl:w-16">
      {resolvedTheme === "light" ? (
        <span>
          <Sun className=" w-5 2xl:w-7" onClick={() => setTheme("dark")} />
        </span>
      ) : (
        <span>
          <Moon className=" w-5 2xl:w-7" onClick={() => setTheme("light")} />
        </span>
      )}
    </Button>
  );
}
