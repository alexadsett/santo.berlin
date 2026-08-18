"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

export function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const t = useTranslations("locale");
  const next = locale === "de" ? "en" : "de";

  return (
    <button
      type="button"
      onClick={() =>
        router.replace(
          // @ts-expect-error -- dynamic pathname from usePathname
          { pathname, params },
          { locale: next }
        )
      }
      className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-accent hover:text-foreground"
    >
      {t("switchTo")}
    </button>
  );
}
