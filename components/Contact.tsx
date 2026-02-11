"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Send,
  Cpu,
  Waves,
  ArrowDownToLine
} from "lucide-react";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiFlutter, SiTailwindcss, SiNodedotjs, SiSupabase, 
  SiFirebase, SiDart, SiFastapi
} from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Flutter", icon: SiFlutter },
  { name: "Supabase", icon: SiSupabase },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Gemini AI", icon: Cpu },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Firebase", icon: SiFirebase },
];

const Contact = () => {
  // Duplicate skills for seamless loop
  const marqueeSkills = [...skills, ...skills, ...skills];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="relative bg-[#0a0a0a] pt-36 overflow-hidden">
      {/* Elegant Curved Section Divider - Consistent across site */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -translate-y-[1px]">
        <svg 
          className="relative block w-full h-[80px] md:h-[120px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Main curved shape with gradient */}
          <defs>
            <linearGradient id="curveGradientContact" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.05" />
              <stop offset="30%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="glowGradientContact" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Subtle glow behind the curve */}
          <path 
            d="M0,60 C300,100 600,20 900,80 C1050,100 1150,60 1200,40 L1200,0 L0,0 Z" 
            fill="url(#glowGradientContact)"
          />
          {/* Main elegant curve line */}
          <path 
            d="M0,80 Q300,120 600,60 T1200,80" 
            fill="none" 
            stroke="url(#curveGradientContact)" 
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Secondary subtle curve for depth */}
          <path 
            d="M0,85 Q300,125 600,65 T1200,85" 
            fill="none" 
            stroke="url(#curveGradientContact)" 
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
      </div>
      {/* 1. Scrolling Skills Marquee */}
      <div className="bg-primary w-full py-2.5 md:py-4 overflow-hidden flex whitespace-nowrap border-y border-black/10">
        <motion.div 
          className="flex gap-8 md:gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {marqueeSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={i} className="flex items-center gap-3 md:gap-4 text-black font-black uppercase tracking-tighter text-base md:text-xl font-outfit">
                <Icon size={16} className="md:size-[18px]" />
                <span>{skill.name}</span>
                <span className="text-black/30 ml-2 md:ml-4">*</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="w-full mt-24" style={{ paddingLeft: 'var(--section-padding)', paddingRight: 'var(--section-padding)' }}>
        {/* 2. "Let's Connect" Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-16 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-start lg:text-left"
          >
            <h2 className="text-[2.5rem] leading-[1.1] md:text-7xl font-black text-white font-outfit uppercase tracking-tighter">
              Let&apos;s <span className="text-primary tracking-tighter">Connect</span> <br className="hidden md:block" />here
            </h2>
          </motion.div>
          
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <motion.a
              href="https://wa.me/2347044114163?text=Hello%20David%2C%20I&apos;m%20interested%20in%20discussing%20a%20potential%20project%20collaboration.%20I&apos;d%20love%20to%20chat%20more%20about%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-black uppercase text-sm tracking-widest rounded-full hover:bg-white transition-colors font-outfit shadow-[0_0_20px_rgba(16,185,129,0.3)] inline-flex items-center justify-center gap-3"
            >
              Hire Me Now
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="group flex items-center justify-center sm:justify-end gap-3 text-muted/60 hover:text-primary transition-colors pr-2"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Download CV</span>
              <ArrowDownToLine size={16} className="group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* 3. Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
          {/* Logo & Info */}
          <div className="space-y-8">
            <div 
              onClick={(e) => handleScroll(e, 'home')}
              className="flex items-center gap-4 group cursor-pointer w-fit"
            >
              <div className="relative">
                <span className="text-4xl font-pacifico text-white select-none">Dave</span>
                <span 
                  className="absolute inset-0 text-4xl font-pacifico text-primary select-none"
                  style={{
                    clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)'
                  }}
                >
                  Dave
                </span>
              </div>
            </div>
            <p className="text-muted/60 text-sm leading-relaxed max-w-xs">
              Crafting high-end digital experiences with a focus on performance, aesthetics, and user-centric design.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/Daeviz15/" },
                { icon: <FaWhatsapp size={20} />, href: "https://wa.me/2347044114163?text=Hello%20David%2C%20I'm%20interested%20in%20your%20services!" },
                { icon: <Twitter size={20} />, href: "https://x.com/IAMLegendI5" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-full text-white/50 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {['About', 'Portfolio', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="text-muted/60 hover:text-primary text-sm transition-colors w-fit cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">Contact</h4>
            <div className="space-y-6">
              <a href="tel:+2347044114163" className="flex items-center gap-4 group">
                <span className="text-muted/60 text-sm group-hover:text-white transition-colors">+234 704 411 4163</span>
              </a>
              <a href="mailto:daeviz15felix@gmail.com" className="flex items-center gap-4 group">
                <span className="text-muted/60 text-sm group-hover:text-white transition-colors">daeviz15felix@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <span className="text-muted/60 text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="space-y-8">
            <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">Get latest info</h4>
            <div className="relative group/input">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white placeholder:text-muted/30 focus:outline-none focus:border-primary/50 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square bg-primary text-black rounded-xl flex items-center justify-center hover:scale-105 transition-transform">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 4. Copyright Bar */}
        <div className="border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted/40 text-[10px] md:text-[11px] font-medium tracking-wider text-center md:text-left">
            Copyright © {new Date().getFullYear()} David Felix. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="text-muted/40 hover:text-white text-[10px] md:text-[11px] font-medium tracking-wider transition-colors">Terms & Conditions</a>
            <a href="#" className="text-muted/40 hover:text-white text-[10px] md:text-[11px] font-medium tracking-wider transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Extreme Bottom Bar Accent */}
      <div className="h-1 bg-primary w-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
    </footer>
  );
};

export default Contact;
