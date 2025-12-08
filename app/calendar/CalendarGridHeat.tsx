"use client";

import { getLunarInfo } from "../../utils/lunar";
import { getHolidayInfo } from "../../utils/holidays";

export default function CalendarGridHeat({ days, examMap, onSelectDate, selectedDate }) {
  const today = new Date().toDateString();

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-7 text-center text-[11px] text-gray-500 font-medium">
        {["日","一","二","三","四","五","六"].map(w => <div key={w}>{w}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-[6px]">
        {days.map((d) => {
          const key = `${d.year}-${d.month + 1}-${d.day}`;
          const exams = examMap[key] || [];
          const heat = Math.min(exams.length, 3); // 0~3 颜色等级

          const heatColor = [
            "bg-white",
            "bg-blue-50",
            "bg-blue-100",
            "bg-blue-200"
          ][heat];

          const isToday = d.date.toDateString() === today;
          const isSelected = selectedDate === key;

          const lunar = getLunarInfo(d.date);
          const holiday = getHolidayInfo(d.date);
          const lunarText =
            holiday || lunar.solarTerm || lunar.festival || lunar.lunarDay;

          return (
            <button
              key={d.key}
              onClick={() => onSelectDate(key)}
              className={`
                rounded-2xl p-3 border shadow-sm transition-all text-left
                ${heatColor}
                ${!d.isCurrentMonth ? "opacity-40" : ""}
                ${isToday ? "ring-2 ring-blue-400" : ""}
                ${isSelected ? "bg-blue-300 text-white border-blue-400" : ""}
              `}
            >
              <div className="text-sm font-semibold">{d.day}</div>
              <div className={`text-[10px] mt-1 ${holiday ? "text-red-500" : "text-gray-600"}`}>
                {lunarText}
              </div>

              {exams.length > 0 && (
                <div className="mt-2 text-[10px] text-blue-700 font-medium">
                  {exams.length} 个考试
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
