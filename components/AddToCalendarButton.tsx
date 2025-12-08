"use client";

import { createICS } from "../utils/createICS";

type Props = {
  title: string;
  date: string;          // YYYY-MM-DD
  description?: string;
};

export default function AddToCalendarButton({ title, date, description }: Props) {
  function handleClick() {
    createICS({
      title,
      date,
      description: description || "",
    });
  }

  if (!date) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white text-xs md:text-sm hover:border-gray-500 hover:shadow-sm transition"
    >
      <span>📅</span>
      <span>添加到我的日历</span>
    </button>
  );
}
