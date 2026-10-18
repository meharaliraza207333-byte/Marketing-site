export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink px-6 text-ivory" role="status" aria-live="polite">
      <div className="flex flex-col items-center text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-lime text-lg font-bold tracking-[-0.12em] text-ink">MP</span>
        <p className="mt-5 font-serif text-4xl leading-none">Myka Perez</p>
        <div className="mt-6 h-px w-40 overflow-hidden bg-ivory/20"><span className="block h-full w-1/2 animate-pulse bg-lime" /></div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ivory/50">Loading thoughtful marketing</p>
      </div>
    </div>
  );
}
