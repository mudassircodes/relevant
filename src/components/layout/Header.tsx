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
          <div className={`w-full transition-all py-3 md:px-4  lg:bg-white lg:shadow-xl rounded-full`}>
            <div className="w-full rounded-full flex justify-between items-center">
              {/* Logo */}
              <Link href="#home" className="flex max-w-md items-center">
                <Image
                  src="/relevants-logo.png"
                  alt="Relevants"
                  width={200}
                  height={50}
                  priority
                  className="  w-[140px] md:w-[200px]"
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
                  <X size={34} className="text-white" />
                </div>

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
                      className="text-[#096BDE] border-2 font-lato font-medium text-[16px] leading-6 border-blue-400 px-3 py-2 rounded-full"
                    >
                      {button.title}
                    </Link>
                  ))}
                </div>
                {/* Mobile Menu */}
                <div className="lg:hidden flex flex-col justify-between  min-h-screen px-6 pt-4 pb-10">
                  <ul className="flex flex-col gap-6 mt-20">
                    {navItems.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="font-lato font-light text-[20px] leading-[28px] text-white hover:opacity-70"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-4 mt-4">
                    {actionButtons.map((button, index) => (
                      <Link
                        key={button.title}
                        href={button.href}
                        target={button.external ? "_blank" : undefined}
                        rel={button.external ? "noopener noreferrer" : undefined}
                        className={` font-lato py-3 px-6 rounded-full text-[16px] leading-[24px] font-light flex items-center justify-center ${
                          index === 0
                            ? "text-white bg-[#096BDE] "
                            : "text-[#096BDE] border-2 border-[#096BDE] bg-white"
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
