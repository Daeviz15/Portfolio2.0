"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Github, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 lg:items-stretch pt-28 md:pt-36 lg:pt-20 overflow-hidden bg-[#0a0a0a]"
      style={{ paddingLeft: 'var(--section-padding)', paddingRight: 'var(--section-padding)' }}
    >
      {/* Background decoration - subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      {/* ── BIO BLOCK ── Top on mobile, Top-Right on desktop */}
      <div className="order-1 lg:col-start-2 lg:row-start-1 flex flex-col justify-end gap-2 lg:pl-8 xl:pl-12 lg:pb-4">
        {/* "Hello." Water Splash Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex items-baseline group"
        >
          <div className="relative">
            <h1 className="text-[clamp(3.5rem,12vw,10rem)] font-bold tracking-[-0.07em] text-white leading-[0.8]">
              Hello
            </h1>
            <motion.div
              initial={{ height: "0%", opacity: 0 }}
              animate={{
                height: "50%",
                opacity: 1,
                clipPath: [
                  "polygon(0% 20%, 15% 15%, 30% 25%, 45% 15%, 60% 25%, 75% 15%, 90% 25%, 100% 20%, 100% 100%, 0% 100%)",
                  "polygon(0% 25%, 15% 20%, 30% 15%, 45% 25%, 60% 15%, 75% 25%, 90% 15%, 100% 20%, 100% 100%, 0% 100%)",
                  "polygon(0% 20%, 15% 15%, 30% 25%, 45% 15%, 60% 25%, 75% 15%, 90% 25%, 100% 20%, 100% 100%, 0% 100%)"
                ]
              }}
              transition={{
                height: { delay: 2, duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { delay: 2, duration: 0.5 },
                clipPath: {
                  delay: 2,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute bottom-0 left-0 right-0 overflow-hidden select-none pointer-events-none"
            >
              <h1 className="text-[clamp(3.5rem,12vw,10rem)] font-bold tracking-[-0.07em] text-primary leading-[0.8] absolute bottom-0 left-0 w-full">
                Hello
              </h1>
            </motion.div>
          </div>
          <span className="w-2 h-2 sm:w-3 sm:h-3 lg:w-5 lg:h-5 bg-primary rounded-full ml-[-0.05em] mb-2 sm:mb-4"></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 md:gap-4 mt-2"
        >
          <div className="h-[2px] w-8 md:w-12 bg-primary/60" />
          <h2 className="text-[clamp(1.25rem,5vw,3rem)] font-black text-white tracking-tight font-outfit">I&apos;m David Felix</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-lg md:text-xl text-muted/60 max-w-md font-medium leading-relaxed mt-2"
        >
          Professional Full Stack & Multi-platform Developer
        </motion.p>
      </div>

      {/* ── IMAGE COLUMN ── Middle on mobile, Left on desktop */}
      <div className="order-2 lg:col-start-1 lg:row-span-2 relative flex items-end justify-center lg:justify-start mt-2 lg:mt-0">
        {/* Ambient glow behind image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px] bg-primary/5 rounded-full blur-[60px] md:blur-[120px] -z-10" />

        <div className="relative w-full h-[350px] sm:h-[480px] md:h-[550px] lg:h-full max-w-sm sm:max-w-lg lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative w-full h-full overflow-visible"
            style={{
              maskImage: `
                radial-gradient(ellipse 70% 90% at 50% 50%, black 30%, transparent 100%),
                linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%),
                linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)
              `,
              maskComposite: 'intersect',
              WebkitMaskImage: `
                radial-gradient(ellipse 70% 90% at 50% 50%, black 30%, transparent 100%),
                linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%),
                linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)
              `,
              WebkitMaskComposite: 'source-in',
            }}
          >
            <Image
              src="/hero.png"
              alt="David Felix"
              fill
              sizes="(max-width: 640px) 350px, (max-width: 768px) 480px, (max-width: 1024px) 550px, 50vw"
              className="object-contain object-bottom filter grayscale brightness-[1.1] contrast-[1.1] sepia-[0.1] hue-rotate-[110deg] saturate-[1.2] drop-shadow-[0_0_80px_rgba(16,185,129,0.15)] scale-110 lg:scale-[1.35] transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-color pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/[0.1] via-primary/[0.05] to-transparent mix-blend-screen pointer-events-none opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* ── ACTION BLOCK ── Bottom on mobile, Bottom-Right on desktop */}
      <div className="order-3 lg:col-start-2 lg:row-start-2 flex flex-col items-center lg:items-start justify-start gap-5 lg:pl-8 xl:pl-12 lg:pt-4 z-10 -mt-4 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-fit"
        >
          <motion.a
            href="/myresume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-center sm:justify-start gap-4 bg-primary/10 border border-primary/20 backdrop-blur-md text-white px-5 py-3 md:py-4 rounded-md font-bold tracking-wide transition-all hover:bg-primary/20 hover:border-primary/40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDownToLine size={18} className="md:size-[22px] text-primary" />
            </motion.div>
            <span className="relative z-10 text-xs md:text-base">Download CV</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-4 md:gap-6"
        >
          <div className="h-[1px] w-8 md:w-12 bg-white/20" />
          <div className="flex gap-4 md:gap-5 text-muted/50">
            <a href="https://github.com/Daeviz15/" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="hover:text-primary transition-colors cursor-pointer" />
            </a>
            <a href="https://x.com/IAMLegendI5" target="_blank" rel="noopener noreferrer">
              <Twitter size={18} className="hover:text-primary transition-colors cursor-pointer" />
            </a>
            <a href="https://wa.me/2347044114163" target="_blank" rel="noopener noreferrer">
              <div className="hover:text-primary transition-colors cursor-pointer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
