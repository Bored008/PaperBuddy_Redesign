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
      className="w-full max-w-[1296px] mx-auto py-16 md:py-24 px-4 flex flex-col items-center gap-8 overflow-hidden"
    >
      <div className="team-header flex flex-col items-center gap-3 text-center">
        <h2 className="font-['Switzer'] font-semibold text-[56px] md:text-[64px] leading-[72.8px] md:leading-[83.2px] text-black">
          Meet Our <span className="text-[#397EE5]">Founders</span>
        </h2>
        <p className="font-['Satoshi'] text-base text-[#666666] tracking-[-0.02em] leading-[19.2px] max-w-[600px]">
          Product, operations, and growth — the team building PaperBuddy from the ground up.
        </p>
      </div>

      <div className="relative mt-12 md:mt-24 w-full max-w-[664px] flex flex-col items-center">
        {/* Main Image */}
        <div className="team-image relative w-full aspect-[664/549] rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src="/images/team-photo.webp"
            alt="PaperBuddy Founders Team"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Desktop Absolute Labels */}
        <div className="absolute inset-0 hidden md:block">
           {/* Shashi Kant */}
           <motion.div 
             whileHover={{ scale: 1.05 }}
             className="team-member absolute flex flex-col items-center gap-1 -left-32 top-16 w-[201px]"
           >
              <h3 className="font-['Satoshi'] font-bold text-2xl text-[#397EE5] leading-[28.8px]">Shashi Kant</h3>
              <p className="font-['Satoshi'] text-base text-black/75 leading-[17.6px] text-center">Founder & Head of Product</p>
              <p className="font-['Satoshi'] text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Leads product direction and roadmap )
              </p>
           </motion.div>

           {/* Vikash Kumar */}
           <motion.div 
             whileHover={{ scale: 1.05 }}
             className="team-member absolute flex flex-col items-center gap-1 -right-40 top-[180px] w-[253px]"
           >
              <h3 className="font-['Satoshi'] font-bold text-2xl text-[#397EE5] leading-[28.8px]">Vikash Kumar</h3>
              <p className="font-['Satoshi'] text-base text-black/75 leading-[17.6px] text-center">Co-Founder & Head of Marketing</p>
              <p className="font-['Satoshi'] text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Builds PaperBuddy&apos;s presence and partnerships )
              </p>
           </motion.div>

           {/* Sachin */}
           <motion.div 
             whileHover={{ scale: 1.05 }}
             className="team-member absolute flex flex-col items-center gap-1 -left-8 -bottom-16 w-[240px]"
           >
              <h3 className="font-['Satoshi'] font-bold text-2xl text-[#397EE5] leading-[28.8px]">Sachin</h3>
              <p className="font-['Satoshi'] text-base text-black/75 leading-[17.6px] text-center">Co-Founder & Head of Operations</p>
              <p className="font-['Satoshi'] text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Keeps everything running behind the scenes )
              </p>
           </motion.div>
        </div>

        {/* Mobile View Stacked Labels */}
        <div className="flex md:hidden flex-col gap-8 mt-10 w-full px-4">
            <motion.div className="team-member flex flex-col items-center gap-1">
              <h3 className="font-['Satoshi'] font-bold text-2xl text-[#397EE5] leading-[28.8px]">Shashi Kant</h3>
              <p className="font-['Satoshi'] text-base text-black/75 leading-[17.6px] text-center">Founder & Head of Product</p>
              <p className="font-['Satoshi'] text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Leads product direction and roadmap )
              </p>
            </motion.div>
            <motion.div className="team-member flex flex-col items-center gap-1">
              <h3 className="font-['Satoshi'] font-bold text-2xl text-[#397EE5] leading-[28.8px]">Vikash Kumar</h3>
              <p className="font-['Satoshi'] text-base text-black/75 leading-[17.6px] text-center">Co-Founder & Head of Marketing</p>
              <p className="font-['Satoshi'] text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Builds PaperBuddy&apos;s presence and partnerships )
              </p>
            </motion.div>
            <motion.div className="team-member flex flex-col items-center gap-1">
              <h3 className="font-['Satoshi'] font-bold text-2xl text-[#397EE5] leading-[28.8px]">Sachin</h3>
              <p className="font-['Satoshi'] text-base text-black/75 leading-[17.6px] text-center">Co-Founder & Head of Operations</p>
              <p className="font-['Satoshi'] text-xs text-[#666666] tracking-[-0.02em] leading-[14.4px] text-center mt-1">
                ( Keeps everything running behind the scenes )
              </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
