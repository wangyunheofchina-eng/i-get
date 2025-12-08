"use client";

import { useState } from "react";
import { exams } from "../../data/exams";

export default function RecommendPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any[]>([]);

  function generate() {
    const text = input.toLowerCase();

    let matches = exams.filter(
      (e) =>
        e.description.toLowerCase().includes(text) ||
        e.category.toLowerCase().includes(text) ||
        e.name.toLowerCase().includes(text)
    );

    if (matches.length === 0) {
      matches = exams.slice(0, 3); // fallback 推荐 3 个热门
    }

    setResult(matches);
  }

  return (
    <div className="space-y-8 pt-8">
      <h1 className="text-3xl font-semibold tracking-tight">智能证书推荐</h1>
      <p className="text-gray-600 text-sm">
        输入你的情况（如“我想从行政转教育”），让系统帮你推荐适合的证书。
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full min-h-[120px] p-4 border rounded-xl text-sm"
        placeholder="例如：我目前做行政，想转教育行业……"
      />

      <button
        onClick={generate}
        className="px-6 py-2 bg-black text-white rounded-full text-sm"
      >
        获取推荐
      </button>

      {result.length > 0 && (
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-semibold">推荐结果</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {result.map((exam) => (
              <a
                key={exam.slug}
                href={`/exams/${exam.slug}`}
                className="block p-5 rounded-2xl border hover:shadow transition"
              >
                <h3 className="text-lg font-medium">{exam.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{exam.category}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
