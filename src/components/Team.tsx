"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(sectionRef);

      gsap.from(q(".team-header"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(q(".team-image"), {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(q(".team-member"), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[1296px] mx-auto py-16 md:py-24 px-4 flex flex-col items-center overflow-hidden"
    >
      <div className="team-header flex flex-col items-center text-center">
        <h2 className="font-switzer font-semibold text-[56px] md:text-[64px] leading-[72.8px] md:leading-[83.2px] text-black">
          Meet Our <span className="text-[#397EE5]">Founders</span>
        </h2>
        <p className="font-satoshi text-base text-[#666666] tracking-[-0.02em] leading-[19.2px] max-w-[650px]">
          Product, operations, and growth — the team building PaperBuddy from the ground up.
        </p>
      </div>

      <div className="relative mt-12 md:mt-8 w-full max-w-[664px] flex flex-col items-center">
        {/* Main Image */}
        <div className="team-image relative w-full aspect-[664/549]">
          <Image
            src="/images/team-photo.webp"
            alt="PaperBuddy Founders Team"
            fill
            className="object-contain"
          />
        </div>
        
        <svg className="absolute w-0 h-0">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
          </defs>
        </svg>

        {/* Desktop Absolute Labels */}
        <div className="absolute inset-0 hidden md:block">
           {/* Sachin */}
           <motion.div 
             whileHover={{ scale: 1.05 }}
             className="team-member absolute flex flex-col items-center gap-1 -left-[160px] top-[220px] w-[240px]"
           >
              <h3 className="font-satoshi font-bold text-2xl text-[#397EE5] leading-[28.8px]">Sachin</h3>
              <p className="font-satoshi text-base text-black/75 leading-[17.6px] text-center">Co-Founder & Head of Operations</p>
              <p className="font-satoshi text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Keeps everything running behind the scenes )
              </p>
           </motion.div>
           <svg className="absolute -left-[20px] top-[140px] pointer-events-none" width="160" height="100" overflow="visible">
             <path d="M 140 20 Q 70 -30 0 80" fill="none" stroke="black" strokeWidth="1" markerEnd="url(#arrow)"/>
           </svg>

           {/* Shashi Kant */}
           <motion.div 
             whileHover={{ scale: 1.05 }}
             className="team-member absolute flex flex-col items-center gap-1 left-[231px] -top-[20px] w-[250px]"
           >
              <h3 className="font-satoshi font-bold text-2xl text-[#397EE5] leading-[28.8px]">Shashi Kant</h3>
              <p className="font-satoshi text-base text-black/75 leading-[17.6px] text-center">Founder & Head of Product</p>
              <p className="font-satoshi text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Leads product direction and roadmap )
              </p>
           </motion.div>
           <svg className="absolute left-[350px] pointer-events-none" width="100" height="120" overflow="visible">
             <path d="M 30 0 Q 70 50 10 110" fill="none" stroke="black" strokeWidth="1" markerEnd="url(#arrow)"/>
           </svg>

           {/* Vikash Kumar */}
           <motion.div 
             whileHover={{ scale: 1.05 }}
             className="team-member absolute flex flex-col items-center gap-1 left-[640px] top-[230px] w-[253px]"
           >
              <h3 className="font-satoshi font-bold text-2xl text-[#397EE5] leading-[28.8px]">Vikash Kumar</h3>
              <p className="font-satoshi text-base text-black/75 leading-[17.6px] text-center">Co-Founder & Head of Marketing</p>
              <p className="font-satoshi text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Builds PaperBuddy&apos;s presence and partnerships )
              </p>
           </motion.div>
           <svg className="absolute left-[550px] top-[160px] pointer-events-none" width="160" height="100" overflow="visible">
             <path d="M 0 50 Q 80 -10 150 70" fill="none" stroke="black" strokeWidth="1" markerEnd="url(#arrow)"/>
           </svg>
        </div>

        {/* Mobile View Stacked Labels */}
        <div className="flex md:hidden flex-col gap-8 mt-10 w-full px-4">
            <motion.div className="team-member flex flex-col items-center gap-1">
              <h3 className="font-satoshi font-bold text-2xl text-[#397EE5] leading-[28.8px]">Shashi Kant</h3>
              <p className="font-satoshi text-base text-black/75 leading-[17.6px] text-center">Founder & Head of Product</p>
              <p className="font-satoshi text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Leads product direction and roadmap )
              </p>
            </motion.div>
            <motion.div className="team-member flex flex-col items-center gap-1">
              <h3 className="font-satoshi font-bold text-2xl text-[#397EE5] leading-[28.8px]">Vikash Kumar</h3>
              <p className="font-satoshi text-base text-black/75 leading-[17.6px] text-center">Co-Founder & Head of Marketing</p>
              <p className="font-satoshi text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Builds PaperBuddy&apos;s presence and partnerships )
              </p>
            </motion.div>
            <motion.div className="team-member flex flex-col items-center gap-1">
              <h3 className="font-satoshi font-bold text-2xl text-[#397EE5] leading-[28.8px]">Sachin</h3>
              <p className="font-satoshi text-base text-black/75 leading-[17.6px] text-center">Co-Founder & Head of Operations</p>
              <p className="font-satoshi text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Keeps everything running behind the scenes )
              </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
