import { useState } from 'react';
import { User, Mail, Phone, Users, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import treeImg from '../../assets/xmas_tree.jpg';

export default function ChristmasRegisterSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '1',
    event: 'Christmas Eve Celebration (Dec 24)',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 2.75rem',
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

  const iconStyle = {
    width: '16px',
    height: '16px',
    color: '#8B7355',
    position: 'absolute',
    left: '0.85rem',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  return (
    <section
      id="register"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        background: '#FFFFFF',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ width: '40px', height: '1px', background: '#6B1A1A' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B1A1A' }}>
              Secure Your Spot
            </span>
            <span style={{ width: '40px', height: '1px', background: '#6B1A1A' }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#2C1810',
            lineHeight: 1.15,
            margin: '0 0 0.75rem',
          }}>
            Christmas Pass <span style={{ color: '#6B1A1A' }}>Registration</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#5C3D2E', lineHeight: 1.7 }}>
            Reserve your entry passes for our signature celebrations. Limited passes per session.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }} className="register-grid">

          {/* Form */}
          <div
            style={{
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(107,26,26,0.08)',
              background: '#FAF7F2',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(26,107,61,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <CheckCircle2 style={{ width: '28px', height: '28px', color: '#1A6B3D' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: '#2C1810', margin: '0 0 0.5rem' }}>
                  Pass Reserved!
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#5C3D2E', lineHeight: 1.7, maxWidth: '360px', margin: '0 auto' }}>
                  Thank you, <strong style={{ color: '#6B1A1A' }}>{formData.fullName}</strong>. A confirmation has been sent to {formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '1.25rem',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '9999px',
                    background: 'transparent',
                    border: '1px solid rgba(107,26,26,0.2)',
                    color: '#6B1A1A',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Register Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <div style={{ position: 'relative' }}>
                    <User style={iconStyle} />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your name"
                      style={inputStyle}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#6B1A1A'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(107,26,26,0.12)'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <div style={{ position: 'relative' }}>
                      <Mail style={iconStyle} />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        style={inputStyle}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#6B1A1A'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(107,26,26,0.12)'}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <div style={{ position: 'relative' }}>
                      <Phone style={iconStyle} />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={inputStyle}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#6B1A1A'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(107,26,26,0.12)'}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                  <div>
                    <label style={labelStyle}>Guests</label>
                    <div style={{ position: 'relative' }}>
                      <Users style={iconStyle} />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 – 4 Persons</option>
                        <option value="5+">5+ Persons</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Event *</label>
                    <div style={{ position: 'relative' }}>
                      <Calendar style={iconStyle} />
                      <select
                        value={formData.event}
                        onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      >
                        <option>Christmas Eve Celebration (Dec 24)</option>
                        <option>Santa Meet & Greet (Dec 25)</option>
                        <option>Winter Wonderland (Dec 26)</option>
                        <option>Christmas Market (Dec 27-29)</option>
                        <option>New Year Grand Celebration (Dec 31)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: '0.5rem',
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
                  Confirm Pass
                  <ArrowRight style={{ width: '14px', height: '14px' }} />
                </button>
              </form>
            )}
          </div>

          {/* Side card */}
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(107,26,26,0.08)',
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
              <img src={treeImg} alt="Christmas Tree" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(44,24,16,0.8) 100%)' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Grand Gift Collection</span>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', marginTop: '0.15rem' }}>Free with Pass</p>
              </div>
            </div>
            <div style={{ padding: '1.5rem', flex: 1 }}>
              <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, color: '#2C1810', margin: '0 0 0.5rem' }}>
                Welcome Hamper
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#8B7355', lineHeight: 1.6 }}>
                Every registered pass includes a handcrafted Christmas souvenir, holiday treat voucher, and priority access to Santa's Toy Workshop.
              </p>
              <div style={{
                marginTop: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: 'rgba(107,26,26,0.04)',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: '#6B1A1A',
                textAlign: 'center',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Limited Souvenirs Available
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .register-grid { grid-template-columns: 1.3fr 1fr; }
        @media (max-width: 767px) {
          .register-grid { grid-template-columns: 1fr !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
