"use client";

import { useRemind } from "../hooks/useRemind";

export default function RemindButton({ exam }) {
  const { list, addExam, removeExam } = useRemind();
  const exists = list.some((e) => e.slug === exam.slug);

  function notify() {
    const date = new Date(exam.nextExamDate);

    new Notification("考试提醒已添加", {
      body: `${exam.name}\n考试时间：${exam.nextExamDate}`
    });
  }

  function handle() {
    if (exists) {
      removeExam(exam.slug);
    } else {
      addExam(exam);
      notify();
    }
  }

  return (
    <button
      onClick={handle}
      className={
        "px-4 py-2 rounded-xl border text-sm transition " +
        (exists ? "bg-black text-white" : "bg-white hover:border-black/40")
      }
    >
      {exists ? "已开启提醒" : "开启提醒"}
    </button>
  );
}
