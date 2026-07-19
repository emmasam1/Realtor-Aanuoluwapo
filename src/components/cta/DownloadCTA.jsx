"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  DownloadOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

import Button from "../common/Button";
import Section from "../common/Section";
import PaymentModal from "./PaymentModal";

export default function DownloadCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Section id="download">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-primary/20
          bg-gradient-to-br
          from-card
          via-card
          to-primary/5
          p-10
          shadow-xl
          lg:p-16
          "
        >

          {/* Glow */}

          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10 text-center">

            <span
              className="
              inline-flex
              rounded-full
              bg-primary/10
              px-5
              py-2
              font-semibold
              text-primary
              "
            >
              REALTOR TRAINING GUIDE
            </span>

            <h2 className="mt-8 text-4xl font-black lg:text-6xl">

              Ready To Start Your
              <br />

              Real Estate Journey?

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-foreground-muted">

              Download the complete Realtor Training Guide and learn the
              practical skills, strategies and mindset used by successful
              real estate professionals.

            </p>

            <div className="mt-10">

              <Button
                icon={<DownloadOutlined />}
                onClick={() => setOpen(true)}
              >
                Download Guide
              </Button>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8">

              <div className="flex items-center gap-3">

                <CheckCircleFilled className="text-primary" />

                Secure Payment

              </div>

              <div className="flex items-center gap-3">

                <CheckCircleFilled className="text-primary" />

                One-Time Download Link

              </div>

              <div className="flex items-center gap-3">

                <CheckCircleFilled className="text-primary" />

                WhatsApp Support

              </div>

            </div>

          </div>

        </motion.div>

      </Section>

      <PaymentModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </>
  );
}