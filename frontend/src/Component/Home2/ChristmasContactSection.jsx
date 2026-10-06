import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ChristmasContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSent(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid rgba(107,26,26,0.12)',
    fontSize: '0.85rem',
    color: '#2C1810',
    background: '#FFFFFF',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#6B1A1A',
    marginBottom: '0.4rem',
  };

  const contactItems = [
    { icon: MapPin, label: 'Arena Location', value: 'Grand Winter Pavilion, Marina Esplanade, Chennai, TN' },
    { icon: Phone, label: 'Helpline', value: '+91 98765 43210 / +91 44 2828 0000' },
    { icon: Mail, label: 'Support Email', value: 'christmas@thezar.org' },
    { icon: Clock, label: 'Operating Hours', value: 'Monday – Sunday: 09:00 AM – 10:00 PM' },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        background: '#FAF7F2',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ maxWidth: '560px', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ width: '40px', height: '1px', background: '#6B1A1A' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1A1A' }}>
              Get In Touch
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#2C1810',
            lineHeight: 1.15,
            margin: '0 0 0.75rem',
          }}>
            Contact <span style={{ color: '#6B1A1A' }}>Our Team</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#5C3D2E', lineHeight: 1.7 }}>
            Have questions regarding bookings, performances, or festival schedules? We'd love to help.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1100px' }} className="contact-grid">

          {/* Info card */}
          <div
            style={{
              padding: '2.5rem',
              borderRadius: '16px',
              background: '#6B1A1A',
              color: '#FAF7F2',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                Festival Headquarters
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(250,247,242,0.75)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Our concierge desk is open daily throughout December to assist guests statewide.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(250,247,242,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon style={{ width: '18px', height: '18px', color: '#F2C4A0' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F2C4A0', margin: '0 0 0.15rem' }}>{label}</p>
                      <p style={{ fontSize: '0.85rem', color: '#FAF7F2', margin: 0, fontWeight: 500 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(250,247,242,0.15)', paddingTop: '1.25rem', marginTop: '2rem' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(250,247,242,0.5)', textTransform: 'uppercase', fontWeight: 600 }}>
                Official THEZAR Festive Desk 2026
              </p>
            </div>
          </div>

          {/* Form */}
          <div style={{ padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(107,26,26,0.08)', background: '#FFFFFF' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(26,107,61,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <CheckCircle2 style={{ width: '28px', height: '28px', color: '#1A6B3D' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: '#2C1810', margin: '0 0 0.5rem' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#5C3D2E', lineHeight: 1.7, maxWidth: '320px', margin: '0 auto' }}>
                  Thank you, <strong style={{ color: '#6B1A1A' }}>{formData.name}</strong>. We'll reply within 2–4 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setFormData({ name: '', email: '', phone: '', message: '' }); }}
                  style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', borderRadius: '9999px', background: 'transparent', border: '1px solid rgba(107,26,26,0.2)', color: '#6B1A1A', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Rachel Adams" style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = '#6B1A1A'} onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(107,26,26,0.12)'} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="contact-form-cols">
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="rachel@example.com" style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = '#6B1A1A'} onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(107,26,26,0.12)'} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" style={inputStyle} onFocus={(e) => e.currentTarget.style.borderColor = '#6B1A1A'} onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(107,26,26,0.12)'} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us how we can help..." style={{ ...inputStyle, resize: 'none' }} onFocus={(e) => e.currentTarget.style.borderColor = '#6B1A1A'} onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(107,26,26,0.12)'} />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '0.85rem',
                    borderRadius: '9999px',
                    background: '#6B1A1A',
                    color: '#FAF7F2',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#4A0F0F'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#6B1A1A'}
                >
                  <Send style={{ width: '14px', height: '14px' }} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1.3fr; }
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-form-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
