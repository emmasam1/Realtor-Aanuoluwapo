"use client";

import { motion } from "framer-motion";

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-border
      bg-card
      p-8
      shadow-lg
      transition-all
      duration-300
      hover:border-primary/30
      hover:shadow-2xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

      {/* Icon */}

      <div
        className="
        mb-8
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-primary/10
        text-3xl
        "
      >
        {icon}
      </div>

      <h3 className="text-2xl font-bold">

        {title}

      </h3>

      <p className="mt-4 leading-8 text-foreground-muted">

        {description}

      </p>
    </motion.div>
  );
}