import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TechStack } from "@/components/sections/tech-stack";
import { UseCases } from "@/components/sections/use-cases";
import { Screenshots } from "@/components/sections/screenshots";
import { Download } from "@/components/sections/download";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <UseCases />
      <Screenshots />
      <Download />
      <FAQ />
      <Footer />
    </main>
  );
}
