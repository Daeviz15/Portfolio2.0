"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, ExternalLink, Github } from 'lucide-react';

type ProjectCategory = 'web' | 'mobile';

interface Project {
  id: number;
  category: ProjectCategory;
  title: string;
  description: string;
  tech: string[];
  image: string; // Brief preview image
  screenshot?: string; // Long-page screenshot for vertical auto-scroll
  screenshots?: string[]; // Multiple screenshots for horizontal carousel
  link?: string;
  github?: string;
  isTesting?: boolean; // New flag for apps not yet in app stores
}

const projects: Project[] = [
  {
    id: 1,
    category: 'web',
    title: 'Acadex',
    description: 'An academic partner platform bridging expert mentorship with AI-driven tools. Features specialized assistance for complex coursework, AI tutors, and a centralized resource archive for higher education students.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    image: '/acadex-preview.png', // Placeholder
    screenshot: '/acadex-full.png', // Placeholder for long screenshot
    link: 'https://acadex-one.vercel.app/',
    github: 'https://github.com/Daeviz15/Acadex',
  },
  {
    id: 2,
    category: 'web',
    title: 'NewLabel-Hub',
    description: 'A unified digital media hub integrating high-quality VOD (Mux), podcasts, and an educational e-commerce marketplace. Features multi-branded dashboards for Jsity, THC, and GospelLine.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Shadcn UI', 'Supabase', 'Mux'],
    image: '/project1.png',
    screenshot: '/newlabel-full.png',
    link: 'https://newlabel-hub.vercel.app/',
    github: 'https://github.com/Daeviz15/newlabel-hub',
  },
  {
    id: 3,
    category: 'mobile',
    title: 'Mayor Exchange',
    description: 'A secure fintech platform for trading digital assets and liquidating gift cards. Features real-time market tracking, integrated wallet management, and robust KYC/2FA security measures.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API', '2FA'],
    image: '/mayor-preview.png', // Placeholder
    screenshot: '/mayor-full.jpg', // Placeholder for long screenshot
    isTesting: true,
  },
  {
    id: 4,
    category: 'mobile',
    title: 'SkillSwap',
    description: 'A peer-to-peer learning platform democratizing digital skill acquisition. Features AI-powered personalized roadmaps (Gemini AI), a reciprocal credit-based incentive system, and real-time community mentorship.',
    tech: ['Flutter', 'Supabase', 'Gemini AI', 'Node.js'],
    image: '/skillswap-preview.png', // Placeholder
    screenshots: [
      '/photo_2026-02-09_00-53-56.jpg',
      '/photo_2026-02-09_00-54-00.jpg',
      '/photo_2026-02-09_00-54-02.jpg',
      '/photo_2026-02-09_00-54-04.jpg',
      '/photo_2026-02-09_00-54-06.jpg',
      '/photo_2026-02-09_00-54-08.jpg',
      '/photo_2026-02-09_00-54-09.jpg',
      '/photo_2026-02-09_00-54-16.jpg',
      '/photo_2026-02-09_00-54-18.jpg',
      '/photo_2026-02-09_00-54-20.jpg',
      '/photo_2026-02-09_00-54-24.jpg',
      '/photo_2026-02-09_00-54-26.jpg'
    ],
    isTesting: true,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('web');
  const [notification, setNotification] = useState<{ show: boolean; msg: string }>({ show: false, msg: '' });
  
  const showTestingMessage = () => {
    setNotification({ 
      show: true, 
      msg: "This app is currently in the testing phase and will soon be available on the Play Store and App Store." 
    });
    setTimeout(() => setNotification({ show: false, msg: '' }), 4000);
  };

  const filteredProjects = projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative pt-24 md:pt-32 pb-12 bg-[#0a0a0a] overflow-hidden">
      {/* Elegant Curved Section Divider - Consistent with About section */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -translate-y-[1px]">
        <svg 
          className="relative block w-full h-[80px] md:h-[120px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Main curved shape with gradient */}
          <defs>
            <linearGradient id="curveGradientPortfolio" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.05" />
              <stop offset="30%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="glowGradientPortfolio" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Subtle glow behind the curve */}
          <path 
            d="M0,60 C300,100 600,20 900,80 C1050,100 1150,60 1200,40 L1200,0 L0,0 Z" 
            fill="url(#glowGradientPortfolio)"
          />
          {/* Main elegant curve line */}
          <path 
            d="M0,80 Q300,120 600,60 T1200,80" 
            fill="none" 
            stroke="url(#curveGradientPortfolio)" 
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Secondary subtle curve for depth */}
          <path 
            d="M0,85 Q300,125 600,65 T1200,85" 
            fill="none" 
            stroke="url(#curveGradientPortfolio)" 
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
      </div>
      
      <div className="w-full" style={{ paddingLeft: 'var(--section-padding)', paddingRight: 'var(--section-padding)' }}>
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
              My Recent Projects
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-outfit uppercase">
              Recent <span className="text-primary">Projects</span><span className="text-primary">.</span>
            </h2>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex justify-center lg:justify-start gap-8 md:gap-12 mt-12 border-b border-white/5 overflow-x-auto no-scrollbar whitespace-nowrap">
            {(['web', 'mobile'] as ProjectCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative pb-4 text-[11px] font-bold uppercase tracking-widest transition-colors ${
                  activeCategory === cat ? 'text-primary' : 'text-muted/30 hover:text-white'
                }`}
              >
                {cat === 'web' ? 'Web Development' : 'Mobile Apps'}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="portfolioTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-20 md:space-y-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-20 md:space-y-32"
            >
              {filteredProjects.map((project, index) => {
                const isEven = index % 2 !== 0;
                return (
                  <div key={project.id} className="relative group">
                    {/* Decorative Corner Accents - Inspired by Reference */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-sm pointer-events-none group-hover:-top-4 group-hover:-left-4 transition-all duration-500" />
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-sm pointer-events-none group-hover:-bottom-4 group-hover:-right-4 transition-all duration-500" />
                    
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      
                      {/* Content Column */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className={`space-y-4 md:space-y-6 pt-0 md:pt-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                      >
                        <h3 className="text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
                          {project.title}
                        </h3>
                        <p className="text-muted/60 text-lg leading-relaxed max-w-lg font-medium">
                          {project.description}
                        </p>
                        <div className="space-y-2 pt-2">
                          <p className="text-[12px] font-bold text-white uppercase tracking-widest">
                            Built using: <span className="text-muted/40 font-medium normal-case tracking-normal ml-2">
                              {project.tech.map((t, i) => (
                                <span key={i}>
                                  {t}{i < project.tech.length - 1 ? (t.includes('||') ? ' ' : ', ') : ''}
                                </span>
                              ))}
                            </span>
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-8 pt-6">
                          {project.isTesting ? (
                            <button 
                              onClick={showTestingMessage}
                              className="flex items-center gap-3 text-primary hover:text-white transition-all text-[11px] font-bold uppercase tracking-[0.2em] group/link"
                            >
                              Visit Live Site
                              <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </button>
                          ) : (
                            <a 
                              href={project.link || "#"} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 text-primary hover:text-white transition-all text-[11px] font-bold uppercase tracking-[0.2em] group/link"
                            >
                              Visit Live Site
                              <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          )}
                          {project.github && (
                            <>
                              <div className="h-4 w-[1px] bg-white/10" />
                              <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white/20 hover:text-primary transition-colors"
                              >
                                <Github size={20} />
                              </a>
                            </>
                          )}
                        </div>
                      </motion.div>

                      {/* Hardware Mockup Column */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                      >
                        {activeCategory === 'web' ? (
                          /* Monitor Mockup */
                          <div className="relative mx-auto w-full max-w-[600px] group/monitor h-fit">
                            {/* Screen Frame with realistic depth */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1a1a1a] border-[6px] md:border-[12px] border-[#181818] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                              <div className="absolute inset-0 bg-[#0a0a0a]/5 z-10 pointer-events-none group-hover/monitor:bg-transparent transition-all duration-500" />
                              <div className="relative w-full h-full bg-[#111]">
                                {/* Scrolling Image Logic */}
                                {project.screenshot ? (
                                  <motion.div 
                                    className="absolute left-0 w-full"
                                    initial={{ top: "0%", y: "0%" }}
                                    animate={{ top: "100%", y: "-100%" }}
                                    transition={{ 
                                      duration: 12, 
                                      ease: "easeInOut",
                                      repeat: Infinity,
                                      repeatType: "reverse",
                                      repeatDelay: 2
                                    }}
                                  >
                                    <Image 
                                      src={project.screenshot} 
                                      alt={project.title}
                                      width={600}
                                      height={2000}
                                      className="w-full h-auto object-top brightness-[1.1] contrast-[1.05]"
                                    />
                                  </motion.div>
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center opacity-10 flex flex-col items-center gap-4">
                                      <Monitor size={64} className="text-white" />
                                      <span className="text-xs font-bold uppercase tracking-widest text-white">Project View</span>
                                    </div>
                                  </div>
                                )}
                                {/* Realistic Glass Glare - Refined */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-white/[0.1] pointer-events-none z-20" />
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none z-20" />
                              </div>
                            </div>
                            {/* Monitor Stand */}
                            <div className="relative z-0">
                              <div className="w-28 h-6 bg-[#161616] mx-auto -mt-[2px] rounded-b-lg shadow-inner" />
                              <div className="w-40 h-2 bg-[#1b1b1b] mx-auto mt-1 rounded-full shadow-2xl" />
                            </div>
                          </div>
                        ) : (
                          /* iPhone Mockup */
                          <div className="relative mx-auto w-[280px] h-[580px] group/phone">
                            <div className="absolute inset-0 rounded-[50px] border-[12px] border-[#181818] bg-[#111] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                              {/* Notch */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#181818] rounded-b-3xl z-30 flex items-center justify-center">
                                <div className="w-12 h-1 bg-[#121212] rounded-full" />
                              </div>
                              {/* Content */}
                              <div className="relative w-full h-full">
                                <div className="absolute inset-0 bg-[#0a0a0a]/5 z-10 pointer-events-none group-hover/phone:bg-transparent transition-all duration-500" />
                                
                                {project.screenshot ? (
                                  <motion.div 
                                    className="absolute left-0 w-full"
                                    initial={{ top: "0%", y: "0%" }}
                                    animate={{ top: "100%", y: "-100%" }}
                                    transition={{ 
                                      duration: 14, 
                                      ease: "easeInOut",
                                      repeat: Infinity,
                                      repeatType: "reverse",
                                      repeatDelay: 2
                                    }}
                                  >
                                    <Image 
                                      src={project.screenshot} 
                                      alt={project.title}
                                      width={280}
                                      height={2000}
                                      className="w-full h-auto object-top brightness-[1.1] contrast-[1.05]"
                                    />
                                  </motion.div>
                                ) : project.screenshots ? (
                                  /* Horizontal Carousel for multiple screenshots */
                                  <div className="flex h-full w-full overflow-hidden">
                                    <motion.div 
                                      className="flex h-full"
                                      animate={{ x: [0, -((project.screenshots.length - 1) * 256)] }}
                                      transition={{ 
                                        duration: project.screenshots.length * 1.5, 
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                      }}
                                    >
                                      {project.screenshots.map((img, i) => (
                                        <div key={i} className="min-w-[256px] h-full relative">
                                          <Image 
                                            src={img} 
                                            alt={`${project.title} screen ${i}`}
                                            fill
                                            className="object-cover"
                                          />
                                        </div>
                                      ))}
                                    </motion.div>
                                  </div>
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center opacity-10 flex flex-col items-center gap-4">
                                      <Smartphone size={64} className="text-white" />
                                      <span className="text-xs font-bold uppercase tracking-widest text-white">App View</span>
                                    </div>
                                  </div>
                                )}
                                {/* Realistic Glass Glare */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-white/[0.1] pointer-events-none z-20" />
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>

                    </div>

                    {/* Emerald Divider Line - Matches Reference */}
                    <div className={`mt-24 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent max-w-4xl mx-auto`} />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Testing Notification Bubble */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-12 left-1/2 z-[100] px-6 py-4 bg-[#111] border border-primary/30 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl flex items-center gap-4 min-w-[320px] max-w-md"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Smartphone size={20} className="text-primary" />
            </div>
            <p className="text-[13px] text-white/80 leading-relaxed font-medium">
              {notification.msg}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
