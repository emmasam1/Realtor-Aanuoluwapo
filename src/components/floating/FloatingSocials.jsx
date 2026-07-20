"use client";

import { FloatButton } from "antd";

import {
  WhatsAppOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

export default function FloatingSocials() {
  return (
    <FloatButton.Group
      shape="circle"
      style={{
        right: 30,
        bottom: 120,
      }}
    >
      <FloatButton
        icon={<WhatsAppOutlined />}
        href="https://wa.me/2348012345678"
        target="_blank"
      />

      <FloatButton
        icon={<InstagramOutlined />}
        href="#"
      />

      <FloatButton
        icon={<FacebookOutlined />}
        href="#"
      />
    </FloatButton.Group>
  );
}