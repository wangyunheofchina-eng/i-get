"use client";

import { useEffect, useState } from "react";
import { exams } from "../../data/exams";
import CompareCard from "../../components/CompareCard";
import ReportSummary from "../../components/ReportSummary";
import CompareHistory from "../../components/CompareHistory";
import { logCompareEvent } from "../../utils/analytics";

export default function ComparePage() {
  const [items, setItems] = useState([]);

  function swap() {
    if (items.length === 2) setItems([items[1], items[0]]);
  }

  // 一旦选满两个，就记一次历史
  useEffect(() => {
    if (items.length === 2) {
      logCompareEvent(items[0], items[1]);
    }
  }, [items]);

  return (
    <div className="pt-10 space-y-10">

      <h1 className="text-3xl font-semibold tracking-tight">
        📊 考试对比系统（专业版）
      </h1>

      <p className="text-gray-600 max-w-xl">
        从难度、认可度、成本、周期、未来价值等维度全面比较。
      </p>

      {/* 选择考试 */}
      <div className="flex flex-wrap gap-4 pt-4">
        {exams.map((e) => (
          <button
            key={e.slug}
            onClick={() => items.length < 2 && setItems([...items, e])}
            className="px-4 py-2 bg-black text-white rounded-full text-sm"
          >
            选择 {e.name}
          </button>
        ))}
      </div>

      {/* 对比卡片 */}
      <div className="grid md:grid-cols-2 gap-6 pt-6">
        {items.map((exam) => (
          <CompareCard key={exam.slug} exam={exam} />
        ))}
      </div>

      {items.length === 2 && (
        <button
          onClick={swap}
          className="px-6 py-2 bg-gray-100 border rounded-full hover:bg-gray-200 transition"
        >
          🔄 交换左右对比位置
        </button>
      )}

      {/* 专业报告 */}
      <ReportSummary items={items} />

      {/* 历史记录区块 */}
      <CompareHistory />
    </div>
  );
}
