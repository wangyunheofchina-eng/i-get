"use client";

import { useEffect, useState } from "react";
import { getFavorites } from "../../utils/favorite";
import { exams } from "../../data/exams";

export default function FavoritesPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const favSlugs = getFavorites();
    const favExams = exams.filter((e) => favSlugs.includes(e.slug));
    setList(favExams);
  }, []);

  return (
    <div className="pt-10 space-y-10 animate-fadeUp">

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">❤️ 我的收藏</h1>
        <p className="text-gray-600">快速回到你最关心的考试</p>
      </div>

      {/* 空状态（Apple 风格：温柔、不吓人） */}
      {list.length === 0 && (
        <div className="text-center text-gray-500 pt-20">
          <p className="text-5xl mb-4">🪶</p>
          <p className="text-lg">你还没有收藏任何考试</p>
          <p className="text-gray-400 text-sm mt-1">
            在考试详情页点击「收藏」即可添加
          </p>
        </div>
      )}

      {/* 列表 */}
      <div className="grid md:grid-cols-2 gap-6">
        {list.map((exam) => (
          <a
            key={exam.slug}
            href={`/exams/${exam.slug}`}
            className="p-5 rounded-2xl bg-white/80 backdrop-blur border border-black/5 
                       shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <h2 className="text-lg font-medium">{exam.name}</h2>
            <p className="text-xs text-gray-500 mt-1">{exam.category}</p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {exam.description}
            </p>

            <div className="flex gap-3 mt-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs">
                热度：{exam.heat}
              </span>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}
