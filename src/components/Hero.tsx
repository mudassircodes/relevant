import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className="bg-[#ddf1ff]  " >

    <div className="flex flex-col lg:flex-row justify-between items-center w-full xl:max-w-[1600px] mx-auto md:px-14 lg:px-30 overflow-hidden rounded-b-[60px] py-32 gap-12 px-4">
      {/* Left */}
      <div className="max-w-xl w-full">
        <div className="flex flex-col gap-8">
          <h1 className="font-raleway text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-black leading-tight text-black">
            Relevants – получайте доступ <br className="block sm:hidden" />
            <span className="inline sm:hidden">к специалистам</span>
            <span className="hidden sm:inline">к специалистам</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10">мгновенно</span>
              <div className="absolute bottom-0 left-0 w-full z-0">
                <Image
                  src="/Vector324.svg"
                  alt="Underline"
                  width={204}
                  height={27}
                  className="w-full h-auto"
                />
              </div>
            </span>
          </h1>

          <p className="font-raleway text-[16px] md:text-[18px] text-black max-w-[480px]">
            Здесь можно нанять специалиста на проект, задачу напрямую — без
            чатов, спама и ожидания
          </p>

          <div className="hidden lg:flex gap-5">
            <button className="text-white bg-blue-600 px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-700">
              Разместить задачу
            </button>
            <button className="text-blue-600 border border-blue-600 bg-blue-50 px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-100">
              Найти исполнителя
            </button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/hero_img.png"
          alt="Hero"
          width={500}
          height={400}
          className="w-full h-auto"
          priority
        />

        <div className="flex lg:hidden mt-6 px-10 justify-center flex-col gap-4">
          <Link
            href="#"
            className="text-white bg-blue-600 py-3 px-6 rounded-full text-sm font-semibold hover:bg-blue-700 text-center"
          >
            Разместить задачу
          </Link>
          <Link
            href="#"
            className="text-blue-600 border border-blue-600 bg-blue-50 py-3 px-6 rounded-full text-sm font-semibold hover:bg-blue-100 text-center"
          >
            Найти исполнителя
          </Link>
        </div>
      </div>
    </div>
    </section>

  );
};
