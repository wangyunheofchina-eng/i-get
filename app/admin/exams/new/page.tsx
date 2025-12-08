"use client";

import { useState } from "react";
import { categories } from "../../../../data/categories";

export default function NewExamPage() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: categories[0]?.name ?? "",
    description: "",
    nextExamDate: "",
    registrationTime: "",
  });

  function handleSave() {
    alert("这是前端演示，暂未连接数据库。\n表单内容已打印在控制台。");
    console.log("新考试数据：", form);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">➕ 新增考试</h1>

      {/* 名称 */}
      <label className="block">
        <span className="text-sm text-gray-600">名称</span>
        <input
          value={form.name}
          className="mt-1 p-2 border rounded w-full"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
      </label>

      {/* slug */}
      <label className="block">
        <span className="text-sm text-gray-600">Slug（英文 ID，用于访问路径）</span>
        <input
          value={form.slug}
          className="mt-1 p-2 border rounded w-full"
          onChange={e => setForm({ ...form, slug: e.target.value })}
        />
      </label>

      {/* 分类 */}
      <label className="block">
        <span className="text-sm text-gray-600">分类</span>
        <select
          value={form.category}
          className="mt-1 p-2 border rounded w-full"
          onChange={e => setForm({ ...form, category: e.target.value })}
        >
          {categories.map(cat => (
            <option key={cat.slug} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </label>

      {/* 描述 */}
      <label className="block">
        <span className="text-sm text-gray-600">描述</span>
        <textarea
          value={form.description}
          className="mt-1 p-2 border rounded w-full h-32"
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
      </label>

      {/* 下一次考试时间 */}
      <label className="block">
        <span className="text-sm text-gray-600">下一次考试时间</span>
        <input
          type="text"
          value={form.nextExamDate}
          placeholder="例如：2025-05-20"
          className="mt-1 p-2 border rounded w-full"
          onChange={e => setForm({ ...form, nextExamDate: e.target.value })}
        />
      </label>

      {/* 报名时间 */}
      <label className="block">
        <span className="text-sm text-gray-600">报名时间</span>
        <input
          type="text"
          value={form.registrationTime}
          placeholder="例如：2025-03-01 ~ 2025-03-20"
          className="mt-1 p-2 border rounded w-full"
          onChange={e => setForm({ ...form, registrationTime: e.target.value })}
        />
      </label>

      {/* 保存按钮 */}
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-black text-white rounded text-sm"
      >
        保存（前端演示）
      </button>
    </div>
  );
}
