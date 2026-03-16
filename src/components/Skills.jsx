import React, { useState } from 'react';

const categories = [
  {
    label: '全部',
    key: 'all',
  },
  {
    label: '前端',
    key: 'frontend',
  },
  {
    label: '后端',
    key: 'backend',
  },
  {
    label: '工具',
    key: 'tools',
  },
];

const skills = [
  // Frontend
  { name: 'React', level: 92, category: 'frontend', color: '#61dafb', icon: '⚛️', desc: '主力前端框架，熟练使用 Hooks、Context、Suspense 等特性' },
  { name: 'TypeScript', level: 88, category: 'frontend', color: '#3178c6', icon: '📘', desc: '类型安全开发，提升代码质量和可维护性' },
  { name: 'JavaScript', level: 93, category: 'frontend', color: '#f7df1e', icon: '🟨', desc: 'ES6+ 现代语法，异步编程，DOM 操作' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend', color: '#06b6d4', icon: '🎨', desc: '实用优先的 CSS 框架，快速构建精美界面' },
  { name: 'HTML/CSS', level: 95, category: 'frontend', color: '#e34c26', icon: '🌐', desc: '语义化 HTML5，响应式 CSS3，动画效果' },
  { name: 'Vite', level: 85, category: 'frontend', color: '#646cff', icon: '⚡', desc: '现代前端构建工具，闪电般的开发体验' },

  // Backend
  { name: 'Node.js', level: 80, category: 'backend', color: '#68a063', icon: '🟢', desc: '服务端 JavaScript 运行时，构建高性能 API' },
  { name: 'Supabase', level: 88, category: 'backend', color: '#3ecf8e', icon: '🔋', desc: '开源 Firebase 替代品，BaaS 解决方案' },
  { name: 'PostgreSQL', level: 78, category: 'backend', color: '#336791', icon: '🐘', desc: '关系型数据库，复杂查询与数据建模' },
  { name: 'REST API', level: 88, category: 'backend', color: '#ff6b6b', icon: '🔌', desc: 'RESTful API 设计与开发最佳实践' },

  // Tools
  { name: 'Git', level: 90, category: 'tools', color: '#f05032', icon: '🔀', desc: '版本控制，协作开发，分支管理策略' },
  { name: 'GitHub', level: 88, category: 'tools', color: '#ffffff', icon: '🐙', desc: '代码托管，CI/CD，Issue 追踪，PR 协作' },
  { name: 'VS Code', level: 95, category: 'tools', color: '#007acc', icon: '💻', desc: '主力编辑器，高度自定义配置与扩展' },
  { name: 'Figma', level: 72, category: 'tools', color: '#f24e1e', icon: '🖌️', desc: 'UI 设计与原型制作，设计系统构建' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="tag" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            技术栈
          </div>
          <h2 className="section-title">
            我的{' '}
            <span className="gradient-text">技能武器库</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            多年实战积累的技术栈，持续学习，不断进化
          </p>
        </div>

        {/* Category filter */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}>
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                padding: '8px 24px',
                borderRadius: '50px',
                border: activeCategory === cat.key
                  ? '2px solid #6366f1'
                  : '2px solid rgba(99,102,241,0.2)',
                background: activeCategory === cat.key
                  ? 'rgba(99,102,241,0.15)'
                  : 'transparent',
                color: activeCategory === cat.key ? '#a5b4fc' : '#64748b',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card"
              style={{
                padding: '24px',
                cursor: 'default',
                transition: 'all 0.3s ease',
                transform: hoveredSkill === skill.name ? 'translateY(-6px)' : 'none',
                boxShadow: hoveredSkill === skill.name
                  ? `0 16px 40px ${skill.color}22`
                  : 'none',
                borderColor: hoveredSkill === skill.name
                  ? `${skill.color}44`
                  : 'rgba(99,102,241,0.2)',
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '1.8rem' }}>{skill.icon}</span>
                <div>
                  <h4 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem' }}>{skill.name}</h4>
                  <span style={{
                    fontSize: '0.75rem',
                    color: skill.color,
                    fontWeight: 600,
                    background: `${skill.color}18`,
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}>
                    {skill.level >= 90 ? '精通' : skill.level >= 80 ? '熟练' : '掌握'}
                  </span>
                </div>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: skill.color,
                }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div style={{
                height: '6px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '3px',
                marginBottom: '12px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                  borderRadius: '3px',
                  transition: 'width 1s ease',
                }} />
              </div>

              {/* Desc */}
              <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.6 }}>
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '32px',
          background: 'rgba(99,102,241,0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(99,102,241,0.1)',
        }}>
          <p style={{ color: '#64748b', fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.8 }}>
            "好的代码不仅仅是能运行的代码，而是让人读起来像一首诗的代码。"
          </p>
          <p style={{ color: '#6366f1', fontSize: '0.85rem', marginTop: '8px', fontWeight: 600 }}>
            — Kelvin Chin
          </p>
        </div>
      </div>
    </section>
  );
}
