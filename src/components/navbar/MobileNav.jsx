"use client";

import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks.jsx";

import { FaWhatsapp } from "react-icons/fa";
import { DownloadOutlined } from "@ant-design/icons";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex lg:hidden items-center justify-between">

        <Logo />

        <Hamburger
          toggled={open}
          toggle={setOpen}
          rounded
          size={24}
        />

      </div>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 h-screen w-80 bg-background border-l border-border shadow-2xl p-8"
          >
            <div className="mb-12">
              <Hamburger
                toggled={open}
                toggle={setOpen}
                rounded
              />
            </div>

            <NavLinks
              mobile
              close={() => setOpen(false)}
            />

            <div className="mt-12 flex flex-col gap-4">

              <a
                href="https://chat.whatsapp.com/"
                className="bg-primary text-white rounded-full py-4 flex justify-center items-center gap-2"
              >
                <FaWhatsapp />

                Join WhatsApp
              </a>

              <button
                className="border border-primary rounded-full py-4 text-primary flex justify-center items-center gap-2"
              >
                <DownloadOutlined />

                Download Book
              </button>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}