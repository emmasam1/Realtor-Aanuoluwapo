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

      <div className="relative overflow-hidden rounded-[40px] border border-border bg-card p-5 shadow-2xl">

        <img
          src="/ceo2.jpeg"
          alt="Mentor"
          className="w-full rounded-[30px]"
        />

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