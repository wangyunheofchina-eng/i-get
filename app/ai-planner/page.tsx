"use client";

import { useState } from "react";
import { exams } from "../../data/exams";
import Link from "next/link";

export default function AIPlannerPage() {
  const [goal, setGoal] = useState("");
  const [recommend, setRecommend] = useState([]);

  function doPlan() {
    const lower = goal.toLowerCase();

    let results = [];

    if (lower.includes("教育") || lower.includes("老师")) {
      results = exams.filter(e => e.category.includes("教育"));
    } else if (lower.includes("it") || lower.includes("程序") || lower.includes("计算机")) {
      results = exams.filter(e => e.category.includes("IT"));
    } else if (lower.includes("财务") || lower.includes("会计")) {
      results = exams.filter(e => e.category.includes("财会"));
    }

    setRecommend(results.slice(0, 5));
  }

  return (
    <div className="pt-10 space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        智能职业规划（AI 推荐）
      </h1>

      <input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="例：我想从教育转行到 IT"
        className="w-full px-4 py-3 border rounded-2xl"
      />

      <button
        onClick={doPlan}
        className="px-6 py-3 bg-black text-white rounded-xl"
      >
        生成推荐
      </button>

      <div className="space-y-4">
        {recommend.map(exam => (
          <Link
            key={exam.slug}
            href={`/exams/${exam.slug}`}
            className="block card p-4 hover:-translate-y-1 transition"
          >
            {exam.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
