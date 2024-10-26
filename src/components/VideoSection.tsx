"use client";

import React from "react";
import { Locale } from "@/lib/i18n-config";

interface VideoSectionProps {
  params: { lang: Locale };
  dictionary: {
    videoSection: {
      title: string;
      subtitle: string;
      highlight: string;
      demand: string;
      description1: string;
      description2: string;
      features: {
        fast: { title: string; subtitle: string };
        quality: { title: string; subtitle: string };
        price: { title: string; subtitle: string };
        tech: { title: string; subtitle: string };
      };
    };
  };
}

export default function VideoSection({
  params: { lang },
  dictionary,
}: VideoSectionProps) {
  const features = [
    {
      title: "FAST",
      subtitle: "X2",
      gradient: "from-[#FF6B6C] to-[#FF8F6B]",
    },
    {
      title: "QUALITY",
      subtitle: "A++",
      gradient: "from-[#FF8F6B] to-[#FFA76B]",
    },
    {
      title: "LOW\nPRICE",
      subtitle: "1/2",
      gradient: "from-[#FFA76B] to-[#FFBF6B]",
    },
    {
      title: "HIGH\nTECH",
      subtitle: "Gen AI",
      gradient: "from-[#FFBF6B] to-[#FFD76B]",
    },
  ];

  return (
    <section className="bg-black min-h-screen md:py-20 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:mb-20 mb-10">
          <h2 className="text-[#FF6B6C] text-lg md:text-xl mb-6">
            영상 제작소
          </h2>
          <p className="text-white text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight font-light">
            당장 내일 <span className="font-bold">'고품질 맞춤 영상'</span>을
            받아보세요.
          </p>
        </div>

        <div className="grid grid-cols-4 mb-16 justify-self-center">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative group">
                <div
                  className={`w-20 h-20 md:w-44 md:h-44 rounded-full border border-[#FF6B6C] bg-transparent flex flex-col items-center justify-center text-center transition-all duration-300`}
                >
                  <div className="text-[#FF6B6C] font-bold text-sm md:text-3xl mb-1 whitespace-pre-line">
                    {feature.title}
                  </div>
                  <div className="text-[#FF6B6C] text-base md:text-lg md:block hidden opacity-80">
                    {feature.subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-white text-xl md:text-4xl font-bold text-center mb-8">
          {dictionary.videoSection.demand}
        </h3>

        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {dictionary.videoSection.description1}
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {dictionary.videoSection.description2}
          </p>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>
      </div>
    </section>
  );
}
