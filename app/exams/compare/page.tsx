"use client";

import { useCompare } from "../../../hooks/useCompare";
import { exams } from "../../../data/exams";

export default function ComparePage() {
  const { list } = useCompare();
  const items = exams.filter((e) => list.includes(e.slug));

  if (items.length === 0) {
    return <div className="pt-10 text-gray-600">暂无对比项目。</div>;
  }

  return (
    <div className="pt-10 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">考试对比</h1>

      <div className="overflow-auto border border-black/5 rounded-2xl bg-white/70 backdrop-blur">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-gray-50/80">
            <tr>
              <th className="border p-3 text-left">项目</th>
              {items.map((e) => (
                <th key={e.slug} className="border p-3 text-left">{e.name}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">分类</td>
              {items.map((e) => <td key={e.slug} className="border p-3">{e.category}</td>)}
            </tr>
            <tr>
              <td className="border p-3">难度</td>
              {items.map((e) => <td key={e.slug} className="border p-3">{e.level}</td>)}
            </tr>
            <tr>
              <td className="border p-3">认可度</td>
              {items.map((e) => <td key={e.slug} className="border p-3">{e.recognition}</td>)}
            </tr>
            <tr>
              <td className="border p-3">下次考试</td>
              {items.map((e) => <td key={e.slug} className="border p-3">{e.nextExamDate}</td>)}
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
