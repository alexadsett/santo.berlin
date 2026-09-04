import { useTranslations } from "next-intl";

const PRODUCTS = [
  "UniFi Network",
  "UniFi Protect",
  "UniFi Access",
  "UniFi Talk",
  "UniFi Connect",
  "UniFi Cloud",
];

export function TrustBar() {
  const t = useTranslations("unifi.trustBar");

  return (
    <div className="relative border-y border-border bg-muted py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          {t("label")}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {PRODUCTS.map((product) => (
            <span
              key={product}
              className="font-mono text-sm text-muted-foreground/80 transition-colors hover:text-accent"
            >
              {product}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
