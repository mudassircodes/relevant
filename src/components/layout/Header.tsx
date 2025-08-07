"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { navItems, actionButtons } from "@/lib/config";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`fixed w-full lg:bg-transparent ${scrolled ? 'bg-white' : 'bg-transparent'} z-50`}>
      <header className={`w-full max-w-[1600px] mx-auto px-4 md:px-14 lg:px-30 transition-all duration-300`}>
        <div className="mx-auto pt-4 lg:pt-6">
          {/* Navbar */}
          <div className={`w-full transition-all p-3  lg:bg-white lg:shadow-xl rounded-full`}>
            <div className="w-full rounded-full flex justify-between items-center">
              {/* Logo */}
              <Link href="#home" className="flex max-w-md items-center">
                <Image
                  src="/relevants-logo.png"
                  alt="Relevants"
                  width={150}
                  height={100}
                  priority
                />
              </Link>

              {/* Nav Links */}
              <div
                className={`w-full flex justify-between items-center ${
                  isMenuOpen
                    ? "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:static lg:bg-transparent"
                    : "hidden lg:flex"
                }`}
              >
                {/* Mobile Close Button */}
                <div className="lg:hidden absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
                  <X size={24} className="text-white" />
                </div>

                {/* Desktop Nav Items */}
                <ul className="hidden lg:flex mx-auto space-x-4 xl:space-x-9">
                  {navItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="font-lato font-normal text-xs leading-6 xl:text-[16px] text-[#131318] hover:opacity-70"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex space-x-3">
                  {actionButtons.map((button) => (
                    <Link
                      key={button.title}
                      href={button.href}
                      rel={button.external ? "noopener noreferrer" : undefined}
                      className="text-blue-700 border-2 font-lato font-semibold text-[16px] leading-6 border-blue-500 px-3 py-2 rounded-full"
                    >
                      {button.title}
                    </Link>
                  ))}
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden flex flex-col w-full px-6 py-6">
                  <ul className="flex flex-col gap-8 mt-20">
                    {navItems.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="font-lato font-normal text-[20px] text-white hover:opacity-70"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2 mt-6">
                    {actionButtons.map((button, index) => (
                      <Link
                        key={button.title}
                        href={button.href}
                        target={button.external ? "_blank" : undefined}
                        rel={button.external ? "noopener noreferrer" : undefined}
                        className={`min-w-[200px] max-w-[240px] h-12 px-6 rounded-full text-base font-semibold flex items-center justify-center ${
                          index === 0
                            ? "text-white bg-blue-600 hover:bg-blue-700"
                            : "text-blue-600 border border-blue-600 bg-white hover:bg-blue-50"
                        }`}
                      >
                        {button.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hamburger */}
              <div className="lg:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
                <div className="flex flex-col gap-1">
                  <div className="w-6 h-0.5 bg-black rounded"></div>
                  <div className="w-4 h-0.5 bg-black rounded"></div>
                </div>
              </div>
            </div>
          </div>

      
        </div>
      </header>
    </section>
  );
}
