"use client";

import {
  CheckCircleFilled,
  DownloadOutlined,
} from "@ant-design/icons";

import Badge from "../common/Badge";
import Button from "../common/Button";

const points = [
  "Step-by-step real estate training",
  "One-on-one mentorship",
  "Access to an active WhatsApp community",
  "Practical property investment knowledge",
];

export default function AboutContent() {
  return (
    <div>

      <Badge>

        ABOUT YOUR MENTOR

      </Badge>

      <h2 className="mt-8 text-4xl font-black leading-tight lg:text-5xl">

        Learn From Someone Who Understands The Real Estate Industry

      </h2>

      <p className="mt-8 text-lg leading-9 text-foreground-muted">

        I believe real estate should be practical, understandable and
        profitable for anyone willing to learn.

        My mission is to guide aspiring realtors and property investors
        with practical knowledge, mentorship and continuous support that
        prepares them for real opportunities.

      </p>

      <div className="mt-10 space-y-5">

        {points.map((item) => (

          <div
            key={item}
            className="flex items-center gap-4"
          >

            <CheckCircleFilled className="text-xl text-primary" />

            <span className="text-foreground-muted">

              {item}

            </span>

          </div>

        ))}

      </div>

      <div className="mt-12">

        <Button
          icon={<DownloadOutlined />}
        >
          Download Training Guide
        </Button>

      </div>

    </div>
  );
}