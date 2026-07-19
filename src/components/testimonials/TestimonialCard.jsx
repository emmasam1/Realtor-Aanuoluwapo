"use client";

import { motion } from "framer-motion";
import { Rate, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function TestimonialCard({
  name,
  role,
  review,
  image,
  rating,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
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
      h-full
      "
    >
      {/* Glow */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

      {/* Quote */}

      <div className="text-7xl font-black leading-none text-primary/10">
        "
      </div>

      <Rate
        disabled
        defaultValue={rating}
        className="mb-6 text-primary"
      />

      <p className="leading-8 text-foreground-muted italic">
        {review}
      </p>

      <div className="mt-8 flex items-center gap-4">

        <Avatar
          size={60}
          src={image}
          icon={<UserOutlined />}
        />

        <div>

          <h4 className="font-bold text-lg">
            {name}
          </h4>

          <p className="text-sm text-foreground-muted">
            {role}
          </p>

        </div>

      </div>
    </motion.div>
  );
}