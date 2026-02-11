"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
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

  const navItems = ['About', 'Portfolio', 'Contact'];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 md:py-6 backdrop-blur-lg bg-background/20 border-b border-white/5"
        style={{ paddingLeft: 'var(--section-padding)', paddingRight: 'var(--section-padding)' }}
      >
        {/* Nav Items - Left (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-all relative group cursor-pointer"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Brand Logo - Centered on Mobile, Right on Desktop */}
        <div className="flex-1 flex items-center justify-between lg:justify-end gap-10">
          <div 
            onClick={(e) => handleScroll(e as unknown as React.MouseEvent<HTMLDivElement>, 'home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
        
            <div className="relative">
              <span className="text-2xl md:text-3xl font-pacifico text-white select-none">Dave</span>
              <span 
                className="absolute inset-0 text-2xl md:text-3xl font-pacifico text-primary select-none"
                style={{
                  clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)'
                }}
              >
                Dave
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="text-4xl font-black text-white/50 hover:text-primary transition-colors font-outfit uppercase tracking-tighter"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Bottom Mobile Footer Info */}
            <div className="absolute bottom-12 left-6 right-6 pt-8 border-t border-white/5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Get in touch</p>
              <a href="mailto:daeviz15felix@gmail.com" className="text-white/70 hover:text-white transition-colors block text-lg mb-2 truncate">daeviz15felix@gmail.com</a>
              <a href="tel:+2347044114163" className="text-white/70 hover:text-white transition-colors block text-lg">+234 704 411 4163</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
