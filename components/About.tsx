"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Globe, Smartphone, Layout, Server, Wrench, Palette } from 'lucide-react';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiFlutter, SiTailwindcss, SiNodedotjs, SiFastapi, 
  SiFirebase, SiGit, SiFigma, SiVercel, SiDart 
} from 'react-icons/si';

type Tab = 'skills' | 'experience' | 'education' | 'contact';

const About = () => {
  const [activeTab, setActiveTab] = useState<Tab>('skills');

  const tabs = [
    { id: 'skills' as Tab, label: 'Main Skills' },
    { id: 'experience' as Tab, label: 'Experience' },
    { id: 'education' as Tab, label: 'Education & Certification' },
    { id: 'contact' as Tab, label: 'Contact' },
  ];

  const skillCategories = [
    { 
      icon: Smartphone, 
      name: 'Mobile', 
      skills: ['Flutter', 'Dart', 'React Native'] 
    },
    { 
      icon: Layout, 
      name: 'Frontend', 
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind'] 
    },
    { 
      icon: Server, 
      name: 'Backend', 
      skills: ['FastAPI', 'Node.js', 'REST APIs'] 
    },
    { 
      icon: Wrench, 
      name: 'Tools', 
      skills: ['Git', 'Vercel', 'Firebase', 'Figma'] 
    },
    { 
      icon: Palette, 
      name: 'Design', 
      skills: ['UI/UX', 'Prototyping'] 
    },
  ];

  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'New Label',
      period: '2025 – Present',
      highlight: '40% faster dev cycles',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Selsource Ltd',
      period: '2024 – 2025',
      highlight: '10,000+ users served',
    },
  ];

  const techStack = [
    { name: 'Typescript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Figma', icon: SiFigma },
  ];


  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={16} className="text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">{cat.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-primary/10 text-primary/80 rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-5 border border-white/5">
                <p className="text-primary text-xs font-bold uppercase tracking-wider">{exp.company}</p>
                <h4 className="text-white font-semibold mt-1">{exp.role}</h4>
                <p className="text-muted/40 text-xs mt-1">{exp.period}</p>
                <div className="mt-3 pt-3 border-t border-white/5">
                  <span className="text-xs text-primary/70 font-medium">✦ {exp.highlight}</span>
                </div>
              </div>
            ))}
          </motion.div>
        );

      case 'education':
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="bg-white/5 rounded-lg p-5 border border-white/5">
              <p className="text-primary text-xs font-bold uppercase tracking-wider">Degree</p>
              <h4 className="text-white font-semibold mt-1">B.Sc Computer Science</h4>
              <p className="text-muted/50 text-xs mt-1">Federal University of Otuoke • 2020–2024</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-5 border border-primary/20">
              <p className="text-primary text-xs font-bold uppercase tracking-wider">Certification</p>
              <h4 className="text-white font-semibold mt-1">Flutter/Dart Developer</h4>
              <p className="text-muted/50 text-xs mt-1">Certified Professional</p>
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <a href="mailto:deaviz15felix@gmail.com" className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-primary/30 transition-colors flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-muted/40 uppercase tracking-wider">Email</p>
                <p className="text-sm text-white font-medium truncate">deaviz15felix@gmail.com</p>
              </div>
            </a>
            <a href="#" className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-primary/30 transition-colors flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Globe size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted/40 uppercase tracking-wider">Portfolio</p>
                <p className="text-sm text-white font-medium">View Work</p>
              </div>
            </a>
            <div className="bg-white/5 rounded-lg p-4 border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-muted/40 uppercase tracking-wider">Location</p>
                <p className="text-sm text-white font-medium">Yenagoa, Bayelsa State, Nigeria</p>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-20 md:py-28 bg-[#0a0a0a]" style={{ paddingLeft: 'var(--section-padding)', paddingRight: 'var(--section-padding)' }}>
      {/* Elegant Curved Section Divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -translate-y-[1px]">
        <svg 
          className="relative block w-full h-[80px] md:h-[120px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Main curved shape with gradient */}
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.05" />
              <stop offset="30%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Subtle glow behind the curve */}
          <path 
            d="M0,60 C300,100 600,20 900,80 C1050,100 1150,60 1200,40 L1200,0 L0,0 Z" 
            fill="url(#glowGradient)"
          />
          {/* Main elegant curve line */}
          <path 
            d="M0,80 Q300,120 600,60 T1200,80" 
            fill="none" 
            stroke="url(#curveGradient)" 
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Secondary subtle curve for depth */}
          <path 
            d="M0,85 Q300,125 600,65 T1200,85" 
            fill="none" 
            stroke="url(#curveGradient)" 
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Background atmospheric glows */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[120px] -z-10" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Header */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-outfit">
              About Me
            </h2>
            <p className="text-muted/50 mt-3 leading-relaxed text-sm max-w-md">
              Full-Stack Developer specializing in <span className="text-primary">mobile</span> and <span className="text-primary">web</span> applications. Certified Flutter developer delivering scalable, high-performance solutions.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto lg:flex-wrap gap-x-6 gap-y-2 border-b border-white/10 pb-3 no-scrollbar scroll-smooth">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative text-[10px] md:text-[11px] font-bold uppercase tracking-widest pb-3 transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? 'text-primary' : 'text-muted/30 hover:text-muted/60'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Column - Image with Professional Blending */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center"
        >
          {/* Multi-layered atmospheric glow - very subtle spread */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, rgba(16,185,129,0.015) 50%, transparent 80%)'
            }}
          />
          <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}
          />
          
          {/* Image Container with Smooth Edge Blending */}
          <div 
            className="relative w-full h-full"
            style={{
              maskImage: `
                radial-gradient(ellipse 80% 90% at 50% 45%, black 40%, transparent 75%)
              `,
              WebkitMaskImage: `
                radial-gradient(ellipse 80% 90% at 50% 45%, black 40%, transparent 75%)
              `,
            }}
          >
            <Image
              src="/about.png"
              alt="David Felix"
              fill
              className="object-cover object-top filter grayscale brightness-[0.75] contrast-[1.0] sepia-[0.05] hue-rotate-[110deg] saturate-[0.8]"
            />
            
            {/* Very subtle radial emerald wash - spread wide */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 150% 120% at 50% 40%, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0.02) 40%, transparent 70%)',
                mixBlendMode: 'screen'
              }}
            />
            
            {/* Very subtle color tint */}
            <div className="absolute inset-0 bg-primary/[0.015] mix-blend-color pointer-events-none" />
            
            {/* Dark overlay to dim and soak into background */}
            <div className="absolute inset-0 bg-[#0a0a0a]/30 pointer-events-none" />
            
            {/* Stronger gradient integration to background */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 130% 110% at 50% 100%, #0a0a0a 0%, transparent 55%),
                  radial-gradient(ellipse 120% 70% at 50% 0%, rgba(10,10,10,0.7) 0%, transparent 45%),
                  radial-gradient(ellipse 60% 100% at 0% 50%, #0a0a0a 0%, transparent 40%),
                  radial-gradient(ellipse 60% 100% at 100% 50%, #0a0a0a 0%, transparent 40%)
                `
              }}
            />
          </div>
        </motion.div>
      </div>
      {/* Skills Bar - Integrated Below Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full mt-4 md:mt-10 flex flex-col items-center justify-center space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-8 bg-primary/20" />
          <h3 className="text-primary text-[9px] font-bold uppercase tracking-[0.5em] opacity-80">My Skills</h3>
          <div className="h-[1px] w-8 bg-primary/20" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-10 gap-y-5 md:gap-y-6 max-w-5xl">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={idx} className="group flex flex-col items-center space-y-2.5">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                  <Icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-all duration-300" />
                </div>
                <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 group-hover:text-primary/60 transition-all duration-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
