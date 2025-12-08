"use client";

import { getLunarInfo } from "../../utils/lunar";
import { getHolidayInfo } from "../../utils/holidays";

export default function WeekGrid({ days, examMap, onSelectDate, selectedDate }) {
  return (
    <div className="grid grid-cols-7 gap-3">
      {days.map((d) => {
        const key = `${d.year}-${d.month + 1}-${d.day}`;

        const exams = examMap[key] || [];
        const lunar = getLunarInfo(d.date);
        const holiday = getHolidayInfo(d.date);
        const lunarText =
          holiday ||
          lunar.solarTerm ||
          lunar.festival ||
          lunar.lunarDay;

        const isSelected = selectedDate === key;

        return (
          <button
            key={d.key}
            onClick={() => onSelectDate(key)}
            className={`
              p-3 rounded-2xl bg-white shadow-sm hover:shadow-md
              border text-left transition
              ${isSelected ? "bg-blue-50 border-blue-300" : "border-gray-200"}
            `}
          >
            {/* 日期 */}
            <div className="text-sm font-semibold text-gray-900">
              {d.day}
            </div>

            {/* 农历/节气/节日 */}
            <div
              className={`
                text-[11px] mt-1 
                ${holiday || lunar.festival ? "text-red-500" : "text-gray-500"}
              `}
            >
              {lunarText}
            </div>

            {/* 考试列表 */}
            <div className="flex flex-col gap-1 mt-2">
              {exams.map((e) => (
                <span
                  key={e.slug}
                  className="inline-block text-[10px] px-2 py-[2px] rounded-xl bg-blue-100 text-blue-600 truncate"
                >
                  {e.name}
                </span>
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
}
