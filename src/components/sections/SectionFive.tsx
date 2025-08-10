import Image from "next/image";
import React from "react";

export default function SectionFive() {
  return (
    <section className="px-7 max-w-[1600px] 2xl:mx-auto md:px-14 py-[50px] md:py-0  pb-28 lg:pb-32 ">
      <div className="flex lg:flex-row flex-col justify-between  items-center  ">
        <div className=" w-full lg:max-w-xl">
          <h1 className="font-lato text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold lg:font-bold leading-[34px] lg:leading-[52px] text-black">
            Relevants — каждый день лучше и быстрее, растёт вместе с вами
          </h1>
          <p className="font-lato mt-5 text-[16px] md:text-[18px] text-black font-normal leading-[24px] lg:leading-[26px] lg:max-w-md">
            В отличие от множества фриланс-бирж и профессиональных соцсетей,
            наш mini-app не требует установки. Всё, что вам нужно, —
            это Telegram! <br />
            <br /> Представьте себе: вы легко находите талантливых специалистов
            или интересные проекты не только в России, но и за рубежом.
          </p>
        </div>
        <div className=" mt-10 lg:mt-0">
          <Image
            src="/sect5png.svg"
            height={300}
            width={700}
            quality={100}
            alt="image"
          />
        </div>
    
      </div>
        <div className="hidden mt-5 lg:flex">
          <Image
            src="/cards.png"
            height={300}
            width={1400}
            quality={100}
            alt="image"
          />
        </div>
       <div className="lg:hidden mt-5">
          <Image
            src="/sect5downmob.png"
            height={300}
            width={700}
            quality={100}
            alt="image"
          />
        </div>
    </section>
  );
}
