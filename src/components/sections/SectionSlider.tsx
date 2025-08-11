"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional, for icons
import Image from "next/image";

export default function SectionSlider() {
  const clients = [
    {
      img: "/slide1.png",
      text: "Здесь я нашла множество интересных проектов и работу на свой вкус. Рекомендую!",
      tags: ["#фриланс", "#поискработы", "#relevants"], // Array of tags
      name: "Светлана",
      desc: "Дизайнер",
    },
    {
      img: "/slide2.png",
      text: "Как HR менеджер, мне приходится найти лучших специалистов для наших проектов. А это всегда занимает много времени. Эта платформа значительно упростила мою работу. 🌟 Спасибо!",
      tags: ["#HR", "#поискспециалистов", "#relevants"],
      name: "Светлана",
      desc: "Дизайнер",
    },
    {
      img: "/slide3.png",
      text: "С этой платформой больше не трачу много времени на поиск команды для своего проекта. Просто отлично! 💼",
      tags: ["#поисккоманды", "#проекты", "#relevants"],
      name: "Светлана",
      desc: "Дизайнер",
    },
    {
      img: "/slide4.png",
      text: "Отличная платформа для свободных профессионалов как я. Для меня тут все, что нужно для успешных проектов. 💼👨‍💻",
      tags: ["#фриланс", "#партнёрство", "#relevants"],
      name: "Светлана",
      desc: "Дизайнер",
    },
    {
      img: "/slide5.png",
      text: "Отличная платформа для свободных профессионалов как я. Для меня тут все, что нужно для успешных проектов. 💼👨‍💻",
      tags: ["#копирайтинг", "#удаленнаяработа", "#relevants"],
      name: "Светлана",
      desc: "Дизайнер",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 4; // for large screens
  const itemsPerSlideMobile = 1;

  const totalSlides = clients.length;
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <main className="dark:bg-[#F7F7F8] bg-[#F7F7F8] mt-20 pt-10 lg:pt-0 lg:mt-0  ">
      <section className="px-7 font-lato text-black max-w-[1600px] 2xl:mx-auto md:px-14 mt-5 md:py-0 lg:py-32 ">
        <div>
          <div className="lg:px-64 text-black space-y-6 lg:space-y-8  mx-auto">
            <h1 className=" text-[28px] text-center leading-[34px] font-semibold lg:text-[48px] lg:font-bold lg:leading-[52px]">
              Что говорят о нас
            </h1>
            <p className="font-lato text-[14px] text-center leading-[20px] lg:text-[18px] lg:leading-[26px]">
              Relevants создан командой ИТ-специалистов и креаторов из топовых
              digital агентств с международным опытом, которые не понаслышке
              знают, что кадры решают и знаем, насколько важно, чтобы запуск
              проектов и поиск специалистов был доступным и быстрым
            </p>
          </div>
        </div>
        {/* testimonials */}

        <div className="py-7 lg:py-20">
          <div className=" overflow-hidden">
            <div className="">
              {/* Slider Content */}
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-6 rounded-3xl">
                      {/* Client Image */}
                      <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden">
                        <Image
                          src={client.img}
                          alt={client.name}
                          width={112}
                          height={112}
                          className="object-cover rounded-full w-full h-full"
                          priority
                        />
                      </div>

                      <p className="text-gray-700 text-lg mb-4">
                        {client.text}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-4">
                        {client.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-gray-700 leading-[20px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {client.name}
                        </h3>
                        <p className="text-sm text-gray-500">{client.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7  px-6 lg:mt-14 flex gap-3 justify-start lg:justify-between">
              <div className="hidden lg:flex"></div>
              <div className="relative hidden lg:flex ">
                <button className=" border-2 px-4 py-3 rounded-full border-black text-black">
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
              <div>
                <button
                  onClick={prevSlide}
                  className=" border-2  border-black text-black p-2 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className=" border-2 ml-3 border-black text-black p-2 rounded-full transition"
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
