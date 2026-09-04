const NODES = [
  { x: 80, y: 90 },
  { x: 320, y: 40 },
  { x: 560, y: 120 },
  { x: 180, y: 220 },
  { x: 440, y: 260 },
  { x: 700, y: 200 },
  { x: 60, y: 340 },
  { x: 610, y: 360 },
  { x: 340, y: 400 },
];

const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 5],
  [3, 4],
  [4, 5],
  [3, 6],
  [4, 8],
  [5, 7],
  [8, 7],
  [0, 3],
];

export function NetworkMesh({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 460"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="mesh-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--accent)", stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: "var(--accent)", stopOpacity: 0.05 }} />
        </linearGradient>
      </defs>

      {LINKS.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="url(#mesh-line)"
          strokeWidth="1.5"
        />
      ))}

      {NODES.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r="18"
            className="animate-pulse-slow"
            style={{ fill: "var(--accent)", opacity: 0.08, animationDelay: `${i * 0.4}s` }}
          />
          <circle cx={n.x} cy={n.y} r="4" style={{ fill: "var(--accent)" }} />
        </g>
      ))}
    </svg>
  );
}
