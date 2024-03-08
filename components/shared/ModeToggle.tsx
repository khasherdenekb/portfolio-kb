"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      aria-label="theme-changer"
      variant="outline"
      size="icon"
      className="h-11 w-11"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 xl:h-6 2xl:h-8 3xl:h-10" />
      ) : (
        <Moon className="h-4 xl:h-6 2xl:h-8 3xl:h-10" />
      )}
    </Button>
  );
}
