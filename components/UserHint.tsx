"use client";

import { useEffect, useState } from "react";

export default function UserHint() {
  const [hint, setHint] = useState(null);

  useEffect(() => {
    const viewed = JSON.parse(localStorage.getItem("viewed_exams") || "[]");

    if (viewed.length >= 2) {
      setHint(`你最近查看了 ${viewed.join("、")}，要我帮你推荐更适合的考试吗？`);
    }
  }, []);

  if (!hint) return null;

  return (
    <div className="p-4 rounded-xl bg-white shadow border mt-10 text-gray-700">
      <p>{hint}</p>

      <a href="/guide" className="text-blue-600 underline text-sm mt-2 inline-block">
        去找方向 →
      </a>
    </div>
  );
}
