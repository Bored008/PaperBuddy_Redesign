"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full min-h-[615px] bg-cover bg-center bg-no-repeat flex items-center justify-center pt-16 pb-8 px-4 md:px-16"
      style={{ backgroundImage: "url('/images/footer-bg.webp')" }}
    >
      <div className="footer-content w-full max-w-[1296px] bg-white/10 backdrop-blur-md rounded-[37px] p-8 md:p-10 border border-white/20">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-16">
          
          {/* Logo & CTA */}
          <motion.div 
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="relative">
              <h1 className="font-bold text-5xl md:text-6xl text-white leading-tight">
                Paper
                <br />
                <span className="text-blue-500">Buddy</span>
              </h1>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 bg-black/80 hover:bg-black text-white px-6 py-3 rounded-full font-medium transition-colors border border-white/20"
              >
                <span>Book A Demo</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigations */}
          <motion.div 
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-white font-medium text-lg mb-2">
              Navigations
            </motion.h3>
            {['Home', 'Our Product', 'Features', 'Pricing', 'Our Team'].map((item) => (
              <motion.div variants={itemVariants} key={item}>
                <Link href="#" className="text-white/75 hover:text-white transition-colors">
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Contacts */}
          <motion.div 
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-white font-medium text-lg mb-2">
              Contacts
            </motion.h3>
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-white/75">
              <Phone className="w-5 h-5" />
              <span>+91 97182 03533</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-white/75">
              <Mail className="w-5 h-5" />
              <span>support@paperbuddy.in</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-white/75">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-2 text-white/75">
              <MapPin className="w-5 h-5 shrink-0" />
              <div className="flex flex-col">
                <span>Gurugram, Haryana,</span>
                <span>India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Legacy Policies */}
          <motion.div 
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-white font-medium text-lg mb-2">
              Legacy Policies
            </motion.h3>
            {['Privacy Policy', 'Terms & Conditions', 'Refund & Cancellations'].map((item) => (
              <motion.div variants={itemVariants} key={item}>
                <Link href="#" className="text-white/75 hover:text-white transition-colors">
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="footer-content border-t border-white/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            {['Instagram', 'Linkedin', 'X(Twitter)'].map((social) => (
              <Link key={social} href="#" className="text-white/75 hover:text-white transition-colors">
                {social}
              </Link>
            ))}
          </div>
          
          <div className="text-white/75 text-sm text-center md:text-left">
            © 2026 PaperBuddy. All rights reserved
          </div>
        </div>
        
        <div className="footer-content text-center mt-4">
          <span className="text-white font-medium text-lg">Designed by Himanshu (Bored)</span>
        </div>
      </div>
    </footer>
  );
}
