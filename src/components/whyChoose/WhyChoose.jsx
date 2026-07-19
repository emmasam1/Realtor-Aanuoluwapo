"use client";

import {
  BookOutlined,
  TeamOutlined,
  HomeOutlined,
  RiseOutlined,
} from "@ant-design/icons";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <BookOutlined />,
    title: "Practical Training",
    description:
      "Learn with practical examples, real property scenarios and proven methods that you can apply immediately.",
  },
  {
    icon: <TeamOutlined />,
    title: "Mentorship & Community",
    description:
      "Join an active WhatsApp community where you can ask questions, receive guidance and grow with others.",
  },
  {
    icon: <HomeOutlined />,
    title: "Real Estate Knowledge",
    description:
      "Understand property sales, investments, documentation and how successful real estate professionals work.",
  },
  {
    icon: <RiseOutlined />,
    title: "Career Growth",
    description:
      "Build confidence, gain valuable skills and create opportunities to earn from the real estate industry.",
  },
];

export default function WhyChoose() {
  return (
    <Section id="why-choose">

      <SectionHeader
        badge="WHY CHOOSE OUR TRAINING"
        title="Everything You Need To Start Your Real Estate Journey"
        description="Whether you're completely new to real estate or looking to grow your knowledge, our training provides practical skills, mentorship and continuous support."
      />

      <div className="grid gap-8 md:grid-cols-2">

        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}

      </div>

    </Section>
  );
}