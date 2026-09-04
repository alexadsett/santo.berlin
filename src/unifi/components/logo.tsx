import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-accent-soft">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="absolute inset-0 rounded-md border border-accent/30" />
      </span>
      <span>
        unifi<span className="text-accent">.</span>berlin
      </span>
    </span>
  );
}
