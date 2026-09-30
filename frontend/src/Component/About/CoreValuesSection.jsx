export default function CoreValuesSection() {
  const values = [
    { title: 'Inclusivity', desc: 'Equal opportunity for rural and urban collegiate students across all 38 districts.' },
    { title: 'Excellence', desc: 'Strict, impartial judging by state academic & industry experts.' },
    { title: 'Innovation', desc: 'Promoting real-world problem solving, AI, and green technologies.' },
    { title: 'Culture', desc: 'Preserving and celebrating Tamil heritage, music, and performing arts.' }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-left space-y-8">
        <h2 className="text-3xl font-black text-white text-center">Core Platform Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div key={i} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="text-base font-extrabold text-amber-400">{v.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
