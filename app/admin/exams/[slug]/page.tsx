"use client";

import { useState } from "react";
import { exams } from "../../../../data/exams";
import { categories } from "../../../../data/categories";
import { scoreExam } from "../../../../utils/contentScore";

export default function ExamEditPage({ params }) {
  const exam = exams.find(e => e.slug === params.slug);
  const [form, setForm] = useState(exam);

  if (!exam) return <p>考试不存在</p>;

  const { missing, score } = scoreExam(exam);

  return (
    <div className="space-y-8">

      {/* 标题栏 */}
      <div>
        <h1 className="text-2xl font-semibold">✏️ 编辑考试：{exam.name}</h1>

        <p className="text-sm text-gray-500 mt-1">
          当前内容完整度：
          <span className={
            score >= 85 ? "text-green-600" :
            score >= 60 ? "text-yellow-600" :
            "text-red-600"
          }>
            {score}%
          </span>
        </p>

        {/* 缺失提示 */}
        {missing.length > 0 && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
            <p className="font-medium">以下内容仍未完善：</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {missing.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        )}
      </div>

      {/* 字段：名称 */}
      <label className="block">
        <span className="text-sm text-gray-600">名称</span>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 p-2 border rounded w-full"
        />
      </label>

      {/* 字段：分类 */}
      <label className="block">
        <span className="text-sm text-gray-600">分类</span>
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="mt-1 p-2 border rounded w-full"
        >
          {categories.map(cat => (
            <option key={cat.slug} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </label>

      {/* 字段：描述 */}
      <label className="block">
        <span className="text-sm text-gray-600">描述</span>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="mt-1 p-2 border rounded w-full h-32"
        />
      </label>

      {/* 字段：适合人群 */}
      <label className="block">
        <span className="text-sm text-gray-600">适合人群（每行一条）</span>
        <textarea
          value={(form.suitable || []).join("\n")}
          onChange={(e) =>
            setForm({ ...form, suitable: e.target.value.split("\n") })
          }
          className="mt-1 p-2 border rounded w-full h-24"
        />
      </label>

      {/* 字段：备考建议 */}
      <label className="block">
        <span className="text-sm text-gray-600">备考建议（每行一条）</span>
        <textarea
          value={(form.tips || []).join("\n")}
          onChange={(e) =>
            setForm({ ...form, tips: e.target.value.split("\n") })
          }
          className="mt-1 p-2 border rounded w-full h-24"
        />
      </label>

      {/* 字段：流程 */}
      <label className="block">
        <span className="text-sm text-gray-600">报考流程（每行一条）</span>
        <textarea
          value={(form.flow || []).join("\n")}
          onChange={(e) =>
            setForm({ ...form, flow: e.target.value.split("\n") })
          }
          className="mt-1 p-2 border rounded w-full h-24"
        />
      </label>

      {/* AI 草稿按钮 */}
      <div className="pt-4 border-t mt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
          ✨ 生成 AI 草稿（占位功能）
        </button>
      </div>

      {/* 保存按钮 */}
      <button className="px-4 py-2 bg-black text-white rounded text-sm">
        保存（前端演示）
      </button>

    </div>
  );
}
