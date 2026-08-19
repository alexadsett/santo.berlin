"use client";

import { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import {
  decideConsent,
  getConsentSnapshot,
  getServerConsentSnapshot,
  subscribeConsent,
  type ConsentValue,
} from "@/lib/consent";
import { Link } from "@/i18n/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  const t = useTranslations("cookies");
  const status = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  function decide(value: ConsentValue) {
    decideConsent(value);
  }

  return (
    <>
      {GA_ID && status === "granted" && <GoogleAnalytics gaId={GA_ID} />}

      {status === "undecided" && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-5 py-5 backdrop-blur-md sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm text-muted-foreground">
              {t("description")}{" "}
              <Link href="/datenschutz" className="underline hover:text-foreground">
                {t("privacyLink")}
              </Link>
              .
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent"
              >
                {t("decline")}
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
