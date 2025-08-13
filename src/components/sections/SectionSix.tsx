import Image from "next/image";
import React from "react";
import { iphoneData } from "@/constant/index";

export default function SectionSix() {
  return (
    <main className="dark:bg-white ">
      <section className="px-7 dark:bg-white max-w-[1600px] 2xl:mx-auto md:px-14  ">
        <div>
          <div className="lg:text-center text-black lg:max-w-4xl lg:mx-auto flex flex-col gap-[20px] lg:gap-[32px]">
            <h1 className="font-lato text-[28px] md:text-[42px] lg:text-[48px] font-semibold  leading-[34px] lg:leading-[52px] text-black">
              Запуск мгновенно. Только по делу. Приватность под контролем{" "}
            </h1>
            <p className="font-lato  mx-auto  text-[16px] md:text-[18px] text-black font-normal leading-[24px] lg:leading-[26px] max-w-2xl">
              Создайте вакансию меньше чем за минуту, без регистрации. Никакого
              спама и случайных контактов, только подборка подходящих профилей.
              Общение через Telegram — ваши контакты видят с вашего согласия.
            </p>
            <div className="text-center  ">
              <button className="p-3 px-6 rounded-full bg-[#3990FF] text-white mt-6">
                Создать вакансию за 30 секунд
              </button>
            </div>
          </div>

          {/* mobile card */}
          <div>
            <div className="lg:mt-14 grid gap-4 lg:grid-cols-3">
              {iphoneData.map((item, index) => (
                <div key={index} className="text-center text-black ">
                  <h1 className="my-5 text-[24px] leading-[32px] lg:text-[40px] lg:leading-[52px] font-caveat">
                    {item.head}
                  </h1>

                  <div className="bg-[#F7F7F7] rounded-3xl px-10 pt-5">
                    <div className="w-64 space-y-4 mb-5 mx-auto">
                      <h1 className="text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] font-semibold font-lato">
                        {item.title}
                      </h1>
                      <p className="font-light text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px]">
                        {item.para}
                      </p>
                    </div>

                    {/* Image wrapper */}
                    <div className="relative w-fit mx-auto">
                      <Image
                        src={item.img}
                        width={690}
                        height={500}
                        quality={100}
                        className="mx-auto"
                        alt="iphone"
                      />

                      {/* icon for 2nd card */}
                      {item.img === "/iPhone1.png" && (
                        <Image
                          src="/icons/thumb.svg"
                          width={90}
                          height={90}
                          alt="icon"
                          className="absolute  xl:w-24 xl:h-24 w-16 h-16  z-20  bottom-5 -right-7 xl:bottom-10 xl:-right-10"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
