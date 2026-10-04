"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
      
      gsap.fromTo(
        ".feature-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center py-16 px-4 md:px-8 w-full"
    >
      <div className="flex flex-col w-full max-w-[1296px] gap-8">
        {/* Header */}
        <div className="feature-header flex flex-col items-center gap-2 text-center">
          <h2 className="font-switzer font-semibold text-[56px] md:text-[64px] leading-[72.8px] md:leading-[83.2px] text-[#000000]">
            Features
          </h2>
          <p className="font-satoshi font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-[#666666] max-w-[600px]">
            AI question papers, live attendance tracking, and automated alerts —
            the tools that set PaperBuddy apart.
          </p>
        </div>

        {/* Grid Container */}
        <div className="flex flex-col gap-3 w-full">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row gap-3 lg:h-[358px]">
            {/* Card 1: Physical Movement Tracking */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="feature-card flex flex-col bg-white border border-[#E4E4E7] rounded-[24px] w-full lg:w-[427.67px] h-[358px] overflow-hidden relative"
            >
              <div className="p-6 flex flex-col z-10">
                <h3 className="font-satoshi font-medium text-[18.61px] leading-[24.81px] text-[#09090B]">
                  Physical Movement Tracking
                </h3>
                <p className="font-satoshi font-normal text-[12px] leading-[15.64px] text-[#71717B] mt-2 max-w-[90%]">
                  Every desk scans the QR when receiving or forwarding the
                  physical file.
                </p>
              </div>
              <div className="absolute bottom-0 w-full h-[206px]">
                <Image
                  src="/images/feature-movement.svg"
                  alt="Movement Tracking"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Middle Column (Card 2 & 3) */}
            <div className="flex flex-col gap-3 w-full lg:w-[427.67px] h-[358px]">
              {/* Card 2: Built for Collaboration */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="feature-card flex flex-col bg-white border border-[#E4E4E7] rounded-[24px] p-6 h-[171px] justify-center"
              >
                <div className="relative w-[119px] h-[42px] mb-3">
                  <Image
                    src="/images/feature-collab.svg"
                    alt="Collaboration"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="font-satoshi font-medium text-[18.61px] leading-[24.81px] text-[#09090B]">
                  Built for Collaboration
                </h3>
                <p className="font-satoshi font-normal text-[12px] leading-[15.64px] text-[#71717B] mt-1">
                  Real-time teamwork made simple with synced changes and smart
                  user roles across Teachers, Students, Admin, Drivers .
                </p>
              </motion.div>

              {/* Card 3: Digital File Drafting */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="feature-card flex flex-col bg-white border border-[#E4E4E7] rounded-[24px] p-6 h-[175px] justify-center"
              >
                {/* Simulated Avatars */}
                <div className="flex flex-row -space-x-3 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-[38px] h-[38px] rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  ))}
                </div>
                <h3 className="font-satoshi font-medium text-[18.61px] leading-[24.81px] text-[#09090B]">
                  Digital File Drafting and Sharable
                </h3>
                <p className="font-satoshi font-normal text-[12px] leading-[15.64px] text-[#71717B] mt-1">
                  Clerks create files digitally. University letterhead and
                  reference numbers are automatically generated.
                </p>
              </motion.div>
            </div>

            {/* Card 4: Instant QR Generation */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="feature-card flex flex-col bg-white border border-[#E4E4E7] rounded-[24px] p-6 w-full lg:w-[419.13px] h-[358px] items-center text-center justify-center"
            >
              <div className="relative w-[221px] h-[221px] mb-4">
                <Image
                  src="/images/feature-qr.webp"
                  alt="Instant QR Generation"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-satoshi font-medium text-[18.61px] leading-[24.81px] text-[#09090B]">
                Instant QR Generation
              </h3>
              <p className="font-satoshi font-normal text-[12px] leading-[15.64px] text-[#71717B] mt-2 max-w-[90%]">
                A unique QR code is applied. Print the cover page and movement
                sheet immediately.
              </p>
            </motion.div>
          </div>

          {/* Bottom Row: Card 5 (Mobile friendly) */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="feature-card flex flex-col md:flex-row bg-white border border-[#E4E4E7] rounded-[24px] w-full min-h-[313px] p-6 md:p-8 items-center justify-between relative overflow-hidden"
          >
            <div className="flex flex-col z-10 max-w-[400px]">
              <span className="font-satoshi font-normal text-[9.34px] leading-[12.45px] tracking-[0.0246em] uppercase text-[#09090B] mb-2">
                Mobile
              </span>
              <h3 className="font-satoshi font-medium text-[18.74px] md:text-[24px] leading-[25px] text-[#09090B] mb-3">
                Mobile friendly
              </h3>
              <p className="font-satoshi font-normal text-[14px] md:text-[16px] leading-[22px] text-[#71717B] mb-6">
                Use it on the go. Enjoy a smooth mobile experience with
                intuitive interactions built-in.
              </p>
              <button className="flex items-center justify-center gap-2 bg-[#397EE5] text-white rounded-full px-4 py-2 w-fit hover:bg-[#2b65c2] transition-colors">
                <span className="font-satoshi font-normal text-[14px]">
                  Install App
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            <div className="relative w-full max-w-[473px] h-[250px] md:h-[350px] mt-8 md:mt-0 md:absolute md:-right-10 md:top-1/2 md:-translate-y-1/2">
              <Image
                src="/images/feature-mobile.svg"
                alt="Mobile friendly"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
