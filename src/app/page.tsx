import { Hero } from "@/components/home/Hero";
import BannerCTA from "@/components/home/BannerCTA";
import Faq from "@/components/home/Faq";
import { HeroSection } from "@/components/home/TeamSection";
import SectionFive from "@/components/home/Advantages";
import SectionFour from "@/components/home/SectionFour";
import SectionInput from "@/components/home/InputBanner";
import SectionSix from "@/components/home/Instructions";
import SectionSlider from "@/components/home/Testimonials";
import SectiontThree from "@/components/home/Charts";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center bg-white flex-col gap-[107px] lg:gap-[180px]">
        <Hero />
        <HeroSection />
        <SectiontThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionInput />
        <SectionSlider />
        <Faq />
        <BannerCTA />
      </div>
    </>
  );
}
