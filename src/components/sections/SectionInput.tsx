import React from "react";

export default function SectionInput() {
  return (
    <main className="dark:bg-white">
      <section className="px-7 font-lato dark:bg-white max-w-[1600px] 2xl:mx-auto md:px-14 mt-5 md:py-0 lg:py-28 ">
        <div className="bg-[#DDF1FF] text-black rounded-2xl p-7 lg:p-20 ">
          <div className="lg:max-w-3xl">
            <h1 className="text-[28px] font-semibold leading-[34px] lg:font-bold lg:text-[48px] lg:leading-[52px]">
              Найдите специалиста сейчас, система cпрогнозирует шанс мэтча
            </h1>
            <p className="text-[14px] leading-[20px] lg:text-[18px] mt-5 lg:leading-[26px]">
              Вы сразу увидите тех, кто уже доступен под ваш запрос
            </p>
          </div>
          <div>
            <div className="flex lg:flex-row flex-col gap-3 mt-5 lg:mt-10">
              <input
                type="text"
                placeholder="Введите название специалиста или услуги"
                className="w-full bg-white px-7 py-4 outline-none border-none rounded-full"
              />
              <button className="bg-[#3990FF] text-white rounded-full px-28 py-4">
                Найти
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
