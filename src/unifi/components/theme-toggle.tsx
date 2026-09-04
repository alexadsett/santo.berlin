"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Sun, Moon, Monitor, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIONS: { value: "light" | "dark" | "system"; icon: LucideIcon }[] = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
  { value: "system", icon: Monitor },
];

export function ThemeToggle({ className }: { className?: string }) {
  const t = useTranslations("unifi.theme");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- required to avoid SSR/client theme mismatch
  useEffect(() => setMounted(true), []);

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-surface-border bg-surface/60 p-0.5",
        className,
      )}
    >
      {OPTIONS.map(({ value, icon: Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-label={t(value)}
          aria-current={mounted && theme === value}
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full transition-colors",
            mounted && theme === value
              ? "bg-accent text-on-accent"
              : "text-muted hover:text-foreground",
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}
