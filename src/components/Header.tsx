"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Download, Phone } from "lucide-react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Our Product", href: "#product" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Our Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      ref={headerRef}
      className="w-full flex justify-between items-center px-4 md:px-[60px] py-4 bg-white sticky top-0 z-50 shadow-sm"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.webp"
          alt="PaperBuddy Logo"
          width={40}
          height={39}
          className="object-contain"
        />
        <h1 className="text-[32px] font-semibold leading-[38.4px]">
          <span className="text-black">Paper</span>
          <span className="text-[#397EE5]">Buddy</span>
        </h1>
      </Link>

      {/* Nav Links - Desktop */}
      <nav className="hidden lg:flex items-center gap-6 ml-12">
        {navLinks.map((link, idx) => (
          <Link key={idx} href={link.href}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-[16px] leading-[19.2px] inline-block ${
                link.active
                  ? "text-[#397EE5] underline font-medium"
                  : "text-[#71717B] font-normal hover:text-black transition-colors"
              }`}
            >
              {link.name}
            </motion.span>
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:flex items-center justify-center px-4 py-2 gap-2 border border-[#397EE5] rounded-full text-[#397EE5] hover:bg-blue-50 transition-colors"
        >
          <Download size={18} />
          <span className="text-[14px] font-medium">Install App</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center px-4 py-2 gap-2 bg-[#397EE5] rounded-full text-white hover:bg-blue-600 transition-colors"
        >
          <Phone size={18} />
          <span className="text-[14px] font-medium">Contact Us</span>
        </motion.button>
      </div>
    </header>
  );
}
