"use client";

export default function CalendarYearPicker({ year, onSelect }) {
  const years = [];
  for (let y = year - 6; y <= year + 6; y++) years.push(y);

  return (
    <div className="
      absolute top-12 left-1/2 -translate-x-1/2 
      bg-white shadow-xl rounded-2xl p-4 
      grid grid-cols-3 gap-3 z-50
      border border-black/10 backdrop-blur-lg
      max-h-64 overflow-y-auto
    ">
      {years.map(y => (
        <button
          key={y}
          className={`
            py-2 rounded-xl text-sm transition
            ${y === year ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}
          `}
          onClick={() => onSelect(y)}
        >
          {y}
        </button>
      ))}
    </div>
  );
}
