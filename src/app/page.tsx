import { Hero } from "@/components/Hero"
import { HeroSection } from "@/components/sections/HeroSection"
import SectionFive from "@/components/sections/SectionFive"
import SectionFour from "@/components/sections/SectionFour"
import SectionInput from "@/components/sections/SectionInput"
import SectionSix from "@/components/sections/SectionSix"
import SectionSlider from "@/components/sections/SectionSlider"
import SectiontThree from "@/components/sections/SectiontThree"

export default function HomePage() {
  return (
    <div className="flex justify-center flex-col">
      {/* Hero Section */}
      <Hero/>
      <HeroSection />
      <SectiontThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionInput/>
      <SectionSlider/>
    </div>
  )
}
