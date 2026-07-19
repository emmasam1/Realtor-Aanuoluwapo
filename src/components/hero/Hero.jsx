"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <HeroContent />
          </div>

          <div className="lg:col-span-6">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
