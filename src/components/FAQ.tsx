"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const faqs = [
  {
    question: "What is PaperBuddy?",
    answer: "PaperBuddy is one connected platform for Admins, Teachers, Students, Drivers, and Office staff — attendance, fees, exams, and transport, all in sync."
  },
  {
    question: "Who is PaperBuddy built for?",
    answer: "PaperBuddy is built for schools and educational institutions, providing tailored portals for Admins, Teachers, Students, Parents, Office Staff, and Drivers."
  },
  {
    question: "How much does PaperBuddy cost?",
    answer: "Starting at just ₹10 per student, per month."
  },
  {
    question: "What's included in the price? Do I need to pay separately for each app?",
    answer: "Everything from administration and academics to AI-powered tools, all for one simple monthly price. You do not need to pay separately for each app."
  },
  {
    question: "What is the Hybrid File Tracking System?",
    answer: "Draft files digitally, then track their movement with a scannable QR code. Every desk logs a scan — so no file goes missing between departments."
  },
  {
    question: "Does PaperBuddy track school transport?",
    answer: "Yes, it tracks school transport. Log in, get your route, and go. Live location sharing keeps parents and admins in sync on every pickup and drop-off."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }

      if (itemsRef.current.length > 0) {
        gsap.from(itemsRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-[1296px] mx-auto py-24 px-4 lg:px-0 flex flex-col gap-8 mb-32">
      <div className="flex justify-between items-end" ref={headingRef}>
        <div className="flex items-end gap-3">
          <h2 className="text-[56px] md:text-[64px] leading-[72.8px] md:leading-[51.2px] font-semibold font-switzer text-[#000000]">FAQ</h2>
          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
             <path d="M5 30L30 5M5 5L30 30" stroke="#000000" strokeWidth="5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-[#71717B] text-sm">Got questions?</p>
          <p className="text-[#71717B] text-sm">Say less, we&apos;ve got answers!</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            ref={(el) => { itemsRef.current[index] = el }}
            className={`rounded-2xl p-8 cursor-pointer transition-colors duration-300 ${
              openIndex === index ? "bg-[#397EE5]" : "bg-[#EDEDED]"
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-start gap-4">
              <h3 className={`text-[32px] leading-[38.4px] font-normal font-satoshi flex-1 transition-colors duration-300 ${
                openIndex === index ? "text-white" : "text-[#000000]"
              }`}>
                {faq.question}
              </h3>
              <div className={`flex items-center justify-center min-w-[38px] h-[38px] transition-colors duration-300 ${
                openIndex === index ? "text-white" : "text-[#09090B]"
              }`}>
                {openIndex === index ? (
                  <Minus className="w-8 h-8" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-8 h-8" strokeWidth={1.5} />
                )}
              </div>
            </div>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-white/90 text-[18px] leading-[24.81px] font-satoshi font-medium pr-12">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
