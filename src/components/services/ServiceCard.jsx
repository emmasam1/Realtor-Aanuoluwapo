"use client";

import { motion } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function ServiceCard({
  icon,
  title,
 description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .3,
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
      hover:border-primary/30
      hover:shadow-2xl
      "
    >
      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

      {/* Icon */}

      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl text-primary">

        {icon}

      </div>

      <h3 className="text-2xl font-bold">

        {title}

      </h3>

      <p className="mt-5 leading-8 text-foreground-muted">

        {description}

      </p>

      <button className="mt-8 flex items-center gap-2 font-semibold text-primary">

        Learn More

        <ArrowRightOutlined className="transition-transform group-hover:translate-x-2" />

      </button>
    </motion.div>
  );
}