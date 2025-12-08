"use client";

import { useState } from "react";

export default function FilterBar({ onChange }) {
  const [difficulty, setDifficulty] = useState("");
  const [recognition, setRecognition] = useState("");
  const [category, setCategory] = useState("");

  const difficulties = ["入门", "中等", "偏难"];
  const recognitions = [
    "国内高认可度",
    "国际认可度较高",
    "行业认可度高",
    "顶级认可度"
  ];
  const categories = [
    "教育类",
    "财会类",
    "IT & 互联网",
    "项目管理类",
    "心理类",
    "法律类",
    "医疗卫生类",
    "语言类",
    "商务职业类"
  ];

  function notify() {
    onChange({ difficulty, recognition, category });
  }

  return (
    <div className="flex flex-wrap items-center gap-3 bg-white/70 p-4 rounded-2xl border border-black/5 backdrop-blur">
      
      {/* 难度 */}
      <select
        className="text-sm border px-3 py-1.5 rounded-xl bg-white"
        value={difficulty}
        onChange={(e) => {
          setDifficulty(e.target.value);
          notify();
        }}
      >
        <option value="">全部难度</option>
        {difficulties.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      {/* 认可度 */}
      <select
        className="text-sm border px-3 py-1.5 rounded-xl bg-white"
        value={recognition}
        onChange={(e) => {
          setRecognition(e.target.value);
          notify();
        }}
      >
        <option value="">全部认可度</option>
        {recognitions.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      {/* 分类 */}
      <select
        className="text-sm border px-3 py-1.5 rounded-xl bg-white"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          notify();
        }}
      >
        <option value="">全部方向</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
