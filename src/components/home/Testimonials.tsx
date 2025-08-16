"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
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

  // Keep index valid when visible changes
  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [visible, maxIndex]);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  const SLIDE_SIDE_PADDING_PX = 12;
  const prevSlide = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const nextSlide = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <main
      id="Отзывы"
      className="dark:bg-[#F7F7F8] bg-[#F7F7F8] py-14 md:py-20 xl:py-28"
    >
      <section className="px-4 font-lato text-black max-w-[1600px] 2xl:mx-auto md:px-14">
        {/* Heading */}
        <div>
          <div className="max-w-2xl xl:max-w-3xl text-black space-y-6 xl:space-y-8 mx-auto">
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

        {/* Slider */}
        <div className="py-5 md:py-14 xl:py-20">
          <div className="overflow-hidden relative">
            <div className="mx-[-12px]">
              <div
                className="flex transition-transform duration-500 will-change-transform"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / visible}%)`,
                }}
              >
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="shrink-0 basis-full sm:basis-1/2 lg:basis-1/4 px-3"
                    style={{ width: `${100 / visible}%` }}
                  >
                    <div className="relative overflow-hidden pt-16">
                      <div className="absolute left-1/2 -translate-x-1/2 top-8 md:top-4 xl:top-0 w-[65px] h-[65px] md:w-[80px] md:h-[80px] xl:w-[121px] xl:h-[121px] rounded-full overflow-hidden z-10">
                        <Image
                          src={client.img}
                          alt={client.name}
                          width={121}
                          height={121}
                          className="object-cover w-full h-full rounded-full"
                          priority
                        />
                      </div>

                      <div className="bg-white p-6 xl:p-8 pt-12 xl:pt-20 rounded-3xl">
                        <p className="text-gray-800 text-[14px] lg:text-[16px] mb-4">
                          {client.text}
                        </p>

                        <div className="flex text-xs xl:text-base flex-wrap gap-1 xl:gap-3 mb-4">
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
                          <h3 className="text-sm xl:text-lg font-semibold text-gray-800">
                            {client.name}
                          </h3>
                          <p className="text-xs lg:text-sm text-gray-500">
                            {client.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-4 md:pt-7 px-6 lg:mt-14 flex gap-3 justify-start lg:justify-between">
              <div className="hidden lg:flex" />
              <div className="flex py-2 items-center">
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
                  <IoIosArrowRoundBack size={24} />
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
                  <IoIosArrowRoundForward size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
