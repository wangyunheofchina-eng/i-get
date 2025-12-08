"use client";

import { useState } from "react";

export default function AdminNewsNewPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    tag: "",
    date: "",
    examSlug: "",
    summary: "",
    content: "",
  });

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">➕ 新建资讯（演示）</h1>

      {[
        { key: "title", label: "标题" },
        { key: "slug", label: "slug（英文，用于网址）" },
        { key: "tag", label: "标签（如：报考提醒 / 趋势洞察）" },
        { key: "date", label: "日期（YYYY-MM-DD）" },
        { key: "examSlug", label: "关联考试 slug" },
      ].map((field) => (
        <label key={field.key} className="block text-sm">
          <span className="text-gray-600">{field.label}</span>
          <input
            className="mt-1 p-2 border rounded w-full"
            value={(form as any)[field.key]}
            onChange={(e) =>
              setForm({ ...form, [field.key]: e.target.value })
            }
          />
        </label>
      ))}

      <label className="block text-sm">
        <span className="text-gray-600">摘要</span>
        <textarea
          className="mt-1 p-2 border rounded w-full h-20"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
        />
      </label>

      <label className="block text-sm">
        <span className="text-gray-600">正文（多段可以先用空行分隔）</span>
        <textarea
          className="mt-1 p-2 border rounded w-full h-40"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
      </label>

      <button className="px-4 py-2 bg-black text-white rounded text-sm">
        保存（仅前端示意，不会真正写入）
      </button>

      <p className="text-xs text-gray-500 mt-2">
        未来可以：把这里的表单提交到一个 API，再由脚本写入 data/news.ts
        或持久化到数据库 / 表格。这一版主要是用来确定字段结构。
      </p>
    </div>
  );
}
