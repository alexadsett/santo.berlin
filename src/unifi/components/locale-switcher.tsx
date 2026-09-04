"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-surface-border bg-surface/60 p-0.5 text-xs font-medium",
        className,
      )}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={loc === locale}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
            loc === locale
              ? "bg-accent text-on-accent"
              : "text-muted hover:text-foreground",
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
