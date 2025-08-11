"use client";

import Link from "next/link";
import Image from "next/image";

const avatarData = [
  {
    image: "/image1.png",
    name: "Digital-агентство",
    bgColor: "#E6E6FA",
  },
  {
    image: "/image2.png",
    name: "Production студия",
    bgColor: "#FCE4EC",
  },
  {
    image: "/image3.png",
    name: "Дизайн студия",
    bgColor: "#E6FFE6",
  },
  {
    image: "/image4.png",
    name: "Фрилансеры",
    bgColor: "#FDF6E3",
  },
  {
    image: "/image5.png",
    name: "Предприниматели",
    bgColor: "#E6F0FA",
  },
];

const mobileAvatarData = [
  {
    image: "/image1.png",
    name: "Digital-агентство",
    bgColor: "#E6E6FA",
  },
  {
    image: "/image2.png",
    name: "Production студия",
    bgColor: "#FCE4EC",
  },
  {
    image: "/image3.png",
    name: "Дизайн студия",
    bgColor: "#E6FFE6",
  },
  {
    image: "/image4.png",
    name: "Фрилансеры",
    bgColor: "#FDF6E3",
  },
  {
    image: "/image5.png",
    name: "Предприниматели",
    bgColor: "#E6F0FA",
  },
  {
    image: "/image6.png",
    name: "Продакт менеджеры",
    bgColor: "#E8F4FD",
  },
];

export function HeroSection() {
  return (
    <main className="dark:bg-white">

    <section className="w-full xl:max-w-[1600px] mx-auto bg-white py-16 sm:py-12 lg:py-32  z-0">
      <div className="  mx-auto px-7">
        <div className="text-left sm:text-center">
          {/* Main Heading */}
          <div className=" lg:max-w-2xl font-lato pb-2 lg:pb-10 w-full mx-auto ">
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#333333] leading-[34px] lg:leading-[52px] mb-4 xs:mb-4 sm:mb-6 sm:mx-auto">
              Мы помогаем собирать команды по всему миру
            </h1>

            {/* Subheading */}
            <div className="text-[16px] md:text-[18px] text-[#666666] leading-[24px] lg:leading-[26px] font-normal sm:mx-auto mb-6 xs:mb-8 sm:mb-12 text-left sm:text-center">
              <p className="mb-4">
                С Relevants вы быстрее запускаете проекты — за счёт точного
                AI-подбора фрилансеров и сотрудников под ваши задачи.
              </p>
              <p className="mb-4">
                Поиск — как в TikTok: листаете подборку анкет и выбираете тех,
                кто вам подходит. При взаимном мэтче контакты приходят в
                Telegram — быстро, удобно, без лишних действий.
              </p>
            </div>
          </div>

          {/* "с нами работают" text - mobile */}
          <div className="text-center mb-4 lg:hidden">
            <p className="text-[24px] leading-6 font-caveat font-normal text-[#333333]">
              с нами{" "}
              <span className="relative px-1">
                  работают 
                  <div className="absolute -rotate-12 top-5 right-0" >

                  <img src='/underline.svg' className="w-14" alt="" />
                  </div>
                </span>
            </p>
          </div>

          {/* Avatar Cards */}
          <div className="flex justify-center items-center mb-4 xs:mb-6 sm:mb-8 relative">
            {/* "с нами работают" text positioned on top of last 2 cards - desktop only */}
            <div className="absolute overflow-hidden right-60 top-0 -mt-10 z-10 hidden lg:block rotate-12  overflowhidden ">
              <p className="text-[40px] leading-[82px] font-caveat font-normal text-[#333333] transform  origin-bottom-right">
                с нами{" "}
                <span className="relative px-1">
                  работают 
                  <div className="absolute -rotate-12 -bottom-2 right-0" >

                  <img src='/underline.svg' className="object-contain" alt="" />
                  </div>
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 ">
              {/* Mobile cards (6 cards) */}
              <div className="contents lg:hidden">
                {mobileAvatarData.map((avatar, index) => (
                  <div
                    key={`mobile-${index}`}
                    className="flex flex-col p-[8px] items-center gap-2 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F9FA] mobile-no-transform"
                  >
                    <div
                      className="rounded-[18px] p-3"
                      style={{ backgroundColor: avatar.bgColor }}
                    >
                      <Image
                        src={avatar.image}
                        alt={avatar.name}
                        width={120}
                        quality={100}
                        height={100}
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <div className="text-center ">
                      <p className="text-[20px] leading-7 font-caveat font-normal text-[#000000]">
                        {avatar.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop cards (5 cards with arch effect) */}
              <div className="hidden lg:contents">
                {avatarData.map((avatar, index) => (
                  <div
                    key={`desktop-${index}`}
                    className="flex flex-col justify-between items-center p-1 xs:p-1 sm:p-2 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F9FA]"
                    style={{
                      transform: `translateY(${
                        Math.abs(index - 2) * 32 +
                        (index === 0
                          ? 70
                          : index === 1
                          ? -11
                          : index === 3
                          ? -11
                          : index === 4
                          ? 70
                          : 0)
                      }px) translateX(${
                        (index - 2) * -28 +
                        (index === 0
                          ? 55
                          : index === 1
                          ? 5
                          : index === 3
                          ? -5
                          : index === 4
                          ? -55
                          : 0)
                      }px) rotate(${
                        (index - 2) * 8 +
                        (index === 0
                          ? -3
                          : index === 1
                          ? -4
                          : index === 3
                          ? 4
                          : index === 4
                          ? 3
                          : 0)
                      }deg)`,
                      zIndex: 5 - Math.abs(index - 2),
                    }}
                  >
                    {/* w-20 h-28 xs:w-24 xs:h-32 sm:w-20 sm:h-28 md:w-24 md:h-32 */}
                    <div
                      className="mb-2 sm:mb-3 rounded-lg p-2 xs:p-3 sm:p-4 lg:p-6 "
                      style={{ backgroundColor: avatar.bgColor }}
                    >
                      <Image
                        src={avatar.image}
                        alt={avatar.name}
                        width={200}
                        height={2000}
                        quality={100}
                        className="object-contain w-48 h-48 "
                      />
                    </div>
                    <div className="text-center ">
                      <p className=" lg:text-[32px] font-caveat font-normal leading-[42px] text-[#000000]">
                        {avatar.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Small text */}
          <p className="text-[16px] lg:text-[18px] leading-[26px] font-lato font-normal   text-[#666666] text-center mb-2  pt-[32px] lg:mt-10 lg:pt-4">
            Расскажите, что вы ищете
          </p>

          <div className="text-center">
            <button className="inline-block bg-[#3990FF] text-white px-4 py-3 font-lato rounded-full font-light lg:font-medium text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] hover:bg-[#0056b3] transition-colors duration-200 shadow-md hover:shadow-lg">
              Подобрать исполнителя → 30 секунд
            </button>
          </div>
        </div>
      </div>
    </section>
    </main>

  );
}
