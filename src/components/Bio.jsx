import React from 'react';

const timeline = [
  {
    year: '2024 - 至今',
    title: '全栈开发工程师',
    company: '独立开发 / 自由职业',
    description: '专注于使用 React、TypeScript 和 Supabase 构建全栈 SaaS 应用，服务个人与小型企业客户。负责从需求分析、UI 设计到前后端开发的全流程工作。',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    icon: '💼',
    color: '#6366f1',
  },
  {
    year: '2023 - 2024',
    title: '前端开发实习生',
    company: '科技公司',
    description: '参与企业级 Web 应用的前端开发工作，使用 React 和 Vue.js 开发多个核心业务模块，优化页面性能，提升用户体验评分 30%+。',
    tags: ['React', 'Vue.js', 'JavaScript', 'CSS3'],
    icon: '🚀',
    color: '#06b6d4',
  },
  {
    year: '2021 - 2024',
    title: '计算机科学学士',
    company: '大学本科',
    description: '系统学习计算机科学基础知识，包括数据结构、算法、软件工程、数据库系统等核心课程。期间积极参与各类编程竞赛和项目开发，打下扎实的技术基础。',
    tags: ['计算机科学', '算法', '软件工程', '数据库'],
    icon: '🎓',
    color: '#f59e0b',
  },
];

const values = [
  {
    icon: '⚡',
    title: '追求极致性能',
    desc: '每一行代码都经过深思熟虑，追求最优的运行效率与用户体验。',
  },
  {
    icon: '🎨',
    title: '设计即代码',
    desc: '相信优秀的界面设计与高质量代码同等重要，两者缺一不可。',
  },
  {
    icon: '🤝',
    title: '协作与沟通',
    desc: '善于团队合作，擅长将技术概念用通俗易懂的语言表达给非技术人员。',
  },
  {
    icon: '📚',
    title: '持续学习',
    desc: '技术日新月异，始终保持对新知识的好奇心，不断拓展技术边界。',
  },
];

export default function Bio() {
  return (
    <section id="bio" style={{ background: 'rgba(26,26,46,0.3)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="tag" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            个人简介
          </div>
          <h2 className="section-title">
            我的{' '}
            <span className="gradient-text">故事</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            从好奇到热爱，从学习到创造 —— 这是我的技术成长之路
          </p>
        </div>

        {/* Bio Card */}
        <div className="glass-card" style={{ padding: '48px', marginBottom: '60px', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative */}
          <div style={{
            position: 'absolute',
            top: '-60px', right: '-60px',
            width: '200px', height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', position: 'relative', zIndex: 1 }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '20px',
                color: '#f1f5f9',
              }}>
                🧑‍💻 关于我自己
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '16px' }}>
                大家好，我是 <strong style={{ color: '#a5b4fc' }}>Kelvin Chin</strong>（钦伟杰），
                一名热爱技术的全栈开发工程师。我从小就对计算机充满好奇，
                高中时期开始自学编程，从第一行 Hello World 到如今能独立构建完整的 Web 应用，
                这段旅程让我深深爱上了软件开发这门艺术。
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.9, marginBottom: '16px' }}>
                我毕业于计算机科学专业，在校期间除了系统学习理论知识，
                还积极参与各类项目实践和编程竞赛，逐步建立起自己的技术体系。
                毕业后，我选择踏入互联网行业，专注于 Web 开发领域。
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.9 }}>
                目前，我主要使用 <strong style={{ color: '#a5b4fc' }}>React + TypeScript</strong> 进行前端开发，
                使用 <strong style={{ color: '#a5b4fc' }}>Supabase</strong> 和 <strong style={{ color: '#a5b4fc' }}>Node.js</strong> 构建后端服务，
                致力于为用户提供流畅、美观、高效的数字化体验。
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '20px',
                color: '#f1f5f9',
              }}>
                🌟 我的特质
              </h3>
              {[
                { label: '编程热情', level: 98 },
                { label: '学习能力', level: 95 },
                { label: '问题解决', level: 90 },
                { label: '团队协作', level: 88 },
                { label: '创新思维', level: 92 },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.label}</span>
                    <span style={{ color: '#a5b4fc', fontSize: '0.9rem', fontWeight: 600 }}>{item.level}%</span>
                  </div>
                  <div style={{
                    height: '6px',
                    background: 'rgba(99,102,241,0.15)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${item.level}%`,
                      background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
                      borderRadius: '3px',
                      transition: 'width 1s ease',
                    }} />
                  </div>
                </div>
              ))}

              {/* Fun facts */}
              <div style={{ marginTop: '28px', padding: '16px', background: 'rgba(99,102,241,0.08)', borderRadius: '12px', border: '1px solid rgba(99,102,241,0.15)' }}>
                <h4 style={{ color: '#a5b4fc', fontSize: '0.85rem', fontWeight: 600, marginBottom: '10px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  🎯 有趣的事实
                </h4>
                <ul style={{ color: '#64748b', fontSize: '0.85rem', listStyle: 'none', lineHeight: 2 }}>
                  <li>☕ 一天能喝 3 杯咖啡</li>
                  <li>🎮 游戏玩家，喜欢策略类游戏</li>
                  <li>📖 热爱阅读技术博客和文档</li>
                  <li>🌏 梦想是环游世界</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <h3 style={{
          fontSize: '1.6rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '48px',
          color: '#f1f5f9',
        }}>
          📅 我的经历时间线
        </h3>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto 80px' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #6366f1, #06b6d4)',
            transform: 'translateX(-50%)',
            opacity: 0.3,
          }} />

          {timeline.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '32px',
                marginBottom: '48px',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              {/* Card */}
              <div style={{ flex: 1 }}>
                <div className="glass-card" style={{
                  padding: '28px',
                  borderLeft: i % 2 === 0 ? `3px solid ${item.color}` : 'none',
                  borderRight: i % 2 !== 0 ? `3px solid ${item.color}` : 'none',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: item.color,
                    fontWeight: 600,
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}>
                    {item.year}
                  </div>
                  <h4 style={{ color: '#f1f5f9', fontWeight: 700, marginBottom: '4px' }}>
                    {item.title}
                  </h4>
                  <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '12px' }}>
                    {item.company}
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px' }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {item.tags.map(tag => (
                      <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center icon */}
              <div style={{
                width: '52px',
                height: '52px',
                minWidth: '52px',
                borderRadius: '50%',
                background: `rgba(${item.color === '#6366f1' ? '99,102,241' : item.color === '#06b6d4' ? '6,182,212' : '245,158,11'}, 0.15)`,
                border: `2px solid ${item.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                position: 'relative',
                zIndex: 1,
              }}>
                {item.icon}
              </div>

              {/* Spacer for alternating layout */}
              <div style={{ flex: 1 }} />
            </div>
          ))}
        </div>

        {/* Values */}
        <h3 style={{
          fontSize: '1.6rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '48px',
          color: '#f1f5f9',
        }}>
          💡 我的价值观
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}>
          {values.map((v, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: '32px 24px',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(99,102,241,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{v.icon}</div>
              <h4 style={{ color: '#f1f5f9', fontWeight: 700, marginBottom: '12px' }}>{v.title}</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #bio .glass-card > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          #bio .timeline-item {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
