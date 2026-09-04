import { Check } from "lucide-react";

export function PickwareSeal({ className = "" }: { className?: string }) {
  const id = "pickware-seal-path";
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-full w-full animate-[spin_28s_linear_infinite]">
        <defs>
          <path id={id} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="78" fill="none" />
        <text fontSize="11.5" letterSpacing="2" fill="currentColor">
          <textPath href={`#${id}`} startOffset="0%">
            PICKWARE PARTNER · BERLIN MITTE · SANTO.BERLIN ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pickware-blue text-white">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
