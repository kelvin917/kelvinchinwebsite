import React, { useState } from 'react';

const projects = [
  {
    title: 'TaskFlow Pro',
    desc: '一款现代化的团队任务管理 SaaS 应用，支持实时协作、任务看板、进度追踪和数据分析。集成 Supabase 实时数据库，实现多用户实时同步。',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    category: 'fullstack',
    icon: '📋',
    color: '#6366f1',
    features: ['实时协作', '任务看板', '数据可视化', '权限管理'],
    status: '已上线',
    statusColor: '#22c55e',
    github: 'https://github.com/kelvin917',
    demo: '#',
  },
  {
    title: 'Portfolio Builder',
    desc: '一款帮助开发者快速创建专业作品集网站的工具，提供多种主题模板，支持自定义配置，一键导出静态网站。',
    tags: ['React', 'JavaScript', 'CSS3', 'Vite'],
    category: 'frontend',
    icon: '🎨',
    color: '#06b6d4',
    features: ['模板市场', '拖拽编辑', '一键部署', 'SEO 优化'],
    status: '开发中',
    statusColor: '#f59e0b',
    github: 'https://github.com/kelvin917',
    demo: '#',
  },
  {
    title: 'Weather Dashboard',
    desc: '精美的天气数据可视化仪表板，接入多个天气 API，提供全球城市实时天气、历史数据分析和 7 天预报功能。',
    tags: ['React', 'TypeScript', 'Chart.js', 'REST API'],
    category: 'frontend',
    icon: '🌤️',
    color: '#f59e0b',
    features: ['实时天气', '数据图表', '多城市', '历史数据'],
    status: '已上线',
    statusColor: '#22c55e',
    github: 'https://github.com/kelvin917',
    demo: '#',
  },
  {
    title: 'E-Commerce Platform',
    desc: '功能完整的电商平台，包含商品管理、购物车、订单系统、支付集成和后台管理面板，支持多商家入驻。',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
    category: 'fullstack',
    icon: '🛍️',
    color: '#ec4899',
    features: ['商品管理', '购物车', '订单追踪', '后台管理'],
    status: '已完成',
    statusColor: '#64748b',
    github: 'https://github.com/kelvin917',
    demo: '#',
  },
  {
    title: 'AI Chat Interface',
    desc: '基于现代 AI API 构建的智能对话界面，支持多模型切换、对话历史管理、Markdown 渲染和代码高亮显示。',
    tags: ['React', 'TypeScript', 'AI API', 'Tailwind'],
    category: 'ai',
    icon: '🤖',
    color: '#8b5cf6',
    features: ['多模型支持', '历史记录', 'Markdown', '代码高亮'],
    status: '开发中',
    statusColor: '#f59e0b',
    github: 'https://github.com/kelvin917',
    demo: '#',
  },
  {
    title: 'Dev Blog CMS',
    desc: '专为开发者设计的内容管理系统，支持 Markdown 写作、代码块高亮、标签分类、评论系统和 RSS 订阅。',
    tags: ['React', 'Supabase', 'Markdown', 'TypeScript'],
    category: 'fullstack',
    icon: '✍️',
    color: '#10b981',
    features: ['Markdown 编辑', '代码高亮', '评论系统', 'RSS 订阅'],
    status: '已上线',
    statusColor: '#22c55e',
    github: 'https://github.com/kelvin917',
    demo: '#',
  },
];

const filterTabs = [
  { label: '全部', key: 'all' },
  { label: '全栈', key: 'fullstack' },
  { label: '前端', key: 'frontend' },
  { label: 'AI', key: 'ai' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" style={{ background: 'rgba(26,26,46,0.3)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="tag" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            项目展示
          </div>
          <h2 className="section-title">
            我的{' '}
            <span className="gradient-text">作品集</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            每一个项目都是一次探索与挑战，记录着我的成长历程
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}>
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              style={{
                padding: '8px 24px',
                borderRadius: '50px',
                border: activeFilter === tab.key
                  ? '2px solid #6366f1'
                  : '2px solid rgba(99,102,241,0.2)',
                background: activeFilter === tab.key
                  ? 'rgba(99,102,241,0.15)'
                  : 'transparent',
                color: activeFilter === tab.key ? '#a5b4fc' : '#64748b',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="glass-card"
              style={{
                padding: '0',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                transform: hoveredProject === project.title ? 'translateY(-8px)' : 'none',
                boxShadow: hoveredProject === project.title
                  ? `0 20px 50px ${project.color}22`
                  : 'none',
                cursor: 'default',
              }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card header */}
              <div style={{
                padding: '28px 28px 0',
                background: `linear-gradient(135deg, ${project.color}18, transparent)`,
                borderBottom: `1px solid ${project.color}22`,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '56px', height: '56px',
                    borderRadius: '14px',
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                  }}>
                    {project.icon}
                  </div>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: `${project.statusColor}20`,
                    color: project.statusColor,
                    border: `1px solid ${project.statusColor}40`,
                  }}>
                    {project.status}
                  </span>
                </div>

                <h3 style={{
                  color: '#f1f5f9',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  marginBottom: '12px',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#64748b',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}>
                  {project.desc}
                </p>

                {/* Features */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {project.features.map(f => (
                    <span key={f} style={{
                      padding: '2px 10px',
                      background: `${project.color}12`,
                      color: project.color,
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}>
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div style={{ padding: '16px 28px 24px' }}>
                {/* Tags */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      border: '1px solid rgba(99,102,241,0.3)',
                      background: 'transparent',
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                      e.currentTarget.style.color = '#a5b4fc';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                  >
                    🐙 GitHub
                  </a>
                  <a
                    href={project.demo}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)`,
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.85';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    🚀 Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <a
            href="https://github.com/kelvin917"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            在 GitHub 查看更多项目
          </a>
        </div>
      </div>
    </section>
  );
}
