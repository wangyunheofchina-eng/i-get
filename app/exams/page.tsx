"use client";

import { useState, useMemo } from "react";
import { exams } from "../../data/exams";
import { categories } from "../../data/categories";
import Link from "next/link";
import UiCard from "../../components/ui/UiCard";

export default function ExamListPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("");
  const [difficulty, setDifficulty] = useState(0);
  const [recognition, setRecognition] = useState(0);

  const filtered = useMemo(() => {
    return exams.filter(e => {
      const matchName = e.name.includes(query) || e.category.includes(query);
      const matchCat = cat ? e.category.includes(cat) : true;
      const matchDiff = difficulty ? (e.difficulty || 0) >= difficulty : true;
      const matchRec = recognition ? (e.recognition || 0) >= recognition : true;

      return matchName && matchCat && matchDiff && matchRec;
    });
  }, [query, cat, difficulty, recognition]);

  return (
    <div className="pt-10 space-y-10">

      {/* Title */}
      <h1 className="text-3xl font-semibold tracking-tight">📚 全部考试</h1>


      {/* 搜索框 */}
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="搜索考试名称 / 分类..."
        className="w-full p-3 border rounded-xl shadow-sm"
      />


      {/* 筛选器 */}
      <div className="grid md:grid-cols-3 gap-4">
        
        {/* 分类下拉 */}
        <select
          className="p-3 border rounded-xl"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
        >
          <option value="">全部分类</option>
          {categories.map(c => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
        </select>

        {/* 难度筛选 */}
        <select
          className="p-3 border rounded-xl"
          value={difficulty}
          onChange={(e) => setDifficulty(Number(e.target.value))}
        >
          <option value="0">难度不限</option>
          <option value="1">难度 ≥ 1</option>
          <option value="2">难度 ≥ 2</option>
          <option value="3">难度 ≥ 3</option>
          <option value="4">难度 ≥ 4</option>
          <option value="5">难度 ≥ 5</option>
        </select>

        {/* 认可度筛选 */}
        <select
          className="p-3 border rounded-xl"
          value={recognition}
          onChange={(e) => setRecognition(Number(e.target.value))}
        >
          <option value="0">认可度不限</option>
          <option value="1">认可度 ≥ 1</option>
          <option value="2">认可度 ≥ 2</option>
          <option value="3">认可度 ≥ 3</option>
          <option value="4">认可度 ≥ 4</option>
          <option value="5">认可度 ≥ 5</option>
        </select>

      </div>


      {/* 考试列表 */}
      <div className="grid md:grid-cols-3 gap-5">
        {filtered.map(exam => (
          <UiCard key={exam.slug} className="p-5 hover-apple">
            <Link href={`/exams/${exam.slug}`} className="block">
              
              <p className="text-xs text-gray-500">{exam.category}</p>

              <h3 className="mt-1 text-sm font-semibold">{exam.name}</h3>

              {exam.nextExamDate && (
                <p className="mt-2 text-xs text-gray-600">
                  📅 下一次考试：{exam.nextExamDate}
                </p>
              )}

              {/* 指标 */}
              <div className="flex justify-between mt-2 text-xs text-gray-700">
                <span>难度：{"⭐".repeat(exam.difficulty || 0)}</span>
                <span>认可度：{"🔥".repeat(exam.recognition || 0)}</span>
              </div>

            </Link>
          </UiCard>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500 text-sm">没有符合条件的考试。</p>
        )}
      </div>

    </div>
  );
}
