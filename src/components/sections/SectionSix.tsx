import Image from "next/image";
import React from "react";

export default function SectionSix() {
  const data = [
    {
      head: "1 war",
      title: "Создайте резюме или вакансию",
      para: "Вы можете создавать два типа профилей. Создавайте множество профилей, если вам нужно собрать команду под проект",
      img: "/iPhone.png",
    },
    {
      head: "2 war",
      title: "Получите подборку подходящих анкет",
      para: "Больше никакого спама: вы сами просматриваете  профили или отклоняете их, получая новые и более релевантные",
      img: "/iPhone2.png",
    },
    {

      head: "3 war",
      title: "Получайте лайки и начинайте общаться",
      para: "Вы можете создавать два типа профилей. Создавайте множество профилей, если вам нужно собрать команду под проект",
      img: "/iPhone3.png",
    },
    
  ];
  return (
    <main className="dark:bg-white">


    <section className="px-7 dark:bg-white max-w-[1600px] 2xl:mx-auto md:px-14 lg:py-20 md:py-0  pb-28 lg:pb-32 ">
      <div>
        <div className="lg:text-center  text-black lg:max-w-3xl lg:mx-auto">
          <h1 className="font-lato text-[28px] md:text-[42px] lg:text-[48px] font-semibold lg:font-bold leading-[34px] lg:leading-[52px] text-black">
            Запуск мгновенно. Только по делу. Приватность под контролем{" "}
          </h1>
          <p className="font-lato mt-5 mx-auto text-[16px] md:text-[18px] text-black font-normal leading-[24px] lg:leading-[26px] max-w-2xl">
            Создайте вакансию меньше чем за минуту, без регистрации. Никакого
            спама и случайных контактов, только подборка подходящих профилей.
            Общение через Telegram — ваши контакты видят с вашего согласия.
          </p>
          <div className="text-center my-5 lg:my-0 ">
            <button className="p-3  px-6 rounded-full bg-[#3990FF] text-white mt-6">
              Создать вакансию за 30 секунд
            </button>
          </div>
        </div>
        {/* mobile card */}

        <div>
          <div className="lg:mt-14 grid gap-4 lg:grid-cols-3">
            {data.map((item, index) => (
              <div key={index} className="text-center text-black ">
                <h1 className="my-5 text-[24px] leading-[32px] lg:text-[40px] lg:leading-[52px] font-caveat">{item.head}</h1>
                <div className="bg-[#F7F7F7] rounded-3xl px-6  pt-5">
                  <div className="w-64 space-y-4 mb-5 mx-auto">
                    <h1 className="text-[20px]  leading-[28px] lg:text-[24px] lg:leading-[32px] font-semibold font-lato" >{item.title}</h1>
                    <p className="font-light text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px]" >{item.para}</p>
                  </div>


                  <Image src={item.img} width={690} quality={100} height={500} className="mx-auto" alt="iphone" />
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
