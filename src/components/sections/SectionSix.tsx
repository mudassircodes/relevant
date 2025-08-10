import Image from "next/image";
import React from "react";

export default function SectionSix() {
  return (
    <section className="px-7 max-w-[1600px] 2xl:mx-auto md:px-14 lg:py-20 md:py-0  pb-28 lg:pb-32 ">
      <div>
        <div className="lg:text-center lg:max-w-3xl lg:mx-auto">
          <h1 className="font-lato text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold lg:font-bold leading-[34px] lg:leading-[52px] text-black">
            Запуск мгновенно. Только по делу. Приватность под контролем{" "}
          </h1>
          <p className="font-lato mt-5 mx-auto text-[16px] md:text-[18px] text-black font-normal leading-[24px] lg:leading-[26px] max-w-2xl">
            Создайте вакансию меньше чем за минуту, без регистрации. Никакого
            спама и случайных контактов, только подборка подходящих профилей.
            Общение через Telegram — ваши контакты видят с вашего согласия.
          </p>
          <div className="text-center">
            <button className="p-3  px-6 rounded-full bg-[#3990FF] text-white mt-6">
              Создать вакансию за 30 секунд
            </button>
          </div>
        </div>
        <div>
          <div className="mt-14 hidden lg:flex">
            <Image
              src="/cardSix.png"
              height={300}
              width={1300}
              quality={100}
              alt="image"
            />
          </div>
          <div className=" mt-14 lg:hidden">
            <Image
              src="/cardSixMob.png"
              height={300}
              width={1300}
              quality={100}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
