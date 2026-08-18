import { cn } from "@/lib/utils";

/**
 * Shared family glyph — an abstracted Berlin Fernsehturm.
 * Same silhouette reused across santo/unifi/shopware.berlin, recolored per brand,
 * so the sites read as one family at a glance.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("size-5", className)}
      aria-hidden="true"
    >
      <path
        d="M16 2v6.2M12 8h8l-1.4 4h-5.2L12 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="6" r="2.4" fill="currentColor" />
      <path
        d="M14.6 12.2h2.8l1.6 15.8a2 2 0 0 1-2 2.2h-2a2 2 0 0 1-2-2.2l1.6-15.8Z"
        fill="currentColor"
      />
    </svg>
  );
}
