// Precomputed (not derived at render time) so server and client always emit
// byte-identical markup — no floating-point rounding to drift between them.
const RAYS = [
  { x1: 53.0, y1: 32.0, x2: 61.0, y2: 32.0 },
  { x1: 53.25, y1: 40.8, x2: 58.79, y2: 43.1 },
  { x1: 46.85, y1: 46.85, x2: 52.51, y2: 52.51 },
  { x1: 40.8, y1: 53.25, x2: 43.1, y2: 58.79 },
  { x1: 32.0, y1: 53.0, x2: 32.0, y2: 61.0 },
  { x1: 23.2, y1: 53.25, x2: 20.9, y2: 58.79 },
  { x1: 17.15, y1: 46.85, x2: 11.49, y2: 52.51 },
  { x1: 10.75, y1: 40.8, x2: 5.21, y2: 43.1 },
  { x1: 11.0, y1: 32.0, x2: 3.0, y2: 32.0 },
  { x1: 10.75, y1: 23.2, x2: 5.21, y2: 20.9 },
  { x1: 17.15, y1: 17.15, x2: 11.49, y2: 11.49 },
  { x1: 23.2, y1: 10.75, x2: 20.9, y2: 5.21 },
  { x1: 32.0, y1: 11.0, x2: 32.0, y2: 3.0 },
  { x1: 40.8, y1: 10.75, x2: 43.1, y2: 5.21 },
  { x1: 46.85, y1: 17.15, x2: 52.51, y2: 11.49 },
  { x1: 53.25, y1: 23.2, x2: 58.79, y2: 20.9 },
];

// Sun and pomegranate: a rayed sun ring holding a crowned pomegranate,
// with two small leaves and an olive sprouting from its base.
export default function Emblem({ className = "", title }) {
  return (
    <svg
      className={`emblem ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
    >
      <circle cx="32" cy="32" r="18" />
      {RAYS.map((ray, i) => (
        <line key={i} {...ray} />
      ))}
      <path d="M32 46c-6.4 0-10.5-4.4-10.5-9.6 0-5.6 4.4-9.4 10.5-9.4s10.5 3.8 10.5 9.4c0 5.2-4.1 9.6-10.5 9.6Z" />
      <path d="M27.5 27.6 26.6 22l3 2.6L32 20.4l2.4 4.2 3-2.6-.9 5.6" />
      <path d="M28 37.5c.8 2.4 2.2 3.6 4 3.6M32 32.5v1.2M28.8 34.4h.1M35.4 34.8h.1M35 38.6h.1" />
      <path d="M29.6 47.2q-1.8.5-2.6 2.3" strokeWidth="1.1" />
      <path d="M34.4 47.2q1.8.5 2.6 2.3" strokeWidth="1.1" />
      <path d="M32 49.6h.1" strokeWidth="2.6" />
    </svg>
  );
}
