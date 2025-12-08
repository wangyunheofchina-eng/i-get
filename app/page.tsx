"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { exams } from "../data/exams";
import { categories } from "../data/categories";
import UiCard from "../components/ui/UiCard";
import { getExamHeat } from "../utils/heat";

export default function HomePage() {
  const [ranked, setRanked] = useState([]);

  useEffect(() => {
    const sorted = [...exams]
      .map(e => ({ ...e, heat: getExamHeat(e.slug) }))
      .sort((a, b) => b.heat - a.heat);
    setRanked(sorted.slice(0, 6));
  }, []);

  return (
    <div className="space-y-20">

      {/* ================= Hero Section（Apple 风） ================= */}
      <section className="pt-20 text-center space-y-6">
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
          让考试变得简单清晰
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          覆盖主流考试信息：报考时间、考试安排、难度、学习周期。
          专为迷茫的人打造，一次就看懂。
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="/exams"
            className="px-6 py-3 rounded-full bg-black text-white text-sm shadow hover:bg-black/90 transition"
          >
            浏览所有考试
          </Link>
          <Link
            href="/guide"
            className="px-6 py-3 rounded-full border border-gray-300 bg-white text-sm hover:border-gray-400 transition"
          >
            找到适合我的方向
          </Link>
        </div>
      </section>

      {/* ================= 分类导航（Apple 样式） ================= */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">方向导航</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(cat => (
            <UiCard
              key={cat.slug}
              className="p-5 hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
            >
              <Link href={`/exams?cat=${cat.slug}`} className="block">
                <p className="font-medium text-gray-900">{cat.name}</p>
              </Link>
            </UiCard>
          ))}
        </div>
      </section>

      {/* ================= 热门考试 ================= */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">热门考试</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {ranked.map(exam => (
            <UiCard
              key={exam.slug}
              className="p-6 hover:-translate-y-1 hover:shadow-md transition cursor-pointer"
            >
              <Link href={`/exams/${exam.slug}`} className="block space-y-1">
                <p className="text-xs text-gray-500">{exam.category}</p>
                <h3 className="text-base font-medium">{exam.name}</h3>
                <p className="text-xs text-gray-600 mt-2">
                  下次考试：{exam.nextExamDate}
                </p>
                <p className="text-xs text-orange-600">
                  热度：{exam.heat}
                </p>
              </Link>
            </UiCard>
          ))}
        </div>
      </section>

      {/* ================= 资讯占位，未来可加 ================= */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">考试资讯（即将上线）</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <UiCard key={i} className="p-6">
              <p className="text-xs text-gray-400">资讯示例</p>
              <h3 className="mt-1 font-medium text-gray-900">
                示例资讯标题 {i}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                这里将来会放考试动态、政策更新、报名提醒等内容。
              </p>
            </UiCard>
          ))}
        </div>
      </section>

    </div>
  );
}
