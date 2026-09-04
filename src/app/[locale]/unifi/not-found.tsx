import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center">
      <span className="font-mono text-sm text-accent">404</span>
      <h1 className="mt-4 text-2xl font-semibold text-foreground">
        Seite nicht gefunden · Page not found
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Die angeforderte Seite existiert nicht. · The page you requested
        doesn&apos;t exist.
      </p>
      <Link
        href="/unifi"
        className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground"
      >
        Zurück zur Startseite · Back home
      </Link>
    </div>
  );
}
