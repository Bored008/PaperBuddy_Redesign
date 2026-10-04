"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Complete School Management Platform",
  "Admin, Teacher, Student & Parent Portals",
  "AI Question Paper & Quiz Generator",
  "Attendance, Fees & Academics",
  "Free Data Migration & Onboarding"
];

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
      <div className="flex flex-col max-w-2xl">
        <div className="bg-gray-100 rounded-full px-4 py-1 w-fit mb-6">
          <span className="text-xs font-medium text-black uppercase tracking-wider font-inter">Pricing</span>
        </div>
        <h2 className="text-[56px] md:text-[64px] leading-[72.8px] md:leading-[83.2px] font-semibold text-black mb-6 font-switzer">
          Our Pricing
        </h2>
        <p className="text-gray-500 text-base max-w-md">
          Everything from administration and academics to AI-powered tools, all for one simple monthly price.
        </p>
      </div>

      <motion.div 
        ref={containerRef}
        whileHover={{ y: -5 }}
        className="bg-black text-white rounded-3xl p-10 w-full max-w-md border border-neutral-800 flex flex-col gap-8 shadow-2xl"
      >
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold font-inter">Standard</h3>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-semibold font-switzer">₹10</span>
            <span className="text-sm text-gray-400 mb-1">per student / month</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-0.5">
                <Check className="w-5 h-5 text-gray-400" />
              </div>
              <span className="text-gray-300 text-base">{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-white text-black font-semibold rounded-xl py-3 mt-4 hover:bg-gray-100 transition-colors">
          Get started
        </button>
      </motion.div>
    </section>
  );
};

export default Pricing;
