"use client";

import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[40px] bg-primary/10 blur-3xl" />

      {/* Image Card */}

     <div className="rounded-[40px] overflow-hidden border border-border shadow-2xl">
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-[550px] w-[550px] rounded-full bg-primary opacity-10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary opacity-10 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-5 blur-[120px]" />
      </div>
        
        <img src="/ceo1.jpeg" alt="Realtor" className="w-full" />

              <div className="absolute right-20 top-24 h-20 w-20 rounded-full border border-primary/20" />

      <div className="absolute left-20 bottom-24 h-12 w-12 rounded-full border border-primary/20" />
      </div>

      {/* Experience */}

      <div className="absolute -bottom-8 left-6 rounded-3xl border border-border bg-card px-6 py-5 shadow-xl">

        <h3 className="text-3xl font-black text-primary">

          7+

        </h3>

        <p className="text-sm text-foreground-muted">

          Years Experience

        </p>

      </div>

      {/* Students */}

      <div className="absolute -top-8 right-6 rounded-3xl border border-border bg-card px-6 py-5 shadow-xl">

        <h3 className="text-3xl font-black text-primary">

          500+

        </h3>

        <p className="text-sm text-foreground-muted">

          Students

        </p>

      </div>
    </motion.div>
  );
}