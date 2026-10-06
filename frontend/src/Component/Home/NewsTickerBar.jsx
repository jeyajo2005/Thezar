export default function NewsTickerBar() {
  const items = [
    'THEZAR 2026',
    '38 DISTRICTS',
    'ONE TABLE',
    'ONE TASTE',
    'GRAND COOKING CHAMPIONSHIP',
    'TAMIL NADU',
    'TIRUNELVELI STAGE',
    'REGISTER NOW',
  ];

  const separator = (
    <span style={{ margin: '0 1.5rem', color: 'rgba(242,196,160,0.6)', fontSize: '0.8rem' }}>✦</span>
  );

  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#FAF7F2',
            whiteSpace: 'nowrap',
          }}>
            {item}
          </span>
          {separator}
        </span>
      ))}
    </>
  );

  return (
    <div style={{
      width: '100%',
      background: '#4A0F0F',
      borderTop: '1px solid rgba(242,196,160,0.12)',
      borderBottom: '1px solid rgba(242,196,160,0.12)',
      padding: '1rem 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Left fade */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '60px', background: 'linear-gradient(to right, #4A0F0F, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      {/* Right fade */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '60px', background: 'linear-gradient(to left, #4A0F0F, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Marquee track — duplicated for seamless loop */}
      <div
        style={{ display: 'inline-flex', whiteSpace: 'nowrap', animation: 'editorialTicker 28s linear infinite' }}
        className="ticker-hover-pause"
      >
        {content}
        {content}
        {content}
        {content}
      </div>

      <style>{`
        @keyframes editorialTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
