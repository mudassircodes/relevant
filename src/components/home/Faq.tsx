"use client";

import React, { useState } from "react";
import { faqs } from "@/constant/index";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="Вопросы и ответы" className="w-full bg-white px-4 md:px-14 ">
      <div className="mx-auto max-w-6xl px-1 md:px-6 lg:px-8">
        <h2 className="text-center font-semibold md:font-bold tracking-tight text-black text-[28px] md:text-4xl xl:text-5xl">
          Вопросы и ответы
        </h2>

        <div className="mt-6 md:mt-10 xl:mt-16 border-y-gray-200 border-y">
          <ul className="divide-y divide-gray-200">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <li key={i} className="px-2 md:px-8">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-6 py-5 md:py-6 text-left"
                  >
                    <span className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-black">
                      {item.question}
                    </span>

                    <span
                      className="shrink-0 text-xl md:text-3xl leading-none text-black/70 select-none"
                      aria-hidden="true"
                    >
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    className={`overflow-hidden max-w-[841px] transition-[max-height,opacity] duration-300 ease-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pb-6 md:pb-8 text-[16px] lg:text-[18px] leading-6 md:leading-7 text-[#2F2F37]">
                      {item.answer}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
