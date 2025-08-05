import { Hero } from "@/components/Hero"
import { HeroSection } from "@/components/sections/HeroSection"

export default function HomePage() {
  return (
    <div className="flex justify-center flex-col">
      {/* Hero Section */}
      <Hero/>
      <HeroSection />
    </div>
  )
}
