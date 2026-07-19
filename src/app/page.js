import Hero from "@/components/hero/Hero";
import WhyChoose from "@/components/whyChoose/WhyChoose";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Process from "@/components/process/Process";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import DownloadCTA from "@/components/cta/DownloadCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
    </main>
  );
}