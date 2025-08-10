import Image from "next/image";
import React from "react";

export default function SectiontThree() {
  return (
    <section className="px-7 max-w-[1600px] mx-auto md:px-14 lg:px-30 pb-16 lg:pb-32 lg:py-20 ">
      <div className="hidden lg:grid grid-cols-1">
        <div className="flex flex-col lg:flex-row justify-between gap-6 py-5 items-center ">
          <div className="w-full md:max-w-xl lg:max-w-3xl relative">
            <h1 className="font-lato text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[52px] text-black">
              Собрали главное о специалистах на Relevants — в цифрах
              и диаграммах
            </h1>
            <p className="font-lato mt-5 text-[16px] md:text-[18px] text-black font-normal leading-[28px] lg:max-w-md">
              Это поможет быстро понять, кого можно найти через Relevants, какие
              направления самые активные и с кем чаще всего стоит
              сотрудничество.
            </p>
            <div className="absolute hidden lg:flex -bottom-6 right-3 " >
              <Image
                src="/vector325.svg"
                alt="arrow"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/donut1.png"
              alt="donut"
              width={650}
              height={200}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 py-5 items-center ">
          <div className="w-full md:max-wxl">
            <Image
              src="/donut1.png"
              alt="donut"
              width={650}
              height={200}
              className="w-full h-full"
            />
          </div>
          <div className="w-full md:max--2xl">
            <Image
              src="/donut1.png"
              alt="donut"
              width={650}
              height={200}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
       <div className="lg:hidden mt-10 grid grid-cols-1 lg:place-items-center">
        <div className="flex flex-col lg:flex-row justify-between gap-6 items-center ">
          <div className="w-full sm:max-w-xl lg:max-w-[645px] relative">
            <h1 className="font-lato text-[28px] font-semibold leading-[34px] text-black">
              Собрали главное о специалистах на Relevants — в цифрах
              и диаграммах
            </h1>
            <p className="font-lato mt-5 text-[16px] text-black font-normal leading-[24px] lg:max-w-md">
              Это поможет быстро понять, кого можно найти через Relevants, какие
              направления самые активные и с кем чаще всего стоит
              сотрудничество.
            </p>
            
          </div>
          <div className="w-full md:max-w-2xl">
            <Image
              src="/mobdonut1.png"
              alt="donut"
              width={650}
              height={200}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 py-4 items-center ">
          <div className="w-full md:max-w-2xl">
            <Image
              src="/mobdonut2.png"
              alt="donut"
              width={650}
              height={200}
              className=""
            />
          </div>
          <div className="w-full md:max-w-2xl">
            <Image
              src="/mobdonut3.png"
              alt="donut"
              width={650}
              height={200}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
