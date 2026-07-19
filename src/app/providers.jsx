"use client";
import { ConfigProvider, App, theme } from "antd";
import { useEffect, useState } from "react";

export default function Providers({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      setIsDark(media.matches);
    };

    updateTheme();

    media.addEventListener("change", updateTheme);

    return () => media.removeEventListener("change", updateTheme);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,

        token: {
          colorPrimary: "#0F766E",

          borderRadius: 24,

          colorBgBase: isDark ? "#020617" : "#F8FAFC",

          colorBgContainer: isDark ? "#0F172A" : "#FFFFFF",

          colorBgElevated: isDark ? "#0F172A" : "#FFFFFF",

          colorText: isDark ? "#F8FAFC" : "#0F172A",

          colorBorder: isDark ? "#1E293B" : "#E2E8F0",

          colorTextSecondary: isDark ? "#94A3B8" : "#64748B",

          boxShadow:
            "0 20px 50px rgba(15,23,42,.08)",
        },

        components: {
          Modal: {
            borderRadiusLG: 28,
          },

          Button: {
            borderRadius: 999,
          },

          Collapse: {
            borderRadiusLG: 20,
          },

          Input: {
            borderRadius: 16,
          },

          Drawer: {
            borderRadiusLG: 28,
          },
        },
      }}
    >
        <App>

      {children}
        </App>
    </ConfigProvider>
  );
}