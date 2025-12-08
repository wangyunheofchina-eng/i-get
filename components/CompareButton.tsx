"use client";

import { useCompare } from "../hooks/useCompare";

export default function CompareButton({ exam }) {
  const { list, toggle } = useCompare();
  const isActive = list.includes(exam.slug);

  return (
    <button
      onClick={() => toggle(exam.slug)}
      className={
        "px-3 py-2 text-sm rounded-xl border transition " +
        (isActive
          ? "bg-black text-white border-black"
          : "bg-white border-gray-300 hover:border-black/40")
      }
    >
      {isActive ? "已加入对比" : "加入对比"}
    </button>
  );
}
