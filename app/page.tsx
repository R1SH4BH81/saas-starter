import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#070919] text-white">
      <Hero />
      <LogoStrip />
      <Features />
      <HowItWorks />
      <Metrics />
      <Testimonial />
      <Pricing />
      <Faq />
      <CtaBand />
      <Footer />
    </main>
  );
}
