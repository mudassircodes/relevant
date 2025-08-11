import Image from "next/image";
import React from "react";

export default function SectiontThree() {
  return (
    <main className="dark:bg-white">
      <section className="px-7  dark:text-white max-w-[1600px] mx-auto md:px-14 lg:px-30 pb-16 lg:pb-32 lg:py-20 ">
        <div className="grid grid-cols-1">
          <div className="flex flex-col lg:flex-row justify-between gap-5 py-5 items-center ">
            <div className="w-full md:max-w-xl lg:max-w-3xl lg:mr-10 relative">
              <h1 className="font-lato text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[34px] lg:leading-[52px] text-black">
                Собрали главное о специалистах на Relevants — в цифрах
                и диаграммах
              </h1>
              <p className="font-lato mt-5 text-[16px] md:text-[18px] text-black font-normal leading-[28px] lg:max-w-md">
                Это поможет быстро понять, кого можно найти через Relevants,
                какие направления самые активные и с кем чаще всего стоит
                сотрудничество.
              </p>
              <div className="absolute hidden lg:flex -bottom-6 right-3 ">
                <Image
                  src="/Vector325.svg"
                  alt="arrow"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div className="bg-[#F9F9FA] p-5 lg:p-8 rounded-2xl w-full mx-auto">
              {/* Title */}
              <h1 className="lg:text-[32px] text-black text-xl font-semibold leading-[40px] mb-6">
                По направлениям
              </h1>

              {/* Content */}
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Donut Image */}
                <div className="flex justify-center flex-shrink-0">
                  <Image
                    src="/donut1.png"
                    alt="donut"
                    width={200}
                    height={200}
                    className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                  />
                </div>

                {/* Text + Ratio */}
                <div className="flex text-black flex-col justify-center w-full gap-3">
                  <div className="flex  justify-between text-base">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-black"></span>
                      Дизайн
                    </span>
                    <span>49%</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                      Маркетинг
                    </span>
                    <span>24%</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-200"></span>
                      IT Разработка
                    </span>
                    <span>19%</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-purple-200"></span>
                      Видеомонтаж, CGIи GameDev
                    </span>
                    <span>19%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-6 py-5 items-center ">
            <div className="bg-[#F9F9FA] p-5 lg:p-8 rounded-2xl w-full max-w-3xl mx-auto">
              {/* Title */}
              <h1 className="lg:text-[32px] text-black text-xl font-semibold leading-[40px] mb-6">
                По опыту
              </h1>

              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex justify-center flex-shrink-0">
                  <Image
                    src="/donut2.png"
                    alt="donut"
                    width={200}
                    height={200}
                    className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                  />
                </div>

                <div className="flex text-black flex-col justify-center w-full gap-3">
                  <div className="flex justify-between text-base">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-black"></span>
                      Junior
                    </span>
                    <span>29%</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                      Middle
                    </span>
                    <span>52%</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-200"></span>
                      Senior
                    </span>
                    <span>19%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F9F9FA] p-5 lg:p-8 rounded-2xl w-full max-w-3xl mx-auto">
              {/* Title */}
              <h1 className="lg:text-[32px] text-black text-xl font-semibold leading-[40px] mb-6">
                По формату работы
              </h1>

              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Donut Image */}
                <div className="flex justify-center flex-shrink-0">
                  <Image
                    src="/donut3.png"
                    alt="donut"
                    width={200}
                    height={200}
                    className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                  />
                </div>

                <div className="flex text-black flex-col justify-center w-full gap-3">
                  <div className="flex  justify-between text-base">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-black"></span>
                      Проект / парттайм
                    </span>
                    <span>63%</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                      Фултайм /найм
                    </span>
                    <span>37%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
