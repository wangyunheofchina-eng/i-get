"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { exams } from "../data/exams";
import { categories } from "../data/categories";
import UiCard from "../components/ui/UiCard";
import { getExamHeat } from "../utils/heat";

export default function PagePreview() {
  const [ranked, setRanked] = useState([]);

  useEffect(() => {
    const sorted = [...exams]
      .map(e => ({ ...e, heat: getExamHeat(e.slug) }))
      .sort((a, b) => b.heat - a.heat);

    setRanked(sorted.slice(0, 6));
  }, []);

  return (
    <div className="md:ml-[240px] px-6 md:px-12 py-16 space-y-20 fade-in">

      {/* ======================== Hero ======================== */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
          考试，一目了然
        </h1>

        <p className="text-subtle text-lg">
          覆盖全国主流资格考试，提供结构化、可靠、易理解的信息。
          <br />
          让迷茫的你，用最短时间获得最清晰的方向。
        </p>

        <div className="flex justify-center gap-4 mt-4">
          <Link href="/exams" className="btn-primary">
            浏览所有考试
          </Link>
          <Link href="/guide" className="btn-secondary">
            找我适合的方向
          </Link>
        </div>
      </section>

      {/* ======================== 分类导航 ======================== */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <h2 className="h2">方向导航</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(cat => (
            <UiCard key={cat.slug} className="p-5 hover-apple">
              <Link href={`/exams?cat=${cat.slug}`} className="block">
                <p className="font-medium text-lg">{cat.name}</p>
              </Link>
            </UiCard>
          ))}
        </div>
      </section>

      {/* ======================== 热门考试 ======================== */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <h2 className="h2">热门考试</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {ranked.map(exam => (
            <UiCard key={exam.slug} className="p-5 hover-apple">
              <Link href={`/exams/${exam.slug}`} className="block space-y-1">
                <p className="text-xs text-gray-500">{exam.category}</p>
                <h3 className="font-semibold">{exam.name}</h3>
                <p className="text-xs text-gray-600 mt-1">
                  下一次考试：{exam.nextExamDate}
                </p>
                <p className="text-xs text-orange-600 mt-1">
                  热度：{exam.heat}
                </p>
              </Link>
            </UiCard>
          ))}
        </div>
      </section>

      {/* ======================== CTA ======================== */}
      <section className="text-center space-y-4 max-w-xl mx-auto pt-10">
        <h2 className="h2">找不到方向？</h2>
        <p className="text-subtle">
          选择一个与你最相关的目标，我们帮你筛选更适合的考试路线。
        </p>
        <Link href="/guide" className="btn-primary">
          开始找方向
        </Link>
      </section>

    </div>
  );
}
