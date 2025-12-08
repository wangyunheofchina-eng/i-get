"use client";

import { useState } from "react";
import { exams } from "../data/exams";

export default function CompareDrawer({ onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-full bg-black text-white shadow hover:bg-black/90"
      >
        ➕ 添加考试
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-end z-50">
          <div className="bg-white w-full max-w-md rounded-t-2xl p-6 space-y-3">

            <h2 className="text-lg font-semibold">选择一个考试</h2>

            {exams.map(exam => (
              <button
                key={exam.slug}
                onClick={() => {
                  onSelect(exam);
                  setOpen(false);
                }}
                className="w-full text-left p-3 rounded-xl border hover:bg-gray-100"
              >
                {exam.name}
              </button>
            ))}

            <button
              onClick={() => setOpen(false)}
              className="w-full py-3 mt-2 text-gray-500 hover:text-black"
            >
              取消
            </button>

          </div>
        </div>
      )}
    </>
  );
}
