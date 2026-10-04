"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Share, Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    id: "01",
    title: "Admin App",
    subtitle: "School Management",
    description:
      "Track enrollment, manage fees, and run HR and payroll from one dashboard. Detailed reports keep every decision backed by real data.",
    actions: [{ label: "Open Portal", icon: Share, primary: true }],
  },
  {
    id: "02",
    title: "Teacher App",
    subtitle: "Academic Control",
    description:
      "Mark attendance, generate exams, and share study material — PDFs, videos, and more — in a few taps. Stay connected with parents without leaving the app.",
    actions: [
      { label: "Open Portal", icon: Share },
      { label: "Download App", icon: Download, primary: true },
    ],
  },
  {
    id: "03",
    title: "Student App",
    subtitle: "Learning & Updates",
    description:
      "See attendance, fees, homework, and exam results in one place. Live bus tracking keeps you updated on pickup and arrival, in real time.",
    actions: [
      { label: "Open Portal", icon: Share },
      { label: "Download App", icon: Download, primary: true },
    ],
  },
  {
    id: "04",
    title: "Office App",
    subtitle: "Document & File Tracking",
    description:
      "Draft files digitally, then track their movement with a scannable QR code. Every desk logs a scan — so no file goes missing between departments.",
    actions: [{ label: "Open Portal", icon: Share }],
  },
  {
    id: "05",
    title: "Driver App",
    subtitle: "Learning & Updates",
    description:
      "Log in, get your route, and go. Live location sharing keeps parents and admins in sync on every pickup and drop-off.",
    actions: [{ label: "Open Portal", icon: Share }],
  },
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0); // First item active by default

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".product-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
        <h2 className="text-[56px] md:text-[64px] leading-[72.8px] md:leading-[83.2px] font-semibold font-switzer text-black">Our Products</h2>
        <p className="text-[#666666] text-[16px] leading-[19.2px] tracking-[-0.02em] font-satoshi max-w-[531px] md:mx-0 mx-auto">
          No more one-size-fits-all dashboards. Each portal is built for exactly what that role needs to get done.
        </p>
      </div>

      <div className="flex flex-col">
        {products.map((product, index) => {
          const isActive = hoveredIndex === index;

          return (
            <div
              key={product.id}
              className={`product-card grid grid-cols-1 md:grid-cols-[340px_1fr_auto] gap-6 md:gap-16 items-center p-6 md:p-8 rounded-[16px] transition-all duration-300 ease-in-out ${
                isActive ? "bg-[#397EE5] text-white" : "bg-transparent text-black border-b border-zinc-200"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div className="flex items-start md:items-center gap-6 md:gap-8 whitespace-nowrap">
                <span
                  className={`text-[36px] leading-[43.2px] font-switzer font-semibold ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {product.id}
                </span>
                
                <div className="flex flex-col">
                  <h3 className="text-2xl md:text-[36px] leading-[43.2px] font-switzer font-semibold">
                    {product.title}
                  </h3>
                  <p
                    className={`font-satoshi text-base mt-1 whitespace-normal ${
                      isActive ? "text-white/75" : "text-zinc-500"
                    }`}
                  >
                    {product.subtitle}
                  </p>
                </div>
              </div>

              <p
                className={`font-satoshi text-[16px] leading-[20.8px] max-w-[480px] ${
                  isActive ? "text-white/75" : "text-zinc-600/75"
                }`}
              >
                {product.description}
              </p>

              <div className="flex flex-row md:flex-col items-start md:items-center justify-start gap-3 w-[180px]">
                {product.actions.map((action, i) => {
                  const Icon = action.icon;
                  const isPrimary = action.primary;

                  return (
                    <button
                      key={i}
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full font-satoshi text-[14px] leading-[20px] font-medium transition-colors w-full ${
                        isActive
                          ? isPrimary
                            ? "bg-white text-black"
                            : "bg-transparent text-white border border-white"
                          : isPrimary
                          ? "bg-[#397EE5] text-white"
                          : "bg-transparent text-[#397EE5] border border-[#397EE5]"
                      }`}
                    >
                      <span>{action.label}</span>
                      <Icon className="w-[18px] h-[18px]" />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
