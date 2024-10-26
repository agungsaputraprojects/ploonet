"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Locale } from "@/lib/i18n-config";

interface BannerProps {
  params: { lang: Locale };
  dictionary: {
    banner: {
      accent: string;
      message: string;
      button: {
        text1: string;
        text2: string;
      };
    };
  };
}

export default function Banner({ params: { lang }, dictionary }: BannerProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeFixed = window.scrollY > 100;
      setIsScrolled(shouldBeFixed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full md:h-screen min-h-80 md:mt-0 mt-16 h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1132] to-[#0D0B21]" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center items-center gap-x-2">
          <span className="text-[#FF6B6C]">{dictionary.banner.accent}</span>
          <span className="text-white">{dictionary.banner.message}</span>
          <CheckCircle className="inline-block w-8 h-8 md:w-12 md:h-12 text-[#FF6B6C] ml-2" />
        </h1>
      </div>

      {/* Animated Button */}
      <AnimatePresence>
        <motion.div
          className="fixed hidden md:block z-50"
          initial={{ top: "6rem", right: "2rem" }}
          animate={{
            top: isScrolled ? "auto" : "6rem",
            bottom: isScrolled ? "2rem" : "auto",
            right: "2rem",
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            type: "tween",
          }}
          style={{
            right: "2rem",
          }}
        >
          <motion.button
            className="group bg-[#FF6B6C] rounded-full w-24 h-24 flex flex-col items-center justify-center hover:bg-[#FF8F6B] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <motion.div
              className="text-white text-center text-sm"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p>{dictionary.banner.button.text1}</p>
              <p>{dictionary.banner.button.text2}</p>
            </motion.div>
            <motion.div
              animate={{
                rotate: 45,
                y: isScrolled ? -2 : 2,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-5 h-5 text-white mt-1" />
            </motion.div>
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
