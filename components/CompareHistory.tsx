"use client";

import { useEffect, useState } from "react";

interface RecordItem {
  at: string;
  a: { slug: string; name: string };
  b: { slug: string; name: string };
}

export default function CompareHistory() {
  const [history, setHistory] = useState<RecordItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem("compare_history") || "[]";
      const list = JSON.parse(raw);
      setHistory(list);
    } catch (e) {
      console.error("read compare_history error", e);
    }
  }, []);

  if (!history.length) return null;

  return (
    <div className="mt-10 p-6 rounded-2xl bg-white border shadow space-y-4">
      <h2 className="text-xl font-semibold">📂 你最近对比过</h2>

      <div className="space-y-3 text-sm text-gray-700">
        {history.slice(0, 5).map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-b-0"
          >
            <div>
              <p>
                <span className="font-medium">{item.a.name}</span> vs{" "}
                <span className="font-medium">{item.b.name}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(item.at).toLocaleString("zh-CN")}
              </p>
            </div>

            <a
              href={`/compare?again=${item.a.slug}-${item.b.slug}`}
              className="text-xs text-blue-600 hover:underline"
            >
              再看一眼
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
