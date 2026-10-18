export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 grid min-h-screen place-items-center bg-ink px-6 text-ivory"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-lime text-2xl font-bold tracking-[-0.12em] text-ink shadow-[0_0_40px_rgba(213,255,85,0.4)]">
            MP
          </span>
          <span className="pulse-dot absolute -inset-1.5 rounded-full border border-lime/40" />
        </div>
        <p className="mt-6 font-serif text-4xl leading-none">Myka Perez</p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ivory/60">Email &amp; Social Marketing</p>
        <div className="mt-6 h-[2px] w-48 overflow-hidden rounded-full bg-ivory/15">
          <span className="block h-full w-1/2 animate-pulse bg-lime shadow-[0_0_10px_rgba(213,255,85,0.8)]" />
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-lime">Loading thoughtful marketing…</p>
      </div>
    </div>
  );
}
