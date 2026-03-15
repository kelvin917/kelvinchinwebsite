import React from 'react';

const stats = [
  { value: '3+', label: '年开发经验' },
  { value: '20+', label: '完成项目' },
  { value: '10+', label: '技术栈' },
  { value: '100%', label: '热情投入' },
];

export default function About() {
  return (
    <section id="about" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left: Avatar + Stats */}
          <div style={{ position: 'relative' }}>
            {/* Avatar */}
            <div style={{
              width: '280px',
              height: '280px',
              margin: '0 auto 48px',
              position: 'relative',
            }}>
              {/* Animated rings */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '50%',
                border: '2px solid rgba(99,102,241,0.2)',
                animation: 'float 4s ease-in-out infinite',
              }} />
              <div style={{
                position: 'absolute',
                inset: '-40px',
                borderRadius: '50%',
                border: '1px solid rgba(99,102,241,0.1)',
                animation: 'float 6s ease-in-out infinite reverse',
              }} />

              {/* Avatar circle */}
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '6rem',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 20px 60px rgba(99,102,241,0.3)',
              }}>
                KC
              </div>

              {/* Status badge */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: '#1a1a2e',
                border: '2px solid rgba(99,102,241,0.3)',
                borderRadius: '50px',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                color: '#94a3b8',
                fontWeight: 600,
                zIndex: 2,
              }}>
                <span style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                }} />
                Open to work
              </div>
            </div>

            {/* Stats grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{ padding: '24px', textAlign: 'center' }}
                >
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #a5b4fc, #67e8f9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '4px',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <div className="tag" style={{ marginBottom: '20px' }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              关于我
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              打造数字化的{' '}
              <span className="gradient-text">未来体验</span>
            </h2>

            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '20px', fontSize: '1rem' }}>
              我是 <strong style={{ color: '#f1f5f9' }}>Kelvin Chin</strong>，一名充满热情的全栈开发工程师，
              专注于构建现代化、高性能的 Web 应用程序。我相信优秀的软件不仅要功能强大，
              更要拥有出色的用户体验。
            </p>

            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '20px', fontSize: '1rem' }}>
              在过去几年的开发旅程中，我积累了丰富的前端与后端开发经验，
              熟练掌握 <strong style={{ color: '#a5b4fc' }}>React</strong>、
              <strong style={{ color: '#a5b4fc' }}>TypeScript</strong>、
              <strong style={{ color: '#a5b4fc' }}>Node.js</strong> 等现代技术栈，
              并有使用 <strong style={{ color: '#a5b4fc' }}>Supabase</strong> 构建云原生应用的实战经验。
            </p>

            <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '36px', fontSize: '1rem' }}>
              我热爱开源文化，享受与团队协作解决复杂问题的过程。
              在工作之外，我也喜欢探索新技术、参与编程社区，不断提升自己的技术边界。
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#bio"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#bio').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                阅读完整简介
              </a>
              <a
                href="https://github.com/kelvin917"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub 主页
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
