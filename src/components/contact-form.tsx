"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "validation-error" | "error";

export function ContactForm({ source }: { source: "home" | "unifi" | "shopware" }) {
  const t = useTranslations("contactForm");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
          locale,
          source,
        }),
      });

      if (res.status >= 400 && res.status < 500) {
        setStatus("validation-error");
        return;
      }
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
        <p className="text-sm text-foreground">{t("success")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
    >
      {/* honeypot field — hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={5}
          placeholder={t("messagePlaceholder")}
          className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-accent"
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
        >
          {status === "sending" ? t("sending") : t("submit")}
          <Send className="h-3.5 w-3.5" />
        </button>
        <p className="text-xs text-muted-foreground">{t("note")}</p>
      </div>

      {(status === "error" || status === "validation-error") && (
        <p className="mt-4 flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="size-4 shrink-0" />
          {status === "validation-error" ? t("validationError") : t("error")}
        </p>
      )}
    </form>
  );
}
