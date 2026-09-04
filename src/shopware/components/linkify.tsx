const PATTERN = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

export function Linkify({ text }: { text: string }) {
  const parts = text.split(PATTERN);

  return (
    <>
      {parts.map((part, i) => {
        if (/^https?:\/\//.test(part)) {
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-gold"
            >
              {part}
            </a>
          );
        }
        if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(part)) {
          return (
            <a key={i} href={`mailto:${part}`} className="text-ink hover:text-gold">
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
