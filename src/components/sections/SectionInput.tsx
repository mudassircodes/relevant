"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SectionInput() {
  const [open, setOpen] = useState(false);

  return (
    <main className="dark:bg-white">
      <section className="px-7 font-lato dark:bg-white max-w-[1600px] 2xl:mx-auto md:px-14 mt-5 md:py-0 lg:py-28 ">
        <div className="bg-[#DDF1FF] text-black rounded-2xl p-7 lg:p-20 ">
          <div className="lg:max-w-3xl">
            <h1 className="text-[28px] font-semibold leading-[34px] lg:font-bold lg:text-[48px] lg:leading-[52px]">
              Найдите специалиста сейчас, система cпрогнозирует шанс мэтча
            </h1>
            <p className="text-[14px] leading-[20px] lg:text-[18px] mt-5 lg:leading-[26px]">
              Вы сразу увидите тех, кто уже доступен под ваш запрос
            </p>
          </div>

          <div>
            <div className="flex lg:flex-row flex-col gap-3 mt-5 lg:mt-10">
              <input
                type="text"
                placeholder="Введите название специалиста или услуги"
                className="w-full bg-white px-7 py-4 outline-none border-none rounded-full"
              />
              <button
                className="bg-[#3990FF] text-white rounded-full px-28 py-4"
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
      {/* Close button (top-right) */}
      <button
        aria-label="Закрыть"
        onClick={onClose}
        className="
          absolute top-6 right-6
          w-10 h-10 rounded-full
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

      {/* Center content (no card, just text on blurred bg) */}
      <div className="px-6 text-center">
        <h3
          className="
          text-black font-bold
          text-2xl  md:text-4xl lg:text-5xl
          leading-tight max-w-3xl mx-auto
        "
        >
          В вашей категории доступно
          <br className="hidden sm:block" />
          ещё <span className="whitespace-nowrap">87 специалистов</span>
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
              shadow-sm hover:opacity-90 transition
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
