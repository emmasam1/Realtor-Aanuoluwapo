"use client";

import { FloatButton } from "antd";

export default function ScrollToTop() {
  return (
    <FloatButton.BackTop
      visibilityHeight={400}
      style={{
        right: 30,
      }}
    />
  );
}
