"use client";

import { getLunarInfo } from "../../utils/lunar";
import { getHolidayInfo } from "../../utils/holidays";

export default function CalendarGrid({ days, examMap, onSelectDate, selectedDate }) {
  const today = new Date().toDateString();
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

  return (
    <div className="space-y-4">

      {/* 星期标题区 */}
      <div className="grid grid-cols-7 text-center text-xs text-gray-600 font-medium tracking-wide">
        {weekdays.map(w => <div key={w}>{w}</div>)}
      </div>

      {/* 日历主体 */}
      <div className="grid grid-cols-7 gap-3">
        {days.map((d) => {
          const key = `${d.year}-${d.month + 1}-${d.day}`;
          const exams = examMap[key] || [];

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
                text-left p-3 rounded-xl

                /* Apple 实体卡片感 */
                bg-white border border-gray-200 shadow-sm

                /* 交互感 */
                transition-all duration-200 hover:shadow-md hover:-translate-y-0.5

                /* 非当月灰化 */
                ${!d.isCurrentMonth ? "opacity-40" : ""}

                /* 今日 */
                ${isToday ? "border-blue-500 shadow-md" : ""}

                /* 选中态 */
                ${isSelected ? "ring-2 ring-blue-500 bg-blue-50" : ""}
              `}
            >

              {/* 公历日期 */}
              <div className="text-sm font-semibold text-gray-900">
                {d.day}
              </div>

              {/* 农历 / 节气 / 节日 */}
              <div className={`
                text-[11px] mt-1
                ${holiday || lunar.festival ? "text-red-600" : "text-gray-500"}
              `}>
                {lunarText}
              </div>

              {/* 考试标记 */}
              <div className="flex flex-col gap-1 mt-2">
                {exams.map(e => (
                  <span
                    key={e.slug}
                    className="text-[10px] px-2 py-[2px] rounded-md bg-blue-100 text-blue-700 truncate"
                  >
                    {e.name}
                  </span>
                ))}
              </div>

            </button>
          );
        })}
      </div>
    </div>
  );
}
