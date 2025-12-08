"use client";

import { useState } from "react";
import { exams } from "../data/exams";
import Link from "next/link";

export default function Search() {
  const [query, setQuery] = useState("");

  const filtered =
    query.trim().length === 0
      ? []
      : exams.filter((e) =>
          e.name.toLowerCase().includes(query.toLowerCase()) ||
          e.category.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="relative max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索考试名称、方向（如：教师、CPA、心理）"
        className="w-full px-4 py-2.5 rounded-2xl border border-black/10
                   bg-white/70 backdrop-blur focus:outline-none
                   shadow-sm hover:shadow transition text-sm"
      />

      {query.trim() !== "" && (
        <div className="absolute left-0 right-0 mt-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-black/5 p-3 space-y-2 z-50">
          {filtered.length === 0 && (
            <p className="text-xs text-gray-500 px-2">未找到相关考试</p>
          )}
          {filtered.map((exam) => (
            <Link
              key={exam.slug}
              href={`/exams/${exam.slug}`}
              className="block px-3 py-2 rounded-xl hover:bg-black/5 transition text-sm"
            >
              <span className="font-medium">{exam.name}</span>
              <p className="text-xs text-gray-500">{exam.category}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
