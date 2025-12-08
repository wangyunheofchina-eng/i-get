"use client";

import { useState } from "react";

export default function CategoryTabs({ categories, onSelect }) {
  const [active, setActive] = useState("全部");

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
      {["全部", ...categories].map((c) => (
        <button
          key={c}
          onClick={() => {
            setActive(c);
            onSelect(c === "全部" ? null : c);
          }}
          className={
            "px-4 py-2 whitespace-nowrap rounded-full text-sm transition " +
            (active === c
              ? "bg-black text-white shadow"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200")
          }
        >
          {c}
        </button>
      ))}
    </div>
  );
}
