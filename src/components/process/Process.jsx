"use client";

import {
  DownloadOutlined,
  CreditCardOutlined,
  WhatsAppOutlined,
  KeyOutlined,
  BookOutlined,
} from "@ant-design/icons";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

const steps = [
  {
    icon: <DownloadOutlined />,
    title: "Request the Guide",
    text: "Click the Download Guide button anywhere on the website to begin your purchase.",
  },
  {
    icon: <CreditCardOutlined />,
    title: "Make Payment",
    text: "Transfer the guide fee using the account details provided on the payment page.",
  },
  {
    icon: <WhatsAppOutlined />,
    title: "Send Payment Proof",
    text: "Send your payment receipt to our WhatsApp for quick verification.",
  },
  {
    icon: <KeyOutlined />,
    title: "Payment Verified",
    text: "Once your payment is confirmed, we'll generate a secure one-time download link just for you.",
  },
  {
    icon: <BookOutlined />,
    title: "Download Your Guide",
    text: "Receive your secure download link via WhatsApp. The link becomes invalid immediately after the guide has been downloaded.",
  },
];

export default function Process() {
  return (
    <Section id="training">
      <SectionHeader
        badge="HOW IT WORKS"
        title="Start Learning In Five Simple Steps"
        description="Getting access to your training guide is quick, secure and straightforward."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-[30px] border border-border bg-card p-3 shadow-lg"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-white">
              {step.icon}
            </div>

            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Step {index + 1}
            </span>

            <h3 className="text-xl font-bold">{step.title}</h3>

            <p className="mt-4 leading-7 text-sm text-foreground-muted">{step.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
