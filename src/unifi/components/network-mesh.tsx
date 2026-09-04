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

// deterministic per-node drift/timing so server and client render identically
const NODE_MOTION = [
  { dx: 7, dy: 5, duration: 6.4, delay: 0 },
  { dx: -6, dy: 8, duration: 7.8, delay: 0.6 },
  { dx: 8, dy: -6, duration: 7, delay: 1.2 },
  { dx: -7, dy: -5, duration: 8.4, delay: 0.3 },
  { dx: 6, dy: 7, duration: 6.8, delay: 1.6 },
  { dx: -8, dy: 6, duration: 7.4, delay: 0.9 },
  { dx: 7, dy: -7, duration: 8, delay: 2 },
  { dx: -6, dy: -8, duration: 6.6, delay: 1.4 },
  { dx: 8, dy: 6, duration: 7.6, delay: 0.5 },
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

      {/* traveling light pulses along each connection */}
      {LINKS.map(([a, b], i) => (
        <line
          key={`flow-${i}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="2 38"
          className="animate-mesh-flow"
          style={{
            stroke: "var(--accent)",
            opacity: 0.55,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${1.8 + (i % 3) * 0.5}s`,
          }}
        />
      ))}

      {NODES.map((n, i) => {
        const motion = NODE_MOTION[i];
        return (
          <g
            key={i}
            className="animate-mesh-drift"
            style={
              {
                "--drift-x": `${motion.dx}px`,
                "--drift-y": `${motion.dy}px`,
                animationDuration: `${motion.duration}s`,
                animationDelay: `${motion.delay}s`,
                transformBox: "fill-box",
                transformOrigin: "center",
              } as React.CSSProperties
            }
          >
            <circle
              cx={n.x}
              cy={n.y}
              r="18"
              className="animate-mesh-pulse"
              style={{
                fill: "var(--accent)",
                opacity: 0.1,
                animationDelay: `${i * 0.4}s`,
              }}
            />
            <circle cx={n.x} cy={n.y} r="4" style={{ fill: "var(--accent)" }} />
          </g>
        );
      })}
    </svg>
  );
}
