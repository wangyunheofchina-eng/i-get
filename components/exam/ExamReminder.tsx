"use client";

import { generateICS } from "../../utils/ics";

export default function ExamReminder({ exam }) {
  function handleDownload() {
    const ics = generateICS(exam);
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = exam.slug + ".ics";
    a.click();
  }

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 rounded bg-black text-white text-sm hover:bg-black/90"
    >
      添加到日历（ICS）
    </button>
  );
}
