import { Hero } from "@/components/Hero"
import { HeroSection } from "@/components/sections/HeroSection"
import SectionFour from "@/components/sections/SectionFour"
import SectiontThree from "@/components/sections/SectiontThree"

export default function HomePage() {
  return (
    <div className="flex justify-center flex-col">
      {/* Hero Section */}
      <Hero/>
      <HeroSection />
      <SectiontThree/>
      <SectionFour/>
    </div>
  )
}
