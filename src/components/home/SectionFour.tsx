import React from "react";

type ProgressBarProps = {
  label: string;
  value: number;
  color: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, color }) => (
  <div className="w-full">
    <div className="flex justify-between gap-3 items-center text-sm">
      <div className="relative w-full h-10 bg-gray-100 rounded-[6px] overflow-hidden">
        <div
          className={`h-full rounded-r-[6px] ${color}`}
          style={{ width: `${value}%` }}
        ></div>
        <span className="absolute inset-y-0 left-2 flex items-center text-black whitespace-nowrap">
          {label}
        </span>
      </div>
      <p className="w-10">{value}%</p>
    </div>
  </div>
);

export default function SectionFour() {
  const stats = [
    { label: "UI/UX, веб-дизайн", value: 35, color: "bg-[#E1CBFF]" },
    { label: "Логотипы, брендинг, фирстиль", value: 10, color: "bg-[#E1CBFF]" },
    { label: "3D и Моушн-дизайн", value: 10, color: "bg-[#E1CBFF]" },
    { label: "Презентации и визуализация", value: 10, color: "bg-[#E1CBFF]" },
    { label: "Иллюстрации и Art", value: 10, color: "bg-[#E1CBFF]" },
    { label: "Прочий digital-дизайн", value: 20, color: "bg-[#E1CBFF]" },
  ];

  const stats2 = [
    { label: "SMM", value: 35, color: "bg-[#BEFACD]" },
    { label: "Таргетированная реклама", value: 15, color: "bg-[#BEFACD]" },
    { label: "Контекст и SEO", value: 10, color: "bg-[#BEFACD]" },
    { label: "Email / CRM-маркетинг", value: 10, color: "bg-[#BEFACD]" },
    { label: "Аналитика и BI", value: 10, color: "bg-[#BEFACD]" },
    { label: "Продюсирование и запуски", value: 20, color: "bg-[#BEFACD]" },
    { label: "Прочий маркетинг", value: 20, color: "bg-[#BEFACD]" },
  ];

  const stats3 = [
    { label: "Веб — и мобильная разработка", value: 35, color: "bg-[#ADDBFF]" },
    { label: "No-code / Webflow / Tilda", value: 15, color: "bg-[#ADDBFF]" },
    {
      label: "Telegram-боты и мини-приложения",
      value: 10,
      color: "bg-[#ADDBFF]",
    },
    { label: "Чат-боты и автоматизация", value: 10, color: "bg-[#ADDBFF]" },
    { label: "Нейросети и AI-интеграции", value: 5, color: "bg-[#ADDBFF]" },
    { label: "Блокчейн и токены", value: 5, color: "bg-[#ADDBFF]" },
    { label: "Прочий IT-аутсорсинг", value: 20, color: "bg-[#ADDBFF]" },
  ];

  return (
    <main className="dark:bg-white">
      <section className="px-4  dark:bg-white max-w-[1600px] 2xl:mx-auto md:px-14 ">
        <div className="flex flex-col">
          <div className="font-lato text-black lg:text-center lg:max-w-3xl mx-auto lg:mb-5  space-y-4">
            <h1 className="text-[28px] lg:text-[48px] font-semibold leading-[34px] lg:leading-[52px]">
              Посмотрите, на какие задачи уже нанимают специалистов
            </h1>
            <p className="text-[16px] lg:text-[18px] font-normal leading-[26px]">
              Вот как распределены профили — по сферам и задачам, с которыми они
              уже работают.
            </p>
          </div>

          <div className="bg-[#F9F9FA] p-5 lg:p-8 rounded-2xl w-full mt-5 lg:mt-0 lg:my-5  mx-auto">
            <div className="flex text-black font-lato relative flex-col lg:flex-row lg:items-start gap-[24px] xl:gap-[60px]">
              {/* Left Side */}
              <div className="lg:w-1/2 flex lg:flex-col items-start flex-row-reverse h-full ">
                <div className="flex lg:flex-col items-center lg:items-start justify-between mb-4 lg:mb-0">
                  <span className="text-[22px] lg:text-[64px] leading-[32px] lg:leading-[100%] font-semibold lg:font-normal">
                    49%
                  </span>
                </div>
                <div className="lg:absolute lg:w-1/2 lg:bottom-0">
                  <h2 className="text-[22px] lg:text-[32px] font-semibold leading-[32px] lg:leading-[40px] mb-2">
                    Дизайн
                  </h2>
                  <p className="text-[16px] leading-[24px] max-w-lg lg:leading-[28px] lg:text-[18px] font-normal text-gray-600">
                    Каждый второй на платформе — дизайнер. Большинство делают
                    интерфейсы и сайты
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col lg:w-1/2 gap-3 w-full">
                {stats.map((item, index) => (
                  <ProgressBar
                    key={index}
                    label={item.label}
                    value={item.value}
                    color={item.color}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#F9F9FA] text-black p-5 lg:p-8 rounded-2xl w-full my-5  mx-auto">
            <div className="flex font-lato relative flex-col lg:flex-row-reverse lg:items-start gap-[24px] xl:gap-[60px] ">
              {/* Left Side */}
              <div className="lg:w-1/2 flex items-start lg:flex-col flex-row-reverse h-full ">
                <div className="flex lg:flex-col items-center lg:items-start justify-between mb-4 lg:mb-0">
                  <span className="text-[22px] lg:text-[64px] leading-[32px] lg:leading-[100%] font-semibold lg:font-normal">
                    25%
                  </span>
                </div>
                <div className="lg:absolute lg:w-1/2 lg:bottom-0">
                  <h2 className="text-[22px] lg:text-[32px] font-semibold leading-[32px] lg:leading-[40px] mb-2">
                    Маркетинг
                  </h2>
                  <p className="text-[16px] leading-[24px] max-w-lg lg:leading-[28px] lg:text-[18px] font-normal text-gray-600">
                    Маркетологи с сильной экспертизой по запуску, анализу и
                    продвижению — от постов до сквозной аналитики.
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col lg:w-1/2 gap-3 w-full">
                {stats2.map((item, index) => (
                  <ProgressBar
                    key={index}
                    label={item.label}
                    value={item.value}
                    color={item.color}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#F9F9FA] text-black p-5 lg:p-8 rounded-2xl w-full lg:my-5 mx-auto">
            <div className="flex font-lato relative flex-col lg:flex-row lg:items-start gap-[24px] xl:gap-[60px]">
              {/* Left Side */}
              <div className="lg:w-1/2 items-start flex lg:flex-col flex-row-reverse h-full ">
                <div className="flex lg:flex-col items-center lg:items-start justify-between mb-4 lg:mb-0">
                  <span className="text-[22px] lg:text-[64px] leading-[32px] lg:leading-[100%] font-semibold lg:font-normal">
                    19%
                  </span>
                </div>
                <div className="lg:absolute lg:w-1/2 lg:bottom-0">
                  <h2 className="text-[22px] lg:text-[32px] font-semibold leading-[32px] lg:leading-[40px] mb-2">
                    IT-разработка
                  </h2>
                  <p className="text-[16px] leading-[24px] max-w-lg lg:leading-[28px] lg:text-[18px] font-normal text-gray-600">
                    Инженерные решения, Telegram-боты, no-code и сложные проекты
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col lg:w-1/2 gap-3 w-full">
                {stats3.map((item, index) => (
                  <ProgressBar
                    key={index}
                    label={item.label}
                    value={item.value}
                    color={item.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
