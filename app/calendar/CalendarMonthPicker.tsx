"use client";

const months = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];

export default function CalendarMonthPicker({ currentMonth, onSelect }) {
  return (
    <div className="
      absolute top-12 left-1/2 -translate-x-1/2 
      bg-white shadow-xl rounded-2xl p-4 
      grid grid-cols-3 gap-3 z-50
      border border-black/10
      backdrop-blur-lg
    ">
      {months.map((m, i) => (
        <button
          key={m}
          className={`
            py-2 rounded-xl text-sm transition
            ${i === currentMonth ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}
          `}
          onClick={() => onSelect(i)}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
