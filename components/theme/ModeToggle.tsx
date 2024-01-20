"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@nextui-org/button";
export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button id="themeSwitch" isIconOnly size="lg">
      {resolvedTheme === "light" ? (
        <Sun onClick={() => setTheme("dark")} />
      ) : (
        <Moon onClick={() => setTheme("light")} />
      )}
    </Button>
  );
}
