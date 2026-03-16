import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: '关于我', href: '#about' },
  { label: '个人简介', href: '#bio' },
  { label: '技能', href: '#skills' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '16px 0',
      transition: 'all 0.3s ease',
      background: scrolled
        ? 'rgba(15, 15, 26, 0.95)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(99,102,241,0.15)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          style={{
            fontSize: '1.4rem',
            fontWeight: 800,
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #a5b4fc, #67e8f9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.5px',
          }}
        >
          KC<span style={{ WebkitTextFillColor: '#6366f1', fontWeight: 400 }}>.</span>
        </a>

        {/* Desktop Nav */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '8px',
          alignItems: 'center',
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  textDecoration: 'none',
                  color: activeSection === link.href.slice(1) ? '#a5b4fc' : '#94a3b8',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  padding: '6px 14px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  background: activeSection === link.href.slice(1)
                    ? 'rgba(99,102,241,0.15)'
                    : 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#a5b4fc';
                  e.target.style.background = 'rgba(99,102,241,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = activeSection === link.href.slice(1) ? '#a5b4fc' : '#94a3b8';
                  e.target.style.background = activeSection === link.href.slice(1)
                    ? 'rgba(99,102,241,0.15)'
                    : 'transparent';
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/kelvin917"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: '1px solid rgba(99,102,241,0.3)',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            display: 'none',
          }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(15,15,26,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(99,102,241,0.2)',
          padding: '16px 24px',
          animation: 'fadeIn 0.2s ease',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                display: 'block',
                padding: '12px 0',
                color: '#94a3b8',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(99,102,241,0.1)',
                fontSize: '0.95rem',
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
