"use client";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact">

      <SectionHeader
        badge="CONTACT"
        title="Let's Talk About Your Real Estate Journey"
        description="Have questions about the training or need guidance? Get in touch and we'll be happy to help."
      />

      <div className="grid gap-12 lg:grid-cols-2">

        {/* Left */}

        <div className="space-y-6">

          <ContactCard
            icon={<WhatsAppOutlined />}
            title="WhatsApp"
            value="+234 801 234 5678"
            href="https://wa.me/2348012345678"
          />

          <ContactCard
            icon={<PhoneOutlined />}
            title="Phone"
            value="+234 801 234 5678"
            href="tel:+2348012345678"
          />

          <ContactCard
            icon={<MailOutlined />}
            title="Email"
            value="hello@realtoracademy.com"
            href="mailto:hello@realtoracademy.com"
          />

          <ContactCard
            icon={<EnvironmentOutlined />}
            title="Location"
            value="Lagos, Nigeria"
            href="#"
          />

        </div>

        {/* Right */}

        <div className="rounded-[32px] border border-border bg-card p-8 shadow-xl">

          <ContactForm />

        </div>

      </div>

    </Section>
  );
}