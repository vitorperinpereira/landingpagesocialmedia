import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Proof } from "@/components/sections/Proof";
import { Plans } from "@/components/sections/Plans";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import luxuryHeroBg from "@/assets/images/luxury-hero-bg.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground relative">
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.4] mix-blend-screen" 
          style={{
            backgroundImage: `url(${luxuryHeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Global Gradient Overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Features />
          <HowItWorks />
          <Proof />
          <Plans />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
