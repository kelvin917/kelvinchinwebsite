import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: 0,
        }}
      />

      {/* Gradient blobs */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '10%',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%', right: '10%',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(99,102,241,0.1)',
          border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: '50px',
          padding: '6px 18px',
          marginBottom: '32px',
          animation: 'fadeInUp 0.6s ease-out',
        }}>
          <span style={{
            width: '8px', height: '8px',
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }} />
          <span style={{ color: '#a5b4fc', fontSize: '0.85rem', fontWeight: 500 }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-2px',
          marginBottom: '16px',
          animation: 'fadeInUp 0.7s ease-out',
        }}>
          <span style={{ color: '#f1f5f9' }}>Hi, I'm </span>
          <span className="gradient-text">Kelvin</span>
        </h1>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          color: '#94a3b8',
          fontWeight: 400,
          marginBottom: '24px',
          animation: 'fadeInUp 0.8s ease-out',
        }}>
          全栈开发工程师 &nbsp;·&nbsp; UI/UX 爱好者 &nbsp;·&nbsp; 问题解决者
        </h2>

        {/* Description */}
        <p style={{
          fontSize: '1.1rem',
          color: '#64748b',
          maxWidth: '560px',
          margin: '0 auto 40px',
          lineHeight: 1.8,
          animation: 'fadeInUp 0.9s ease-out',
        }}>
          热衷于构建优雅、高性能的 Web 应用，将复杂问题转化为简洁的用户体验。
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeInUp 1s ease-out',
        }}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            查看我的项目
          </a>
          <a
            href="#contact"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            联系我
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'fadeIn 1.2s ease-out',
          cursor: 'pointer',
        }}
          onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span style={{ color: '#64748b', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            向下滚动
          </span>
          <div style={{
            width: '24px', height: '40px',
            border: '2px solid rgba(99,102,241,0.4)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '4px',
          }}>
            <div style={{
              width: '4px', height: '8px',
              background: '#6366f1',
              borderRadius: '2px',
              animation: 'float 1.5s ease-in-out infinite',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
