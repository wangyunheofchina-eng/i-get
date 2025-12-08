"use client";

import { useState } from "react";
import { getMonthDays, isSameDay, formatDate } from "../utils/calendar";
import CalendarEvent from "./CalendarEvent";
import { exams } from "../data/exams";

export default function Calendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const days = getMonthDays(year, month);

  function nextMonth() {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  function prevMonth() {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  }

  return (
    <div className="space-y-6">
      {/* 顶部导航 */}
      <div className="flex justify-between items-center">
        <button onClick={prevMonth}>←</button>
        <h2 className="text-xl font-semibold">
          {year} 年 {month + 1} 月
        </h2>
        <button onClick={nextMonth}>→</button>
      </div>

      {/* 日历网格 */}
      <div className="grid grid-cols-7 gap-3 text-center">
        {["日","一","二","三","四","五","六"].map(d => (
          <div key={d} className="text-sm text-gray-500">{d}</div>
        ))}

        {days.map((day, idx) => {
          const events = exams.filter(exam =>
            isSameDay(formatDate(exam.examDate || ""), day)
          );

          return (
            <div
              key={idx}
              className="border min-h-[80px] p-1 rounded-xl bg-white shadow-sm"
            >
              <p className="text-xs text-gray-600">{day.getDate()}</p>

              {events.map(e => (
                <CalendarEvent key={e.slug} exam={e} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
