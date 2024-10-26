import React from "react";
import { Locale } from "@/lib/i18n-config";
import Image, { StaticImageData } from "next/image";
import work1 from "@/images/work1.jpg";
import work2 from "@/images/work2.jpg";
import work3 from "@/images/work3.jpg";
import work4 from "@/images/work4.jpg";
import work5 from "@/images/work5.jpg";
import work6 from "@/images/work6.jpg";
import work7 from "@/images/work7.jpg";
import work8 from "@/images/work8.jpg";
import work9 from "@/images/work9.jpg";
import work10 from "@/images/work10.jpg";
import work11 from "@/images/work11.jpg";
import work12 from "@/images/work12.jpg";

interface WorkItem {
  id: number;
  imageUrl: StaticImageData;
  titleKey: string;
}

interface PreviousWorksProps {
  params: { lang: Locale };
  dictionary: {
    works: {
      title: string;
      items: Record<
        string,
        {
          title: string;
          description?: string;
        }
      >;
    };
  };
}

const workItems: WorkItem[] = [
  {
    id: 1,
    imageUrl: work1,
    titleKey: "movieCount",
  },
  {
    id: 2,
    imageUrl: work2,
    titleKey: "aiLecture",
  },
  {
    id: 3,
    imageUrl: work3,
    titleKey: "emotionalComputing",
  },
  {
    id: 4,
    imageUrl: work4,
    titleKey: "ploonetTablet",
  },
  {
    id: 5,
    imageUrl: work5,
    titleKey: "screenGuide",
  },
  {
    id: 6,
    imageUrl: work6,
    titleKey: "workCenter",
  },
  {
    id: 7,
    imageUrl: work7,
    titleKey: "studyGuide",
  },
  {
    id: 8,
    imageUrl: work8,
    titleKey: "awards",
  },
  {
    id: 9,
    imageUrl: work9,
    titleKey: "screenGuide",
  },
  {
    id: 10,
    imageUrl: work10,
    titleKey: "workCenter",
  },
  {
    id: 11,
    imageUrl: work11,
    titleKey: "studyGuide",
  },
  {
    id: 12,
    imageUrl: work12,
    titleKey: "awards",
  },
];

export default function PreviousWorks({
  params: { lang },
  dictionary,
}: PreviousWorksProps) {
  return (
    <section className="bg-black md:py-20 py-10">
      <div>
        <div className="relative flex justify-center items-center md:mb-16 mb-8">
          <div className="absolute -top-6 flex justify-center">
            <div className="w-2 h-2 rounded-full bg-[#FF6B6C]" />
          </div>
          <h2 className="text-white text-xl md:text-4xl font-bold tracking-wide">
            {dictionary.works.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4">
          {workItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group overflow-hidden cursor-pointer"
            >
              <div className="aspect-video relative w-full">
                <Image
                  src={item.imageUrl}
                  alt={dictionary.works.items[item.titleKey].title}
                  width={400}
                  height={225}
                  priority={index < 4}
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-bold mb-2">
                    {dictionary.works.items[item.titleKey].title}
                  </h3>
                  {dictionary.works.items[item.titleKey].description && (
                    <p className="text-gray-300 text-sm">
                      {dictionary.works.items[item.titleKey].description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
