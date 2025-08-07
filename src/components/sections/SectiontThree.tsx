import Image from "next/image";
import React from "react";

export default function SectiontThree() {
  return (
    <section className="px-7 md:px-14 lg:px-30 ">
      <div className="grid grid-cols-1 lg:place-items-center">
        <div className="flex flex-col lg:flex-row justify-between gap-6 py-5 items-center ">
          <div className="w-full md:max-w-xl lg:max-w-2xl relative">
            <h1 className="font-raleway text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-black leading-tight text-black">
              Собрали главное о специалистах на Relevants — в цифрах
              и диаграммах
            </h1>
            <p className="font-raleway mt-5 text-[16px] md:text-[18px] text-black lg:max-w-lg">
              Это поможет быстро понять, кого можно найти через Relevants, какие
              направления самые активные и с кем чаще всего стоит
              сотрудничество.
            </p>
            <div className="absolute hidden lg:flex right-10 " >
              <Image
                src="/vector325.svg"
                alt="arrow"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="w-full md:max-w-2xl">
            <Image
              src="/donut1.png"
              alt="donut"
              width={650}
              height={200}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 py-5 items-center ">
          <div className="w-full md:max-w-2xl">
            <Image
              src="/donut1.png"
              alt="donut"
              width={650}
              height={200}
              className=""
            />
          </div>
          <div className="w-full md:max-w-2xl">
            <Image
              src="/donut1.png"
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
