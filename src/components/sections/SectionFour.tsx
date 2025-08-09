import Image from "next/image";
import React from "react";

export default function SectionFour() {
  return (
    <section className="px-7 max-w-[1600px] 2xl:mx-auto md:px-14 pb-16 lg:pb-32 ">
      <div className="hidden lg:flex flex-col" >
        <div className="font-lato text-center lg:max-w-3xl mx-auto mb-5  space-y-4">
          <h1 className="text-[48px] font-bold leading-[52px]">
            Посмотрите, на какие задачи уже нанимают специалистов
          </h1>
          <p className="text-[18px] font-normal leading-[26px] ">
            Вот как распределены профили — по сферам и задачам, с которыми они
            уже работают.
          </p>
        </div>

        <div className="flex flex-col gap-5 w-full justify-center items-center" >
          <Image
            src="/sect4.png"
            alt="chart"
            width={550}
            height={500}
            quality={100}
            className="h-full w-full"
          />{" "}
          <Image
            src="/sect4b.png"
            alt="chart"
            width={550}
            height={500}
            quality={100}
            className="h-full w-full"
          />{" "}
          <Image
            src="/sect4c.png"
            alt="chart"
            width={550}
            height={500}
            quality={100}
            className="h-full w-full"
          />{" "}
        </div>
      </div>
        <div className="lg:hidden mt-10" >
        <div className="font-lato text-left max-w-xs mb-5 space-y-4">
          <h1 className="text-[28px] font-semibold leading-[34px]">
            Посмотрите, на какие задачи уже нанимают специалистов
          </h1>
          <p className="text-[16px] font-normal leading-[24px] ">
            Вот как распределены профили — по сферам и задачам, с которыми они
            уже работают.
          </p>
        </div>

        <div className="flex flex-col gap-5 w-full justify-center items-center" >
          <Image
            src="/sect4mob.png"
            alt="chart"
            width={550}
            height={500}
            quality={100}
            className="h-full w-full"
          />{" "}
          {/* <Image
            src="/sect4b.png"
            alt="chart"
            width={550}
            height={500}
            quality={100}
            className="h-full w-full"
          />{" "}
          <Image
            src="/sect4c.png"
            alt="chart"
            width={550}
            height={500}
            quality={100}
            className="h-full w-full"
          />{" "} */}
        </div>
      </div>
    </section>
  );
}
