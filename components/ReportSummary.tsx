"use client";

import {
  getExamAdvantages,
  getTargetAdvice,
  compareTwoExams,
} from "../utils/compare-utils";

export default function ReportSummary({ items }) {
  if (items.length !== 2) return null;

  const [a, b] = items;
  const advice = getTargetAdvice(a, b);
  const aAdv = getExamAdvantages(a);
  const bAdv = getExamAdvantages(b);
  const comp = compareTwoExams(a, b);

  const handleExport = () => {
    if (typeof window === "undefined") return;
    // 简单版本：直接调用浏览器打印，用户可以存为 PDF
    window.print();
  };

  return (
    <div className="mt-10 p-6 rounded-2xl bg-white border shadow space-y-6">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">📘 职业规划对比报告</h2>

        <button
          onClick={handleExport}
          className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-50"
        >
          ⬇️ 导出报告（PDF）
        </button>
      </div>

      {/* AI 风格总结 */}
      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <p className="text-blue-700 leading-relaxed text-sm">{advice}</p>
      </div>

      {/* 分数对比 */}
      <div className="grid grid-cols-2 gap-6 pt-4">
        <div className="p-4 rounded-xl bg-gray-50 border shadow-sm">
          <h3 className="font-semibold">{a.name} 综合评分</h3>
          <p className="text-3xl font-bold mt-2">{comp.aScore.toFixed(1)}</p>
        </div>
        <div className="p-4 rounded-xl bg-gray-50 border shadow-sm">
          <h3 className="font-semibold">{b.name} 综合评分</h3>
          <p className="text-3xl font-bold mt-2">{comp.bScore.toFixed(1)}</p>
        </div>
      </div>

      {/* 优势劣势 */}
      <div className="grid grid-cols-2 gap-8 pt-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">{a.name} 优势</h3>
          <ul className="text-sm space-y-1">
            {aAdv.pros.map((p, i) => (
              <li key={i}>✔ {p}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">{a.name} 劣势</h3>
          <ul className="text-sm space-y-1 text-gray-600">
            {aAdv.cons.map((p, i) => (
              <li key={i}>✖ {p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">{b.name} 优势</h3>
          <ul className="text-sm space-y-1">
            {bAdv.pros.map((p, i) => (
              <li key={i}>✔ {p}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">{b.name} 劣势</h3>
          <ul className="text-sm space-y-1 text-gray-600">
            {bAdv.cons.map((p, i) => (
              <li key={i}>✖ {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
