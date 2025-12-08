export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="搜索考试名称，如：教师资格证 / CPA / 软考"
        className="
          w-full px-5 py-3 rounded-full
         bg-white/80 backdrop-blur
         border border-black/10 shadow-sm
         focus:outline-none focus:ring-2 focus:ring-black/10
         transition text-sm
        "
      />
      <span className="absolute right-5 top-3 text-gray-400 text-sm">🔍</span>
    </div>
  );
}
