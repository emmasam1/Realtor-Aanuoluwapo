"use client";

import { motion } from "framer-motion";
import {
  ArrowRightOutlined,
  DownloadOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { FaWhatsapp } from "react-icons/fa";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2"
      >
        <span className="text-lg">🏡</span>

        <span className="text-sm font-medium text-primary">
          Nigeria's Trusted Realtor & Mentor
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: .15 }}
        viewport={{ once: true }}
        className="mt-8 text-5xl lg:text-7xl font-black leading-tight"
      >
        Build a

        <span className="block text-primary">
          Successful Career
        </span>

        In Real Estate
      </motion.h1>

      {/* Paragraph */}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .3 }}
        viewport={{ once: true }}
        className="mt-8 max-w-xl text-lg leading-9 text-foreground-muted"
      >
        Learn practical strategies for finding clients,
        closing profitable property deals and creating
        long-term wealth through real estate.

        Whether you're just starting or looking to grow,
        you'll gain real-world knowledge you can apply.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .45 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <button className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

          <DownloadOutlined />

          Download Guide

          <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />

        </button>

        <button className="group flex items-center gap-3 rounded-full border border-primary px-8 py-4 text-primary transition-all duration-300 hover:bg-primary hover:text-white">

          <FaWhatsapp />

          Join Community

        </button>
      </motion.div>

      {/* Features */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: .6 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col gap-4"
      >
        {[
          "Step-by-step mentorship",
          "WhatsApp community support",
          "Practical real estate training",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircleFilled className="text-primary text-lg" />

            <span className="text-foreground-muted">
              {item}
            </span>
          </div>
        ))}
      </motion.div>

      <HeroStats />

    </div>
  );
}