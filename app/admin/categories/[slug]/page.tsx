"use client";

import { useState } from "react";
import { categories } from "../../../../data/categories";

export default function CategoryEditPage({ params }) {
  const category = categories.find(c => c.slug === params.slug);

  const [form, setForm] = useState(category);

  if (!category) return <p>分类不存在</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">✏️ 编辑分类：{category.name}</h1>

      <label className="block">
        <span className="text-sm text-gray-600">名称</span>
        <input
          value={form.name}
          className="mt-1 p-2 border rounded w-full"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label className="block">
        <span className="text-sm text-gray-600">Slug</span>
        <input
          value={form.slug}
          className="mt-1 p-2 border rounded w-full"
          onChange={e => setForm({ ...form, slug: e.target.value })}
        />
      </label>

      <button className="px-4 py-2 bg-black text-white rounded text-sm">
        保存（前端演示）
      </button>
    </div>
  );
}
