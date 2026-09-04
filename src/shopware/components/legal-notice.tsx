import { AlertTriangle } from "lucide-react";

export function LegalNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-gold/40 bg-gold-soft/40 p-5 text-sm leading-relaxed text-ink">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.25} />
      <p>{children}</p>
    </div>
  );
}
