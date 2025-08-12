"use client";

import React from "react";
import Image from "next/image";

type BannerCTAProps = {
  total?: number; // e.g. 6000
  onCreateClick?: () => void; // optional click handler for CTA
};

export default function BannerCTA({
  total = 6000,
  onCreateClick,
}: BannerCTAProps) {
  return (
    <section className="bg-white -mb-10">
      <div
        className="
          relative overflow-hidden
          mx-auto w-full
          rounded-[28px] md:rounded-[40px]
          bg-[#DEF0FF] 
          px-6 md:px-10 lg:px-16
          py-20 md:py-32 lg:py-40
          text-center
      "
      >
        {/* Top-right dashed curve  */}
        <Image
          src="/top-wave.svg"
          alt="top wave"
          width={520}
          height={180}
          className="hidden md:block pointer-events-none absolute -top-12 right-0 w-[360px] md:w-[520px]"
          aria-hidden="true"
        />

        {/* Bottom-left dashed curve  */}
        <Image
          src="/bottom-wave.svg"
          alt="bottom wave"
          width={760}
          height={220}
          className="hidden md:block pointer-events-none absolute -bottom-28 -left-10 w-[560px] md:w-[760px] rotate-8"
          aria-hidden="true"
        />

        {/* Headline */}
        <h2
          className="text-black font-semibold leading-tight mx-auto max-w-3xl
                       text-[24px] md:text-[34px] lg:text-[40px]"
        >
          В Relevants более <br className="hidden md:block" />{" "}
          6000 специалистов. Ваши задачи — <br className="hidden md:block" />{" "}
          их навыки!
        </h2>

        {/* Sub-line with red X */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm md:text-base text-black/80">
          <span className="text-[16px] md:text-[18px]">❌</span>
          <span>Без посредников и комиссий</span>
        </div>

        {/* Hearts */}
        <div className="mt-8 text-[20px] flex justify-center items-center md:text-[24px]">
          <img src="/icons/two-heart.svg" alt="" />
        </div>

        {/* Cursive prompt */}
        <div className="mt-10">
          <p className="font-caveat text-[24px] sm:text-[28px] md:text-[34px] text-black">
            Готовы попробовать?
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={onCreateClick}
            className="inline-flex items-center justify-center
                       rounded-full bg-[#3990FF] text-white
                       px-6 sm:px-8 md:px-10 py-3
                       text-sm sm:text-base md:text-[16px]
                       shadow-sm hover:opacity-95 transition"
          >
            Создать вакансию
          </button>
        </div>
      </div>
    </section>
  );
}
