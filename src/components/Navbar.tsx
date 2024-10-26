"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import { Locale } from "@/lib/i18n-config";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import LocaleSwitcher from "./LocaleSwitcher";

interface NavbarProps {
  params: { lang: Locale };
  dictionary: {
    nav: {
      studio: string;
      workcenter: string;
      asisten: string;
      metahuman: string;
      produksi: string;
      pengumuman: string;
      pertanyaankemitraan: string;
    };
  };
}

export default function Navbar({ params: { lang }, dictionary }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/studio", label: "studio" },
    { href: "/workcenter", label: "workcenter" },
    { href: "/asisten", label: "asisten" },
    { href: "/metahuman", label: "metahuman" },
    { href: "/produksi", label: "produksi" },
    { href: "/pengumuman", label: "pengumuman" },
    { href: "/pertanyaankemitraan", label: "pertanyaankemitraan" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white w-full fixed top-0 z-50">
      <div className="max-w-7xl md:px-0 px-4 mx-auto">
        <div className="flex justify-between items-center md:h-20 h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            {/* <span className="text-2xl font-bold tracking-wider">PLOONET</span> */}
            <Image
              src={Logo}
              width={170}
              height={24}
              alt="logo"
              className="md:h-6 w-auto h-5"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(`/${lang}${item.href}`);
              return (
                <div key={item.href} className="flex flex-col items-center">
                  <Link
                    href={`/${lang}${item.href}`}
                    className={`hover:text-[#ff6b6c] transition-colors duration-200 relative ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {dictionary.nav[item.label as keyof typeof dictionary.nav]}
                    {isActive && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center">
            <LocaleSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname.startsWith(`/${lang}${item.href}`);
                return (
                  <div key={item.href} className="flex flex-col">
                    <Link
                      href={`/${lang}${item.href}`}
                      className={`block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 relative ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {
                        dictionary.nav[
                          item.label as keyof typeof dictionary.nav
                        ]
                      }
                      {isActive && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })}
              <div className="px-3 py-2">
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
