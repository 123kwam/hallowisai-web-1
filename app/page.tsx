import { GradientMesh } from "@/components/ui/gradient-mesh";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ScrollShowcase } from "@/components/sections/scroll-showcase";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Podcast } from "@/components/sections/podcast";
import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <GradientMesh />
      <Navbar />
      <main className="relative">
        <Hero />
        <ScrollShowcase />
        <Services />
        <Process />
        <Podcast />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
