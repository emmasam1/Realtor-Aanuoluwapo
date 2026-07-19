"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import navLinks from "./navLinks";

export default function NavLinks({ mobile = false, close }) {
  const pathname = usePathname();

  return (
    <nav
      className={`${
        mobile
          ? "flex flex-col gap-8"
          : "flex items-center gap-10"
      }`}
    >
      {navLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={close}
          className={`relative font-medium transition ${
            pathname === item.href
              ? "text-primary"
              : "text-foreground hover:text-primary"
          }`}
        >
          {item.name}

          {pathname === item.href && (
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  );
}