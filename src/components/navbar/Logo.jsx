"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
          R
        </div>

        <div>
          <h2 className="font-bold text-xl text-foreground">
            Realtor Aanuoluwapo
          </h2>

          <p className="text-xs text-foreground-muted">
            Learn • Invest • Grow
          </p>
        </div>
      </div>
    </Link>
  );
}