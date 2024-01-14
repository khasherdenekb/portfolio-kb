"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@nextui-org/button";
export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button isIconOnly>
      {theme === "light" ? (
        <Sun onClick={() => setTheme("dark")} />
      ) : (
        <Moon onClick={() => setTheme("light")} />
      )}
    </Button>
  );
}
