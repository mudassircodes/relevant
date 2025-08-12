"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clients } from "@/constant/index";
import Image from "next/image";

export default function SectionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const mqSm = window.matchMedia("(min-width: 640px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");

    const updateVisible = () =>
      setVisible(mqLg.matches ? 4 : mqSm.matches ? 2 : 1);
    updateVisible();

    mqSm.addEventListener("change", updateVisible);
    mqLg.addEventListener("change", updateVisible);
    return () => {
      mqSm.removeEventListener("change", updateVisible);
      mqLg.removeEventListener("change", updateVisible);
    };
  }, []);

  const maxIndex = Math.max(0, clients.length - visible);
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  const prevSlide = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const nextSlide = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <main className="dark:bg-[#F7F7F8] bg-[#F7F7F8] py-10 md:py-14 xl:py-20">
      <section className="px-7 font-lato text-black max-w-[1600px] 2xl:mx-auto md:px-14 ">
        <div>
          <div className="   max-w-2xl xl:max-w-3xl text-black space-y-6 xl:space-y-8 mx-auto">
            <h1 className="text-[28px] text-center leading-[34px] font-semibold md:text-[35px] xl:text-[48px] lg:font-bold lg:leading-[52px]">
              Что говорят о нас
            </h1>
            <p className="font-lato text-[14px] text-left md:text-center leading-[20px] xl:text-[18px] lg:leading-[26px]">
              Relevants создан командой ИТ-специалистов и креаторов из топовых
              digital агентств с международным опытом, которые не понаслышке
              знают, что кадры решают и знаем, насколько важно, чтобы запуск
              проектов и поиск специалистов был доступным и быстрым
            </p>
          </div>
        </div>

        <div className="py-5 md:py-14 xl:py-20">
          <div className="overflow-x-hidden overflow-y-auto">
            {/* Track */}
            <div
              className="flex items-start transition-transform duration-500 will-change-transform"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visible}%)`,
              }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 xl:px-4"
                  style={{ width: `${100 / visible}%` }}
                >
                  <div className="relative overflow-x-hidden overflow-y-visible pt-16">
                    <div className="absolute left-1/2 -translate-x-1/2 top-8 md:top-4 xl:top-0 w-[65px] h-[65px]  md:w-[80px] md:h-[80px]  xl:w-[121px] xl:h-[121px] rounded-full overflow-hidden z-10">
                      <Image
                        src={client.img}
                        alt={client.name}
                        width={121}
                        height={121}
                        className="object-cover w-full h-full rounded-full"
                        priority
                      />
                    </div>

                    <div className="bg-white p-4 xl:p-6 pt-12 xl:pt-20 rounded-3xl">
                      <p className="text-gray-700 text-[12px] xl:text-lg mb-4">
                        {client.text}
                      </p>

                      <div className="flex  text-xs xl:text-base flex-wrap gap-1 xl:gap-3  mb-4">
                        {client.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-gray-800 leading-[20px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div>
                        <h3 className=" text-sm xl:text-lg font-semibold text-gray-800">
                          {client.name}
                        </h3>
                        <p className=" text-xs xl:text-sm text-gray-500">
                          {client.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Controls */}
            <div className="mt-7 px-6 lg:mt-14 flex gap-3 justify-start lg:justify-between">
              <div className="hidden lg:flex" />
              <div className="relative hidden lg:flex">
                <button className="border-2 px-4 py-3 rounded-full border-black text-black">
                  Показать все отзывы
                </button>
                <Image
                  src="/btnarrow.png"
                  alt="arrow"
                  className="absolute -right-6 -top-9"
                  width={30}
                  height={80}
                />
              </div>

              <div className="flex items-center">
                <button
                  onClick={prevSlide}
                  disabled={!canPrev}
                  className={`border-2 border-black text-black p-2 rounded-full transition ${
                    !canPrev
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:scale-105"
                  }`}
                  aria-disabled={!canPrev}
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={!canNext}
                  className={`border-2 ml-3 border-black text-black p-2 rounded-full transition ${
                    !canNext
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:scale-105"
                  }`}
                  aria-disabled={!canNext}
                  aria-label="Next"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
