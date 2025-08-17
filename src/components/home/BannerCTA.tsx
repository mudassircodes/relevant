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
          px-4 md:px-10 lg:px-16
          py-16 md:py-32 lg:py-40
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
        <div className="flex flex-col space-y-[32px] items-center">
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
          <div className=" flex items-center justify-center gap-2 text-sm md:text-base text-black/80">
            <span className="text-[16px] md:text-[18px]">❌</span>
            <span>Без посредников и комиссий</span>
          </div>

          {/* Hearts */}
          <div className=" text-[20px] flex justify-center items-center md:text-[24px]">
            <img src="/icons/two-heart.svg" alt="" />
          </div>

          {/* Cursive prompt */}
          <div className="">
            <p className="font-caveat text-[24px] sm:text-[28px] md:text-[34px] text-black">
              Готовы попробовать?
            </p>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-6 w-full md:mt-10 px-4">
          <button
            onClick={onCreateClick}
            className="inline-flex items-center justify-center
            lg:h-[58px] max-lg:h-[52px]
                       rounded-full bg-[#3990FF] text-white
                       px-6  w-full md:w-fit md:px-10 py-3
                       text-sm  md:text-[16px]
                       shadow-sm hover:opacity-95 transition"
          >
            Создать вакансию
          </button>
        </div>
      </div>
    </section>
  );
}
