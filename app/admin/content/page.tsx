"use client";

import { exams } from "../../../data/exams";
import { useState, useMemo } from "react";

export default function ContentAdminPage() {
  const [sortKey, setSortKey] = useState("name");

  const sorted = useMemo(() => {
    return [...exams].sort((a, b) => {
      if (sortKey === "date") {
        return new Date(a.nextExamDate || 0).getTime() - new Date(b.nextExamDate || 0).getTime();
      }
      return a.name.localeCompare(b.name);
    });
  }, [sortKey]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const soon = sorted.filter(e => {
    const d = new Date(e.nextExamDate);
    const diff = (d - today) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 30;
  });

  const expired = sorted.filter(e => {
    const d = new Date(e.nextExamDate);
    return d < today;
  });

  function hasMissingFields(exam) {
    const keys = [
      "overview", "eligibility", "suitableFor",
      "subjects", "value", "locations", "tips"
    ];
    return keys.some(k => !exam[k] || exam[k].length === 0);
  }

  function copyTemplate() {
    const template = {
      slug: "",
      name: "",
      category: "",
      description: "",
      nextExamDate: "",
      registrationTime: "",
      overview: "",
      eligibility: [],
      suitableFor: [],
      subjects: [],
      value: [],
      locations: [],
      tips: []
    };
    navigator.clipboard.writeText(JSON.stringify(template, null, 2));
    alert("已复制考试模板到剪贴板！");
  }

  return (
    <div className="pt-10 space-y-10 max-w-5xl mx-auto">

      <h1 className="text-3xl font-semibold tracking-tight">📊 内容后台管理</h1>

      {/* 排序 */}
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded bg-black text-white text-sm"
          onClick={() => setSortKey("name")}
        >
          按名称排序
        </button>

        <button className="px-4 py-2 rounded bg-black text-white text-sm"
          onClick={() => setSortKey("date")}
        >
          按考试时间排序
        </button>

        <button className="px-4 py-2 rounded bg-white border text-sm"
          onClick={copyTemplate}
        >
          复制考试模板
        </button>
      </div>

      {/* 即将到来的考试 */}
      <section>
        <h2 className="text-xl font-semibold">⏳ 30 天内即将考试</h2>
        <div className="mt-4 space-y-2">
          {soon.length === 0 && <p className="text-gray-500">无</p>}
          {soon.map(e => (
            <div key={e.slug} className="p-3 rounded border bg-white">
              {e.name} —— {e.nextExamDate}
            </div>
          ))}
        </div>
      </section>

      {/* 过期考试 */}
      <section>
        <h2 className="text-xl font-semibold">⚠️ 已过期需更新</h2>
        <div className="mt-4 space-y-2">
          {expired.length === 0 && <p className="text-gray-500">无</p>}
          {expired.map(e => (
            <div key={e.slug} className="p-3 rounded border bg-red-50 text-red-700">
              {e.name} —— {e.nextExamDate}
            </div>
          ))}
        </div>
      </section>

      {/* 全量考试表格 */}
      <section>
        <h2 className="text-xl font-semibold">📚 全部考试数据</h2>

        <table className="w-full text-sm mt-4 border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">名称</th>
              <th className="border p-2">类别</th>
              <th className="border p-2">考试时间</th>
              <th className="border p-2">报名时间</th>
              <th className="border p-2">内容完整性</th>
            </tr>
          </thead>

          <tbody>
            {sorted.map(e => (
              <tr key={e.slug} className="border">
                <td className="border p-2">{e.name}</td>
                <td className="border p-2">{e.category}</td>
                <td className="border p-2">{e.nextExamDate}</td>
                <td className="border p-2">{e.registrationTime}</td>
                <td className="border p-2">
                  {hasMissingFields(e)
                    ? <span className="text-red-600">⚠️ 需补充</span>
                    : <span className="text-green-600">✔ 完整</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  );
}
