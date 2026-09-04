import type { LucideIcon } from "lucide-react";

export function Eyebrow({
  icon: Icon,
  tone = "gold",
  children,
}: {
  icon?: LucideIcon;
  tone?: "gold" | "pickware";
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
      {Icon ? (
        <Icon
          className={`h-3.5 w-3.5 ${tone === "pickware" ? "text-pickware-blue" : "text-accent"}`}
          strokeWidth={2.25}
        />
      ) : null}
      {children}
    </span>
  );
}
