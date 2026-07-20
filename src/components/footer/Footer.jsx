"use client";

import Link from "next/link";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const trainingLinks = [
  { name: "Download Guide", href: "#download" },
  { name: "How It Works", href: "#training" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black text-primary">

              Realtor Academy

            </h2>

            <p className="mt-6 leading-8 text-foreground-muted">

              Helping aspiring realtors build successful careers through
              practical training, mentorship and real-world experience.

            </p>

            <div className="mt-8 flex gap-4">

              <a href="#">
                <FacebookFilled className="text-2xl text-primary hover:scale-110 transition" />
              </a>

              <a href="#">
                <InstagramFilled className="text-2xl text-primary hover:scale-110 transition" />
              </a>

              <a href="#">
                <LinkedinFilled className="text-2xl text-primary hover:scale-110 transition" />
              </a>

              <a href="#">
                <YoutubeFilled className="text-2xl text-primary hover:scale-110 transition" />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold">

              Quick Links

            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {quickLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground-muted hover:text-primary transition"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>

          {/* Training */}

          <div>

            <h3 className="text-xl font-bold">

              Training

            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {trainingLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground-muted hover:text-primary transition"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold">

              Contact

            </h3>

            <div className="mt-6 space-y-4 text-foreground-muted">

              <p>📍 Abuja, Nigeria</p>

              <p>📞 +234 801 234 5678</p>

              <p>✉ hello@realtoracademy.com</p>

            </div>

            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-primary
              px-6
              py-3
              text-white
              "
            >

              <WhatsAppOutlined />

              Chat on WhatsApp

            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-border">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 lg:flex-row">

          <p className="text-sm text-foreground-muted">

            © {new Date().getFullYear()} Realtor Aanuoluwapo.
            All rights reserved.

          </p>

          <div className="flex gap-8 text-sm">

            <Link href="#">

              Privacy Policy

            </Link>

            <Link href="#">

              Terms & Conditions

            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}