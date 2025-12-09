"use client";

import { useState } from "react";
import { exams } from "../../../../data/exams";
import { categories } from "../../../../data/categories";
import { scoreExam } from "../../../../utils/contentScore";

export default function ExamEditPage({ params }: { params: { slug: string } }) {
  const exam = exams.find((e) => e.slug === params.slug);

  if (!exam) return <p>考试不存在</p>;

  const [form, setForm] = useState({
    name: exam.name || "",
    category: exam.category || "",
    description: exam.description || "",
    suitable: exam.suitable || [],
    tips: exam.tips || [],
    flow: exam.flow || [],
  });

  const { score } = scoreExam(exam);

  return (
    <div className="space-y-8">

      {/* 标题栏 */}
      <div>
        <h1 className="text-2xl font-semibold">✏️ 编辑考试：{form.name}</h1>

        <p className="text-sm text-gray-500 mt-1">
          当前内容完整度：
          <span
            className={
              score >= 85
                ? "text-green-600"
                : score >= 60
                ? "text-yellow-600"
                : "text-red-600"
            }
          >
            {score}%
          </span>
        </p>
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
          {categories.map((cat) => (
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
          value={form.suitable.join("\n")}
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
          value={form.tips.join("\n")}
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
          value={form.flow.join("\n")}
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
