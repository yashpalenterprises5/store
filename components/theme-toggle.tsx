"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CookieManager from "@/lib/cookie-manager";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  const changeTheme = (theme: string) => {
    CookieManager.setCookie("theme", theme, 365);
    setTheme(theme);
  };

  React.useEffect(() => {
    const theme = CookieManager.getCookie("theme");
    if (theme) {
      setTheme(theme);
    } else {
      changeTheme("system");
      setTheme("system");
    }
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
