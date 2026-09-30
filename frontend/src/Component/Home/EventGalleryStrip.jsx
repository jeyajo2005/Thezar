export default function EventGalleryStrip() {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      title: "Main Stage Lights"
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      title: "Cultural Battle"
    },
    {
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      title: "Grand Auditorium Crowd"
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      title: "AI Hackathon Expo"
    }
  ];

  return (
    <section className="py-0 bg-[#080313] overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {photos.map((photo, idx) => (
          <div key={idx} className="relative h-64 md:h-72 overflow-hidden group">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080313] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-slate-950/80 px-2.5 py-1 rounded">
                THEZAR GALLERY
              </span>
              <p className="text-sm font-black text-white mt-1">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
