"use client";

import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";

const faqItems = [
  {
    key: "1",
    label: "Who is this training for?",
    children: (
      <p>
        This training is designed for beginners, aspiring realtors,
        property investors and anyone who wants to build a successful
        career in the real estate industry.
      </p>
    ),
  },
  {
    key: "2",
    label: "How do I get the training guide after payment?",
    children: (
      <p>
        After making payment, simply send your payment receipt to our
        WhatsApp. Once your payment has been verified, you'll receive a
        secure one-time download link to access your guide.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does the download link expire?",
    children: (
      <p>
        Yes. Your download link is generated specifically for you and
        expires automatically after the guide has been downloaded
        successfully. This helps protect the training materials from
        unauthorized sharing.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I join the WhatsApp community after buying the guide?",
    children: (
      <p>
        Absolutely. Every buyer gets access to our WhatsApp community
        where you can ask questions, receive updates and continue
        learning from the mentor.
      </p>
    ),
  },
  {
    key: "5",
    label: "Do I need any previous real estate experience?",
    children: (
      <p>
        No. The training starts from the basics and gradually introduces
        more advanced concepts, making it suitable for complete
        beginners as well as those looking to improve their skills.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can I contact you before making payment?",
    children: (
      <p>
        Yes. Feel free to reach out via WhatsApp or the contact form if
        you have any questions before purchasing the training guide.
      </p>
    ),
  },
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      className="bg-muted/20"
    >
      <SectionHeader
        badge="FREQUENTLY ASKED QUESTIONS"
        title="Everything You Need To Know"
        description="Find answers to the most common questions about the training guide, payment process and WhatsApp mentorship."
      />

      <div className="mx-auto max-w-4xl">

        <Collapse
          ghost
          accordion
          expandIcon={({ isActive }) => (
            <PlusOutlined
              rotate={isActive ? 45 : 0}
              className="text-primary text-lg"
            />
          )}
          items={faqItems}
          className="
            premium-faq
          "
        />

      </div>
    </Section>
  );
}