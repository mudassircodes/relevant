"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional, for icons
import "swiper/swiper-bundle.css";
import Image from "next/image";

export default function SectionSlider() {
  const swiperRef = useRef<any>(null); // To reference Swiper instance
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
      text: "Как HR менеджер, мне приходится найти лучших специалистов для наших проектов. А это всегда занимает много времени. Эта платформа значительно упростила мою работу. 🌟 Спасибо!",
      tags: ["#HR", "#поискспециалистов", "#relevants"],
      name: "Светлана",
      desc: "Дизайнер",
    },
    {
      img: "/slide3.png",
      text: "С этой платформой больше не трачу много времени на поиск команды для своего проекта. Просто отлично! 💼",
      tags: ["#поисккоманды", "#проекты", "#relevants"],
      name: "Светлана",
      desc: "Дизайнер",
    },
    {
      img: "/slide4.png",
      text: "Отличная платформа для свободных профессионалов как я. Для меня тут все, что нужно для успешных проектов. 💼👨‍💻",
      tags: ["#фриланс", "#партнёрство", "#relevants"],
      name: "Светлана",
      desc: "Дизайнер",
    },
    {
      img: "/slide5.png",
      text: "Отличная платформа для свободных профессионалов как я. Для меня тут все, что нужно для успешных проектов. 💼👨‍💻",
      tags: ["#копирайтинг", "#удаленнаяработа", "#relevants"],
      name: "Светлана",
      desc: "Дизайнер",
    },
  ];

  return (
    <main className="dark:bg-[#F7F7F8] bg-[#F7F7F8] mt-20 pt-10 lg:pt-0 lg:mt-0  ">
      <section className="px-7 font-lato text-black max-w-[1600px] 2xl:mx-auto md:px-14 mt-5 md:py-0 lg:py-32 ">
        <div>
          <div className="lg:px-64 space-y-8  mx-auto">
            <h1 className=" text-[28px] text-center leading-[34px] font-semibold lg:text-[48px] lg:font-bold lg:leading-[52px]">
              Что говорят о нас
            </h1>
            <p className="font-lato text-[14px] lg:text-center leading-[20px] lg:text-[18px] lg:leading-[26px]">
              Relevants создан командой ИТ-специалистов и креаторов из топовых
              digital агентств с международным опытом, которые не понаслышке
              знают, что кадры решают и знаем, насколько важно, чтобы запуск
              проектов и поиск специалистов был доступным и быстрым
            </p>
          </div>
        </div>
        {/* testimonials */}

        <div className="p-4 w-full ">
          {/* Swiper Container */}
          <div className="py-20">
            <div className="relative">
              <Swiper
                ref={swiperRef}
                spaceBetween={30} // Space between slides
                slidesPerView={1} // Default 1 slide for mobile
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Smooth sliding with autoplay
                breakpoints={{
                  640: {
                    slidesPerView: 1, // Mobile (1 slide)
                  },
                  768: {
                    slidesPerView: 2, // Tablet (2 slides)
                  },
                  1024: {
                    slidesPerView: 3, // Desktop (3 slides)
                  },
                  1280: {
                    slidesPerView: 4, // Larger screens (4 slides)
                  },
                }}
                pagination={{ clickable: true }} // Enable clickable pagination dots
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }} // Custom navigation
              >
                {/* SwiperSlides - Testimonial Cards */}
                {clients.map((client, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white p-6 rounded-xl flex flex-col items-">
                      {/* Client Image */}
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 mx-auto mb-4">
                        <Image
                          src={client.img} // Client image
                          alt={client.name}
                          width={100}
                          height={100}
                          className="object-cover w-full h-full"
                          priority
                        />
                      </div>

                      <p className="text-gray-700 text-lg mb-4">
                        {client.text}
                      </p>

                      <div className="flex flex-wrap  gap-3 mb-4">
                        {(client.tags && Array.isArray(client.tags)
                          ? client.tags
                          : []
                        ).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-gray-700 leading-[20px] "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Client Info */}
                      <div className="">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {client.name}
                        </h3>
                        <p className="text-sm text-gray-500">{client.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="lg:mt-14 flex gap-3 justify-start lg:justify-between">
                <div className="hidden lg:flex" ></div>
                <div className="relative hidden lg:flex " >
                  <button className=" border-2 px-4 py-3 rounded-full border-black text-black">
                    Показать все отзывы
                  </button>
                  <Image src='/btnarrow.png' alt="arrow" className="absolute -right-6 -top-9" width={30} height={80} />
                </div>
                <div>
                  <button
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    className=" border-2  border-black text-black p-2 rounded-full"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className=" border-2 ml-3 border-black text-black p-2 rounded-full transition"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
