"use client";

import Link from "next/link";

import Logo from "./Logo";
import NavLinks from "./NavLinks.jsx";

import { DownloadOutlined } from "@ant-design/icons";
import { FaWhatsapp } from "react-icons/fa";

export default function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center justify-between">
      <Logo />

      <NavLinks />

      <div className="flex items-center gap-4">
        <Link
          href="https://chat.whatsapp.com/"
          className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
        >
          <FaWhatsapp />
          Join Group
        </Link>

        <button className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2">
          <DownloadOutlined />
          Download Book
        </button>
      </div>
    </div>
  );
}
