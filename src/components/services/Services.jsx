"use client";

import {
  HomeOutlined,
  BankOutlined,
  TeamOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <TeamOutlined />,
    title: "Realtor Training",
    description:
      "Comprehensive training designed to help beginners understand the real estate business and confidently start their careers.",
  },
  {
    icon: <HomeOutlined />,
    title: "Property Sales",
    description:
      "Professional guidance for buying and selling residential and commercial properties with confidence.",
  },
  {
    icon: <BankOutlined />,
    title: "Property Investment",
    description:
      "Learn how to identify profitable investment opportunities and build long-term wealth through real estate.",
  },
  {
    icon: <SolutionOutlined />,
    title: "Consultation",
    description:
      "Receive one-on-one advice on property, investments and real estate business strategies tailored to your goals.",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      className="bg-muted/20"
    >
      <SectionHeader
        badge="OUR SERVICES"
        title="Helping You Build A Successful Real Estate Career"
        description="Whether you're looking to become a realtor, invest in property or receive professional guidance, we provide the knowledge and support you need."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </Section>
  );
}