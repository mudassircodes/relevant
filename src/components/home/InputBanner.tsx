"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SectionInput() {
  const [open, setOpen] = useState(false);

  return (
    <main className="dark:bg-white">
      <section className="px-4 font-lato dark:bg-white max-w-[1600px] 2xl:mx-auto md:px-14  ">
        <div className="bg-[#DDF1FF] text-black rounded-2xl p-7 lg:p-20">
          <div className="lg:max-w-3xl  md:space-y-0">
            <h1 className="text-[28px] font-medium leading-[25px] md:leading-[34px] lg:font-bold md:text-[32px] xl:text-[48px] xl:leading-[52px]">
              Найдите специалиста сейчас,
              <br className="hidden md:block" /> система cпрогнозирует шанс
              мэтча
            </h1>
            <p className="text-[14px] leading-[20px] xl:text-[18px] pt-3 md:pt-5 lg:leading-[26px]">
              Вы сразу увидите тех, кто уже доступен под ваш запрос
            </p>
          </div>

          <div>
            <div className="flex lg:flex-row flex-col gap-3 mt-8 lg:mt-10">
              <input
                type="text"
                placeholder="Введите название специалиста"
                className="w-full bg-white px-5 md:px-7 xl:w-[811px] focus:ring-2 focus:ring-[#3990FF] h-[45px] md:h-[55px] xl:h-[64px] outline-none border-none rounded-full"
              />
              <button
                className="bg-[#3990FF] text-white rounded-full w-full lg:w-[296px] h-[45px] md:h-[55px] xl:h-[64px]"
                onClick={() => setOpen(true)}
              >
                Найти
              </button>
            </div>
          </div>
        </div>
      </section>

      {open && <BlurModal onClose={() => setOpen(false)} />}
    </main>
  );
}

/* ================= Modal ================= */

type ModalProps = { onClose: () => void };

function BlurModal({ onClose }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close when clicking outside content
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="
        fixed inset-0 z-50
        bg-white/20
        backdrop-blur-lg
        flex items-center justify-center
      "
      aria-modal="true"
      role="dialog"
    >
      {/* Logo in top-left corner */}
      <img
        src="/relevants-logo.png"
        alt="Logo"
        className="absolute top-6 left-6 w-36 h-fit md:w-20  lg:w-28  xl:w-32  object-contain z-60"
      />

      {/* Close button (top-right) */}
      <button
        aria-label="Закрыть"
        onClick={onClose}
        className="
          absolute top-6 right-6
           w-8 h-8 lg:w-10 lg:h-10 rounded-full
          border border-black/80
          hover:bg-black
          hover:text-white
          text-center
          transition
          flex items-center text-black justify-center
          text-xl
        "
      >
        ×
      </button>

      {/* Center content */}
      <div className="px-6 text-center">
        <h3
          className="
          text-black font-bold
          text-2xl md:text-4xl lg:text-5xl
          leading-tight max-w-3xl mx-auto
        "
        >
          В вашей категории доступно
          <br className="hidden sm:block" />
           &nbsp;ещё <span className="whitespace-nowrap">87 специалистов</span>
        </h3>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3">
          <button
            className="
              rounded-full px-5 sm:px-6 md:px-7 py-3
              bg-black text-white
              text-sm md:text-base
              shadow-sm hover:opacity-90 transition
            "
            onClick={onClose}
          >
            Посмотреть специалистов
          </button>

          <button
            className="
              rounded-full px-5 sm:px-6 md:px-7 py-3
              bg-[#3990FF] text-white
              text-sm md:text-base
              shadow-sm hover:opacity-90 transition ButtonWidth
            "
            onClick={onClose}
          >
            Создать вакансию
          </button>
        </div>
      </div>
    </div>
  );
}
