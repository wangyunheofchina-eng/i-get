"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xl relative">
        <input
          type="text"
          placeholder="搜索考试名称 / 类别…"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onSearch(e.target.value);
          }}
          className="w-full px-5 py-3 rounded-2xl bg-white/70 backdrop-blur border border-black/5 shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-black/10 transition text-sm"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          ⌘K
        </span>
      </div>
    </div>
  );
}
