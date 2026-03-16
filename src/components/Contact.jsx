import React, { useState } from 'react';

const contactInfo = [
  {
    icon: '📧',
    label: '邮箱',
    value: 'kelvin.chin@example.com',
    href: 'mailto:kelvin.chin@example.com',
    color: '#6366f1',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/kelvin917',
    href: 'https://github.com/kelvin917',
    color: '#94a3b8',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/kelvinchin',
    href: 'https://linkedin.com/in/kelvinchin',
    color: '#0077b5',
  },
  {
    icon: '📍',
    label: '所在地',
    value: 'Malaysia',
    href: null,
    color: '#06b6d4',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = (name) => ({
    width: '100%',
    padding: '14px 16px',
    background: focused === name ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.03)',
    border: focused === name ? '1px solid rgba(99,102,241,0.5)' : '1px solid rgba(99,102,241,0.15)',
    borderRadius: '10px',
    color: '#f1f5f9',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
  });

  const labelStyle = {
    display: 'block',
    color: '#94a3b8',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '8px',
    letterSpacing: '0.5px',
  };

  return (
    <section id="contact">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="tag" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            联系我
          </div>
          <h2 className="section-title">
            让我们一起{' '}
            <span className="gradient-text">创造未来</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            无论是项目合作、技术交流还是工作机会，我都很乐意与你联系！
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '60px',
          alignItems: 'start',
        }}>
          {/* Left: Contact info */}
          <div>
            <h3 style={{
              color: '#f1f5f9',
              fontWeight: 700,
              fontSize: '1.3rem',
              marginBottom: '12px',
            }}>
              保持联系 👋
            </h3>
            <p style={{
              color: '#64748b',
              lineHeight: 1.8,
              marginBottom: '36px',
              fontSize: '0.95rem',
            }}>
              我目前对新的机遇持开放态度，不管是全职工作、兼职项目还是技术咨询。
              有任何问题或想法，随时欢迎联系我！
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'all 0.2s ease',
                    cursor: info.href ? 'pointer' : 'default',
                  }}
                  onClick={() => info.href && window.open(info.href, '_blank')}
                  onMouseEnter={(e) => {
                    if (info.href) {
                      e.currentTarget.style.borderColor = `${info.color}44`;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px',
                    minWidth: '44px',
                    borderRadius: '12px',
                    background: `${info.color}18`,
                    border: `1px solid ${info.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600, marginBottom: '2px' }}>
                      {info.label}
                    </div>
                    <div style={{ color: info.href ? '#a5b4fc' : '#94a3b8', fontSize: '0.9rem', fontWeight: 500 }}>
                      {info.value}
                    </div>
                  </div>
                  {info.href && (
                    <div style={{ marginLeft: 'auto', color: '#64748b' }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Availability */}
            <div style={{
              marginTop: '32px',
              padding: '20px',
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.2)',
              borderRadius: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{
                  width: '10px', height: '10px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                  boxShadow: '0 0 8px #22c55e',
                }} />
                <span style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.9rem' }}>
                  目前有空 · Available Now
                </span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6 }}>
                我正在寻找新的工作机会或项目合作。一般会在 24 小时内回复！
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass-card" style={{ padding: '40px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
                <h3 style={{ color: '#f1f5f9', fontWeight: 700, marginBottom: '12px', fontSize: '1.3rem' }}>
                  消息已发送！
                </h3>
                <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '28px' }}>
                  感谢你的联系！我会尽快回复你，通常在 24 小时内。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ fontSize: '0.9rem' }}
                >
                  发送另一条消息
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ color: '#f1f5f9', fontWeight: 700, marginBottom: '28px', fontSize: '1.2rem' }}>
                  发送消息 💬
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={labelStyle}>你的名字</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      placeholder="Kelvin"
                      required
                      style={inputStyle('name')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>邮箱地址</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder="your@email.com"
                      required
                      style={inputStyle('email')}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={labelStyle}>主题</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    placeholder="项目合作 / 工作机会 / 技术交流..."
                    required
                    style={inputStyle('subject')}
                  />
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle}>消息内容</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="你好 Kelvin，我想..."
                    required
                    rows={5}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: sending ? 0.7 : 1,
                  }}
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <svg style={{ animation: 'spin 1s linear infinite' }} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      发送中...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      发送消息
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          #contact .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          #contact form > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
