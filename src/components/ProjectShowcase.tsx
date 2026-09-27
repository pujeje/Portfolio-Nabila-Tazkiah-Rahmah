import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowUpRight, X, CheckCircle2, Search, MessageSquare, ChevronLeft, ChevronRight,
  ExternalLink, Github, Globe, FileText, BarChart2, Link2, Layout
} from 'lucide-react';
import { Project, PortfolioProfile } from '../types/portfolio';
import { AppTheme } from '../utils/themeConfig';

interface ProjectShowcaseProps {
  projects: Project[];
  theme: AppTheme;
  profile?: PortfolioProfile;
  onBackToHome?: () => void;
  onUpdateProjects?: (projects: Project[]) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ 
  projects, 
  theme, 
  profile, 
  onBackToHome,
  onUpdateProjects 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const cleanPhone = (profile?.phone || '085772311049').replace(/[^0-9]/g, '');
  const waNumber = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current && (e.deltaY !== 0 || e.deltaX !== 0)) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        scrollRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollStart - walk;
    checkScroll();
  };

  const onMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const categories = [
    'All',
    'Data Analytics & BI',
    'UI/UX & Product Design',
    'Full-stack Development',
    'Data Engineering',
    'Social Impact',
  ];

  const isDark = theme.isDark;

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.summary.toLowerCase().includes(query) ||
      project.role.toLowerCase().includes(query) ||
      project.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const getLinkIcon = (typeOrLabel?: string) => {
    const str = (typeOrLabel || '').toLowerCase();
    if (str.includes('github') || str.includes('repo') || str.includes('code')) {
      return <Github className="w-3.5 h-3.5 shrink-0" />;
    }
    if (str.includes('figma') || str.includes('design') || str.includes('prototype')) {
      return <Layout className="w-3.5 h-3.5 shrink-0" />;
    }
    if (str.includes('power bi') || str.includes('bi') || str.includes('analytic') || str.includes('chart') || str.includes('dashboard')) {
      return <BarChart2 className="w-3.5 h-3.5 shrink-0" />;
    }
    if (str.includes('drive') || str.includes('doc') || str.includes('sheet') || str.includes('pdf')) {
      return <FileText className="w-3.5 h-3.5 shrink-0" />;
    }
    if (str.includes('live') || str.includes('demo') || str.includes('web') || str.includes('app')) {
      return <Globe className="w-3.5 h-3.5 shrink-0" />;
    }
    return <Link2 className="w-3.5 h-3.5 shrink-0" />;
  };

  return (
    <section className="relative py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${theme.textPrimary}`}>
              Projects
            </h2>
            <p className={`text-xs sm:text-sm ${theme.textSecondary} mt-1 max-w-2xl`}>
              Explore automated ETL pipelines, responsive web applications, Figma UI/UX design systems, and business intelligence dashboards.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects, tools, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                isDark
                  ? 'bg-[#12151b] border-white/15 text-white focus:border-pink-500'
                  : 'bg-white border-neutral-300 text-neutral-900 focus:border-pink-500'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-50 hover:opacity-100 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Carousel Filters */}
        <div className="relative mb-10 group/carousel">
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full border shadow-md flex items-center justify-center transition-all cursor-pointer ${
                isDark 
                  ? 'bg-neutral-900/90 border-white/20 text-white hover:bg-neutral-800' 
                  : 'bg-white/90 border-neutral-200 text-neutral-800 hover:bg-white'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            onWheel={handleWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUpOrLeave}
            onMouseLeave={onMouseUpOrLeave}
            className={`flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 cursor-grab ${
              isMouseDown ? 'cursor-grabbing select-none' : ''
            }`}
          >
            {categories.map((cat) => {
              const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 border flex items-center gap-1.5 ${
                    isActive
                      ? isDark
                        ? 'bg-pink-600 border-pink-500 text-white shadow-xs'
                        : 'bg-pink-600 border-pink-600 text-white shadow-xs'
                      : isDark
                        ? 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                        : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/10 dark:bg-white/10 opacity-70'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full border shadow-md flex items-center justify-center transition-all cursor-pointer ${
                isDark 
                  ? 'bg-neutral-900/90 border-white/20 text-white hover:bg-neutral-800' 
                  : 'bg-white/90 border-neutral-200 text-neutral-800 hover:bg-white'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`p-12 text-center rounded-2xl border ${theme.borderSubtle}`}>
            <p className={`text-sm ${theme.textSecondary}`}>
              No projects found matching <span className="font-semibold">"{searchQuery}"</span> in {activeCategory}.
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-pink-500 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                }}
                className={`group flex flex-col justify-between rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isDark
                    ? 'bg-[#12151b] border-white/10 hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-950/20'
                    : 'bg-white border-neutral-200 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100/50'
                }`}
              >
                <div>
                  {/* Media Cover */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000';
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 text-[11px] font-semibold text-neutral-900 shadow-xs">
                      {project.category}
                    </div>

                    <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 flex items-center justify-center text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono opacity-70">
                      <span className="font-semibold">{project.projectType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.role}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.year}</span>
                    </div>

                    <h3 className={`font-display text-xl font-bold tracking-tight group-hover:text-pink-500 transition-colors ${theme.textPrimary}`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs sm:text-sm ${theme.textSecondary} line-clamp-2 leading-relaxed`}>
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Footer: Metrics + Project Links Menu + Tags */}
                <div className="px-6 pb-6 pt-1 space-y-3">
                  {project.metrics && (
                    <div className={`text-xs font-medium flex items-center gap-1.5 p-2 rounded-xl border ${
                      isDark
                        ? 'bg-pink-500/10 border-pink-500/20 text-pink-300'
                        : 'bg-[#fceef2] border-[#f5d0da] text-[#b84d66]'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}

                  {/* Project Links Menu (Direct Click-Through) */}
                  {project.links && project.links.filter(l => Boolean(l.url)).length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      {project.links.filter(l => Boolean(l.url)).map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
                            isDark
                              ? 'bg-pink-950/40 text-pink-300 border-pink-500/30 hover:bg-pink-900/60 hover:border-pink-400'
                              : 'bg-pink-50 text-pink-700 border-pink-200/90 hover:bg-pink-100 hover:border-pink-300'
                          }`}
                          title={`Open ${link.label}`}
                        >
                          {getLinkIcon(link.type || link.label)}
                          <span>{link.label}</span>
                          <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-neutral-300'
                            : 'bg-neutral-100 border-neutral-200/60 text-neutral-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Modal Lightbox */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div className={`relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border shadow-2xl ${
              isDark ? 'bg-[#15181f] border-white/15 text-white' : 'bg-white border-neutral-200 text-neutral-900'
            }`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
                title="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-[16/9] w-full bg-neutral-950 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono opacity-70 mb-2">
                    <span className="font-semibold text-pink-400">{selectedProject.category}</span>
                    <span>·</span>
                    <span>{selectedProject.projectType}</span>
                    <span>·</span>
                    <span>Role: {selectedProject.role}</span>
                    <span>·</span>
                    <span className="tabular-nums">{selectedProject.year}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* PROJECT LINKS & RESOURCES MENU (If project has links) */}
                {selectedProject.links && selectedProject.links.filter(l => Boolean(l.url)).length > 0 && (
                  <div className={`p-4 sm:p-5 rounded-xl border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-neutral-50 border-neutral-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Link2 className="w-4 h-4 text-pink-500" />
                      <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${theme.textPrimary}`}>
                        Project Links
                      </span>
                    </div>

                    {/* Active Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.links.filter(l => Boolean(l.url)).map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                            isDark 
                              ? 'bg-neutral-900/60 border-white/10 hover:border-pink-500/50 hover:bg-neutral-900 text-neutral-200 hover:text-white' 
                              : 'bg-white border-neutral-200 hover:border-pink-300 hover:shadow-xs text-neutral-800 hover:text-pink-600'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 flex-1 min-w-0">
                            <span className="p-1.5 rounded-md bg-pink-500/10 text-pink-500 shrink-0">
                              {getLinkIcon(link.type || link.label)}
                            </span>
                            <div className="truncate">
                              <div className="font-semibold text-xs truncate">{link.label}</div>
                              <div className="text-[10px] opacity-60 font-mono truncate">{link.url}</div>
                            </div>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0 ml-2" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'bg-white/5 border-white/10 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                }`}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    Project Overview:
                  </div>
                  <p>{selectedProject.description}</p>
                </div>

                {/* Challenge & Solution */}
                {(selectedProject.challenge || selectedProject.solution) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.challenge && (
                      <div className={`p-4 rounded-xl border space-y-1 ${
                        isDark ? 'bg-amber-500/10 border-amber-500/20 text-amber-200' : 'bg-[#fff7ed] border-[#ffedd5] text-amber-950'
                      }`}>
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-500">
                          Challenge & Complexity
                        </div>
                        <p className="text-xs leading-relaxed opacity-90">
                          {selectedProject.challenge}
                        </p>
                      </div>
                    )}
                    {selectedProject.solution && (
                      <div className={`p-4 rounded-xl border space-y-1 ${
                        isDark ? 'bg-pink-500/10 border-pink-500/20 text-pink-200' : 'bg-[#fdf2f4] border-[#fce7eb] text-pink-950'
                      }`}>
                        <div className="text-xs font-bold uppercase tracking-wider text-pink-500">
                          Solution & Implementation
                        </div>
                        <p className="text-xs leading-relaxed opacity-90">
                          {selectedProject.solution}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Deliverables */}
                {selectedProject.deliverables && (
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-75">
                      Key Deliverables
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedProject.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-2 p-2.5 rounded-lg border ${
                            isDark ? 'bg-white/5 border-white/10' : 'bg-neutral-50 border-neutral-200/70'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                        isDark ? 'bg-white/10 text-neutral-200' : 'bg-neutral-100 text-neutral-800'
                      }`}
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${waNumber}?text=Hello%20${encodeURIComponent(profile?.name || 'Nabila')},%20I%20am%20interested%20in%20your%20project:%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-[#d97288] hover:bg-[#c65e74] text-white transition-all shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Discuss Project via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 text-xs font-semibold rounded-xl bg-neutral-800 text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
