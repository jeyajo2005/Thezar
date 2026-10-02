export default function AboutStorySection() {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">[ 03 • OUR STORY ]</span>
          <h2 className="text-3xl font-black text-white">From Idea to Statewide Movement</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Founded with a mission to unite all participants under a single competitive umbrella, <strong>THEZAR 2026</strong> brings together talent across 38 districts of Tamil Nadu.
          </p>
        </div>
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-3">
          <div className="text-3xl font-black text-amber-400">38 Districts</div>
          <p className="text-xs text-slate-300">Connecting passionate participants from Tirunelveli to Chennai, Kanyakumari to Hosur.</p>
        </div>
      </div>
    </section>
  );
}
