import Image from "next/image";
import React from "react";

// Reusable Progress Component
type ProgressSectionProps = {
  title: string;
  imageSrc: string;
  data: {
    label: string;
    labels?: string;
    color: string;
    percentage: string;
  }[];
};

const ProgressSection: React.FC<ProgressSectionProps> = ({
  title,
  imageSrc,
  data,
}) => (
  <div className="bg-[#F9F9FA] p-5 lg:p-12 rounded-2xl w-full max-w-3xl mx-auto">
    <h1 className="max-md:text-[22px] lg:text-[32px] text-black text-xl font-semibold leading-[40px] mb-6">
      {title}
    </h1>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
      <div className="flex justify-center flex-shrink-0">
        <Image
          src={imageSrc}
          alt="donut"
          width={200}
          height={200}
          className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
        />
      </div>
      <div className="flex text-black flex-col justify-center w-full gap-3">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between text-base">
            <span className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
              {item.label}
              {item.labels && <span>{item.labels}</span>}
            </span>
            <span>{item.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function SectionThree() {
  // Data for the three sections
  const designData = [
    { label: "Дизайн", color: "bg-black", percentage: "49%" },
    { label: "Маркетинг", color: "bg-blue-300", percentage: "24%" },
    { label: "IT Разработка", color: "bg-green-200", percentage: "19%" },
    {
      label: "Видеомонтаж, CGI",
      labels: "и GameDev",
      color: "bg-purple-200",
      percentage: "19%",
    },
  ];

  const experienceData = [
    { label: "Junior", color: "bg-black", percentage: "29%" },
    { label: "Middle", color: "bg-blue-300", percentage: "52%" },
    { label: "Senior", color: "bg-green-200", percentage: "19%" },
  ];

  const workFormatData = [
    { label: "Проект / парттайм", color: "bg-black", percentage: "63%" },
    { label: "Фултайм / найм", color: "bg-blue-300", percentage: "37%" },
  ];

  return (
    <main className="dark:bg-white">
      <section className="px-4 dark:text-white max-w-[1600px] mx-auto md:px-14 lg:px-30">
        <div className="grid grid-cols-1">
          <div className="flex flex-col lg:flex-row justify-between gap-6 pt-4 md:pt-0  items-center">
            <div className="w-full md:max-w-xl lg:max-w-3xl lg:mr-10 relative">
              <h1 className="font-lato text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[34px] lg:leading-[48px] text-black">
                Собрали главное о специалистах на Relevants — в цифрах
                и диаграммах
              </h1>
              <p className="font-lato mt-5 text-[16px] md:text-[18px] text-black font-normal leading-[24px] lg:max-w-md">
                Это поможет быстро понять, кого можно найти через Relevants,
                какие направления самые активные и с кем чаще всего стоит
                сотрудничество.
              </p>
              <div className="absolute hidden lg:flex -bottom-6 right-3">
                <Image
                  src="/Vector325.svg"
                  alt="arrow"
                  width={80}
                  height={80}
                />
              </div>
            </div>

            {/* Direction Section */}
            <div className="bg-[#F9F9FA] p-5 lg:p-8 rounded-2xl w-full mx-auto">
              <h1 className="max-md:text-[22px] lg:text-[32px] text-black text-xl font-semibold leading-[40px] mb-6">
                По направлениям
              </h1>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex justify-center flex-shrink-0">
                  <Image
                    src="/donut1.svg"
                    alt="donut"
                    width={200}
                    height={200}
                    className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                  />
                </div>

                <div className="flex text-black flex-col justify-center w-full gap-3">
                  {designData.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-base"
                    >
                      {/* Left side: dot + stacked labels */}
                      <span className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full ${item.color}`}
                        />
                        <span className="flex flex-col leading-tight">
                          <span>{item.label}</span>
                          {item.labels && <span>{item.labels}</span>}
                        </span>
                      </span>

                      {/* Right side: percentage */}
                      <span>{item.percentage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 py-6 items-center">
            {/* Experience Section */}
            <ProgressSection
              title="По опыту"
              imageSrc="/donut2.svg"
              data={experienceData}
            />

            {/* Work Format Section */}
            <ProgressSection
              title="По формату работы"
              imageSrc="/donut3.svg"
              data={workFormatData}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
