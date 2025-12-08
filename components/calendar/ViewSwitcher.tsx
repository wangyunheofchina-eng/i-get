"use client";

export default function ViewSwitcher({ mode, setMode }) {
  return (
    <div className="inline-flex bg-gray-100 rounded-full p-1 text-sm select-none">
      {[
        { key: "month", label: "月视图" },
        { key: "week", label: "周视图" },
      ].map((item) => (
        <button
          key={item.key}
          onClick={() => setMode(item.key)}
          className={`
            px-4 py-1.5 rounded-full transition
            ${mode === item.key ?
              "bg-white shadow-sm font-medium text-gray-900" :
              "text-gray-600 hover:text-gray-900"
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
