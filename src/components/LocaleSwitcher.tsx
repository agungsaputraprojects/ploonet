"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/lib/i18n-config";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const localeNames = {
    ko: "Korea",
    en: "English",
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
        <Globe size={20} />
        <span>
          {localeNames[pathName.split("/")[1] as keyof typeof localeNames]}
        </span>
      </button>
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {i18n.locales.map((locale) => (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors duration-200"
          >
            {localeNames[locale as keyof typeof localeNames]}
          </Link>
        ))}
      </div>
    </div>
  );
}
