"use client";

interface Props {
  year: number;
  month: number;
  mode: "month" | "week";
  onPrev: () => void;
  onNext: () => void;
  onPrevWeek: () => void;
  onNextWeek: () => void;
  onToday: () => void;
}

export default function CalendarHeader({
  year,
  month,
  mode,
  onPrev,
  onNext,
  onPrevWeek,
  onNextWeek,
  onToday,
}: Props) {
  const monthNames = [
    "一月","二月","三月","四月","五月","六月",
    "七月","八月","九月","十月","十一月","十二月"
  ];

  return (
    <div className="flex items-center justify-between">

      {/* 左侧标题 */}
      <div>
        <h2 className="text-xl font-semibold">{monthNames[month]} · {year}</h2>
      </div>

      {/* 右侧控制条 */}
      <div className="flex items-center gap-3 text-sm">

        {/* ← → 按钮：根据视图模式切换行为 */}
        <button
          onClick={mode === "month" ? onPrev : onPrevWeek}
          className="px-3 py-1 rounded-full hover:bg-gray-100"
        >
          ←
        </button>

        <button
          onClick={mode === "month" ? onNext : onNextWeek}
          className="px-3 py-1 rounded-full hover:bg-gray-100"
        >
          →
        </button>

        {/* 今天 */}
        <button
          onClick={onToday}
          className="px-3 py-1 rounded-full bg-black text-white hover:bg-black/90"
        >
          今天
        </button>

      </div>
    </div>
  );
}
