'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex justify-center py-20 lg:py-32 overflow-hidden">
      <div className="relative w-full max-w-[1296px] mx-auto px-4 md:px-8 xl:px-0 flex flex-col lg:block lg:min-h-[635px]">
        
        {/* Video / Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full lg:absolute lg:left-[407px] lg:top-[-155px] lg:w-[966px] lg:h-[679px] order-2 lg:order-none z-0 mt-12 lg:mt-0"
        >
          <div className="relative w-full aspect-video lg:aspect-auto lg:w-[829px] lg:h-[612px] lg:ml-[97px] lg:mt-[27px] overflow-hidden">
            <video 
              src="/images/paperBuddy.mp4" 
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover mix-blend-multiply brightness-[1.05] contrast-[1.05]"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col lg:justify-start lg:pt-45 gap-[18px] lg:w-[604px] lg:h-[635px] order-1 lg:order-none pointer-events-none">
          <div className="flex flex-col gap-[18px] pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-[12px]"
            >
              <h1 className="text-[52px] tracking-[0.0019em] md:text-[64px] md:tracking-[0.0016em] lg:text-[92px] lg:tracking-[0.0011em] leading-[1.1] font-[family-name:var(--font-instrument-serif)] italic text-black">
                Less Paperwork.<br />
                <span className="text-[#397EE5] font-[family-name:var(--font-oswald)] font-semibold not-italic">Better Teaching.</span>
              </h1>
              <p className="text-black/75 text-[14px] leading-[18.2px] md:text-[16px] md:leading-[22.4px] lg:leading-[20.8px] max-w-[605px] font-sans">
                One connected platform for Admins, Teachers, Students, Drivers, and Office staff — attendance, fees, exams, and transport, all in sync. Starting at just ₹10 per student, per month.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-row items-center gap-[12px]"
            >
              <button className="flex items-center justify-center gap-[8px] bg-black text-white px-5 py-2 h-[36px] rounded-full text-[14px] font-medium transition-transform hover:scale-105">
                <span>Book A Demo</span>
                <ArrowUpRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-[8px] bg-transparent text-[#397EE5] border border-[#397EE5] px-5 py-2 h-[36px] rounded-full text-[14px] font-medium transition-transform hover:scale-105">
                <Download size={18} />
                <span>Student App</span>
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
