import Image from "next/image";
import React from "react";

export default function SectionFive() {
  return (
    <main className="dark:bg-white">
      <section className="px-4 dark:bg-white max-w-[1600px] 2xl:mx-auto md:px-14">
        <div className="flex lg:flex-row flex-col justify-between  items-center  ">
          <div className=" w-full lg:max-w-sm xl:max-w-lg">
            <h1 className="font-lato text-[28px]  md:text-[35px] xl:text-[48px] font-semibold lg:font-bold leading-[34px] lg:leading-[52px] text-black">
              Relevants — каждый день лучше и быстрее, растёт вместе с вами
            </h1>
            <p className="font-lato mt-5 text-[16px] md:text-[18px] text-black font-normal leading-[24px] lg:leading-[26px] lg:max-w-md">
              В отличие от множества фриланс-бирж и профессиональных соцсетей,
              наш mini-app не требует установки. Всё, что вам нужно, —
              это Telegram! <br />
              <br /> Представьте себе: вы легко находите талантливых
              специалистов или интересные проекты не только в России,
              но и за рубежом.
            </p>
          </div>

          <div className="relative mt-10 hidden lg:flex lg:mt-0">
            <Image
              src="/hand.svg"
              height={450}
              width={450}
              quality={100}
              alt="image"
              className="lg:max-w-[450px] lg:w-[300px] lg:h-[300px] xl:max-w-[450px] xl:w-[450px] xl:h-[500px] md:max-w-[400px] md:w-[400px] md:h-[400px]"
            />
            <div className="absolute -top-4 xl:top-7 -left-20 xl:-left-24 xl:w-[380px] xl:h-[84px] transform -translate-x-1/2 sm:w-[350px] sm:h-[70px] md:w-[400px] md:h-[78px] lg:w-[320px] lg:h-[64px]">
              <img src="/hand-card1.svg" alt="hand card" />
            </div>
            <div className="absolute bottom-20 xl:bottom-32 left-[40%] xl:left-[37%] transform xl:w-[400px] xl:h-[84px] -translate-x-1/2 sm:w-[350px] sm:h-[70px] md:w-[400px] md:h-[78px] lg:w-[290px] lg:h-[64px]">
              <img src="/hand-card2.svg" alt="hand card" />
            </div>
          </div>

          <div className="lg:hidden">
            <Image
              src="/sect5pngmob.png"
              height={300}
              width={500}
              quality={100}
              alt="image"
              className="mt-5"
            />
          </div>
        </div>

        <div className="grid text-black  grid-cols-1 py-10 lg:grid-cols-2 gap-5 ">
          <div className="flex flex-col gap-4">
            <div className="border-[2.5px] transition-all rounded-3xl p-5 border-blue-400">
              <span className="p-2 px-4 text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] font-medium rounded-full bg-blue-200">
                Наглядная статистика
              </span>
              <p className="mt-6 text-[16px] leading-[24px] ">
                Мы сделали статистику просмотров вашего профиля — все наглядно
                на любом отрезке времени. И покажем реальные ставки специалистов
                с похожими навыками и опытом в вашей сфере.
              </p>
            </div>

            <div className="border-[2.5px] transition-all rounded-3xl p-5 border-[#983098]">
              <span className="p-2 px-4 text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] font-medium rounded-full bg-purple-200">
                Персонализация
              </span>
              <p className="mt-6 text-[16px] leading-[24px]">
                Искусственный интеллект все время обучается и с каждым Вашем
                мэтчем, побираются все более и более релевантные Профили
                под вас.
                <br />
                И все это в суперприятной механики пролистывания страниц, всем
                полюбившихся Тик-ток и Ютуб Шортс.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:mt-14  gap-4">
            <div className="border-[2.5px] transition-all rounded-3xl p-5 border-red-400">
              <span className="p-2 px-4 text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] font-medium rounded-full bg-red-200">
                Гибкость
              </span>
              <p className="mt-6 text-[16px] leading-[24px]">
                Выбирайте себе специалиста в долгосрочное сотрудничество
                или на короткий проект по определённому скиллу, по доходу,
                по гео-локации и даже по удобному только вам формату работы
                с заданной разницей во времени.
              </p>
            </div>

            <div className="border-[2.5px] transition-all rounded-3xl p-5 border-green-400">
              <span className="p-2 px-4s text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px]font-medium rounded-full bg-green-200">
                Безопасная среда
              </span>
              <p className="mt-6 text-[16px] leading-[24px]">
                Наш искусственный интеллект проверяет при создании контента
                каждый шаг и блокирует заведомо подозрительные и фейковые
                Профили, запрещённый контент и даже включая нежелательные фото
                Профиля. Также участники самостоятельно блокируют
                недобросовестных пользователей через нашу форму обратной связи.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
