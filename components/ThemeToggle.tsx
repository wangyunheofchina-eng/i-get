"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // 从系统或 localStorage 中获取主题
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const current = saved || (prefersDark ? "dark" : "light");
    setTheme(current);
    document.documentElement.setAttribute("data-theme", current);
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      className="ml-4 text-sm px-3 py-1.5 rounded-lg bg-white/40 dark:bg-black/40 backdrop-blur border border-black/5"
      onClick={toggle}
    >
      {theme === "light" ? "�� 深色模式" : "☀️ 浅色模式"}
    </button>
  );
}
