import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <main className="dark:bg-white" >

    <section className="bg-[#ddf1ff] rounded-b-[60px] " >

    <div className="flex flex-col lg:flex-row justify-between items-center w-full xl:max-w-[1600px] mx-auto md:px-14 lg:px-30 overflow-hidden rounded-b-[60px] pt-32 py-10 gap-12 px-4">
      {/* Left */}
      <div className="max-w-xl w-full">
        <div className="flex flex-col gap-8">
          <h1 className="font-lato text-[32px] sm:text-[36px] font-bold md:text-[42px] lg:text-[48px] leading-10 lg:leading-14 text-black">
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

          <p className="font-lato text-[16px] md:text-[18px] font-normal leading-[26px] text-black max-w-[480px]">
            Здесь можно нанять специалиста на проект, задачу напрямую — без
            чатов, спама и ожидания
          </p>

          <div className="hidden font-lato lg:flex gap-5">
            <button className="text-white bg-[#3990FF] px-6 py-3 rounded-full text-[16px] lg:text-[18px] font-medium leading-[26px]">
              Разместить задачу
            </button>
            <button className="text-blue-600 border-2 border-[#3990FF] px-6 py-3 rounded-full text-[16px] lg:text-[18px] leading-[26px] font-medium ">
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

        <div className="flex lg:hidden mt-16 px-16 justify-center flex-col gap-4">
          <Link
            href="#"
            className="text-white border-2  border-[#3990FF] bg-[#3990FF] py-3 px-4 rounded-full text-sm font-medium text-center"
          > 
            Разместить задачу
          </Link>
          <Link
            href="#"
            className="text-blue-600 border-2 border-[#3990FF] py-3 px-4 rounded-full text-sm font-medium text-center"
          >
            Найти исполнителя
          </Link>
        </div>
      </div>
    </div>
    </section>
    </main>


  );
};
