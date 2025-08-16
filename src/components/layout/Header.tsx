"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import { navItems, actionButtons } from "@/lib/config";

function hashToId(href: string) {
  const raw = href.startsWith("#") ? href.slice(1) : href;
  return decodeURIComponent(raw);
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(100);

  // Measure header height
  useEffect(() => {
    const measure = () => {
      const el = headerRef.current;
      if (!el) return;
      setHeaderHeight(el.offsetHeight || 100);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Change header bg on scroll and clear activeId at top
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      // Clear activeId when scrolled to top (within 10px to account for minor offsets)
      if (window.scrollY < 10) {
        setActiveId(null);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll with offset
  const scrollToHash = useCallback(
    (hash: string, retries = 3, delay = 100) => {
      const id = hashToId(hash || "#home");
      const attemptScroll = (attempt: number) => {
        const el = document.getElementById(id);
        if (!el) {
          if (attempt > 0) {
            console.warn(
              `Element with ID "${id}" not found, retrying (${attempt})...`
            );
            setTimeout(() => attemptScroll(attempt - 1), delay);
          } else {
            console.error(`Element with ID "${id}" not found after retries`);
          }
          return;
        }

        const rect = el.getBoundingClientRect();
        const top = window.pageYOffset + rect.top - (headerHeight + 8);
        window.scrollTo({ top, behavior: "smooth" });
        setActiveId(id);
        history.replaceState(null, "", `#${encodeURIComponent(id)}`);
      };
      attemptScroll(retries);
    },
    [headerHeight]
  );

  // Handle clicks on nav links
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToHash(href, 3, 100);
      setIsMenuOpen(false);
    }
  };

  // Deep link on first load + hash changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => scrollToHash(hash, 3, 100), 100);
    } else {
      setActiveId(null);
    }
    const onHashChange = () => {
      const newHash = window.location.hash || "#home";
      scrollToHash(newHash, 3, 100);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [scrollToHash]);

  // Active link highlighting based on scroll (IntersectionObserver)
  const sectionIds = useMemo(
    () => navItems.map((n) => hashToId(n.href)).filter(Boolean),
    []
  );

  useEffect(() => {
    if (!sectionIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Skip if at the top or activeId is explicitly null
        if (window.scrollY < 10 || activeId === null) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          console.log("Active section:", visible.target.id);
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: `-${headerHeight + 10}px 0px -60% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (els.length === 0) {
      console.warn("No elements found for IntersectionObserver:", sectionIds);
    }

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headerHeight, sectionIds, activeId]);

  return (
    <section
      className={`fixed w-full lg:bg-transparent ${
        scrolled ? "bg-white" : "bg-transparent"
      } z-50`}
    >
      <header
        ref={headerRef}
        className="w-full max-w-[1600px] mx-auto px-4 md:px-14 lg:px-30 transition-all duration-300"
      >
        <div className="mx-auto pt-4 lg:pt-6">
          <div className="w-full transition-all py-3 md:px-4 lg:bg-white lg:shadow-xl rounded-full">
            <div className="w-full rounded-full flex justify-between items-center">
              {/* Logo */}
              <Link
                href="/"
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                  setActiveId(null); // Clear activeId to remove highlighting
                  history.replaceState(null, "", "/");
                }}
                className="flex max-w-md items-center"
              >
                <Image
                  src="/relevants-logo.png"
                  alt="Relevants"
                  width={200}
                  height={50}
                  priority
                  className="w-[140px] md:w-[200px]"
                />
              </Link>

              {/* Nav Wrapper */}
              <div
                className={`w-full flex justify-between items-center ${
                  isMenuOpen
                    ? "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:static lg:bg-transparent"
                    : "hidden lg:flex"
                }`}
              >
                {/* Mobile Close */}
                <button
                  type="button"
                  aria-label="Close menu"
                  className="lg:hidden absolute top-6 right-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={34} className="text-white" />
                </button>

                {/* Desktop Links */}
                <ul className="hidden lg:flex mx-auto space-x-4 xl:space-x-9">
                  {navItems.map((item) => {
                    const isHash = item.href.startsWith("#");
                    const id = isHash ? hashToId(item.href) : undefined;
                    const isActive = isHash && activeId === id;

                    return (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          scroll={false}
                          onClick={(e) => onNavClick(e, item.href)}
                          className={`font-lato font-normal text-xs leading-6 xl:text-[16px] ${
                            isActive ? "text-[#096BDE]" : "text-[#131318]"
                          } hover:opacity-70`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex space-x-3">
                  {actionButtons.map((button) => (
                    <Link
                      key={button.title}
                      href={button.href}
                      target={button.external ? "_blank" : undefined}
                      rel={button.external ? "noopener noreferrer" : undefined}
                      className="text-[#096BDE] border-2 font-lato font-medium text-[16px] leading-6 border-blue-400 px-3 py-2 rounded-full"
                    >
                      {button.title}
                    </Link>
                  ))}
                </div>

                {/* Mobile Menu Content */}
                <div className="lg:hidden flex flex-col justify-between min-h-screen overflow-auto px-6 pt-4 pb-14">
                  <ul className="flex flex-col gap-6 mt-20">
                    {navItems.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          scroll={false}
                          onClick={(e) => onNavClick(e, item.href)}
                          className="font-lato font-light text-[20px] leading-[28px] text-white hover:opacity-70"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-4 my-4">
                    {actionButtons.map((button, index) => (
                      <Link
                        key={button.title}
                        href={button.href}
                        target={button.external ? "_blank" : undefined}
                        rel={
                          button.external ? "noopener noreferrer" : undefined
                        }
                        className={`font-lato py-3 px-6 rounded-full text-[16px] leading-[24px] font-light flex items-center justify-center ${
                          index === 0
                            ? "text-white bg-[#096BDE]"
                            : "text-[#096BDE] border-2 border-[#096BDE] bg-white"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {button.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hamburger */}
              <button
                type="button"
                aria-label="Open menu"
                className="lg:hidden cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              >
                <div className="flex flex-col gap-1">
                  <div className="w-6 h-0.5 bg-black rounded"></div>
                  <div className="w-4 h-0.5 bg-black rounded"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
