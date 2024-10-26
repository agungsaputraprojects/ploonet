"use client";

import React, { useState } from "react";
import { Locale } from "@/lib/i18n-config";
import { FileText, Video, Play, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessSteps {
  step1: ProcessStep;
  step2: ProcessStep;
  step3: ProcessStep;
  step4?: ProcessStep;
  step5?: ProcessStep;
}

interface ProcessProps {
  params: { lang: Locale };
  dictionary: {
    process: {
      title: string;
      normal: {
        title: string;
        subtitle: string;
        steps: ProcessSteps;
      };
      quick: {
        title: string;
        subtitle: string;
        steps: ProcessSteps;
      };
    };
  };
}

export default function MakingProcess({
  params: { lang },
  dictionary,
}: ProcessProps) {
  const [activeCard, setActiveCard] = useState<"normal" | "quick" | null>(null);

  const normalSteps: Step[] = [
    { icon: FileText, ...dictionary.process.normal.steps.step1 },
    { icon: Video, ...dictionary.process.normal.steps.step2 },
    { icon: Video, ...dictionary.process.normal.steps.step3 },
    { icon: Video, ...dictionary.process.normal.steps.step4! },
    { icon: Play, ...dictionary.process.normal.steps.step5! },
  ];

  const quickSteps: Step[] = [
    { icon: FileText, ...dictionary.process.quick.steps.step1 },
    { icon: Video, ...dictionary.process.quick.steps.step2 },
    { icon: Play, ...dictionary.process.quick.steps.step3 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <section className="bg-black md:py-20 py-10 px-4 md:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative flex justify-center items-center md:mb-16 mb-8"
          variants={cardVariants}
        >
          <div className="absolute -top-6 flex justify-center">
            <div className="w-2 h-2 rounded-full bg-[#FF6B6C]" />
          </div>
          <h2 className="text-white text-xl md:text-4xl font-bold tracking-wide">
            {dictionary.process.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            variants={cardVariants}
            className={`relative rounded-2xl bg-[#151515] p-8 cursor-pointer
              group border-2 border-transparent
              ${
                activeCard === "normal"
                  ? "scale-[1.02] z-10"
                  : activeCard === "quick"
                  ? "opacity-70"
                  : ""
              }
            `}
            onMouseEnter={() => setActiveCard("normal")}
            onMouseLeave={() => setActiveCard(null)}
            whileHover={{
              border: "2px solid rgba(255, 107, 108, 0.3)",
              transition: { duration: 0.1 },
            }}
            style={{
              transition: "all 0.2s ease-in-out",
            }}
          >
            <div className="mb-8">
              <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-[#FF6B6C] transition-colors duration-200">
                {dictionary.process.normal.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {dictionary.process.normal.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {normalSteps.map((step: Step, index: number) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="flex items-start space-x-4 bg-black/30 rounded-xl p-4 transition-all duration-200 hover:bg-black/50"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF6B6C]/10">
                      <step.icon className="w-4 h-4 text-[#FF6B6C]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#FF6B6C] text-sm mb-1">
                      STEP{index + 1}
                    </div>
                    <div className="text-white font-medium mb-1">
                      {step.title}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {step.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className={`relative rounded-2xl bg-[#1A1A1A] p-8 cursor-pointer
              group border-2 border-transparent
              ${
                activeCard === "quick"
                  ? "scale-[1.02] z-10"
                  : activeCard === "normal"
                  ? "opacity-70"
                  : ""
              }
            `}
            onMouseEnter={() => setActiveCard("quick")}
            onMouseLeave={() => setActiveCard(null)}
            whileHover={{
              border: "2px solid rgba(255, 107, 108, 0.3)",
              transition: { duration: 0.1 },
            }}
            style={{
              transition: "all 0.2s ease-in-out",
            }}
          >
            <div className="mb-8">
              <h3 className="text-[#FF6B6C] text-2xl font-bold mb-2">
                {dictionary.process.quick.title}™
              </h3>
              <p className="text-gray-400 text-sm">
                {dictionary.process.quick.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {quickSteps.map((step: Step, index: number) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B6C] to-[#FF8F6B] hover:from-[#FF8F6B] hover:to-[#FF6B6C] transition-all duration-200">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#FF6B6C] text-sm mb-1">
                      STEP{index + 1}
                    </div>
                    <div className="text-white font-medium mb-1">
                      {step.title}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {step.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
