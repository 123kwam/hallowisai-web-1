export function GradientMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      {/* drifting gradient orbs */}
      <div className="absolute -left-40 top-[-10%] h-[34rem] w-[34rem] animate-drift-a rounded-full bg-brand-blue/25 blur-[120px]" />
      <div className="absolute right-[-10%] top-[20%] h-[30rem] w-[30rem] animate-drift-b rounded-full bg-brand-cyan/20 blur-[130px]" />
      <div className="absolute bottom-[-15%] left-[20%] h-[36rem] w-[36rem] animate-drift-a rounded-full bg-brand-glow/15 blur-[140px]" />

      {/* grid + vignette overlays */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-noise opacity-[0.035]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
    </div>
  );
}
