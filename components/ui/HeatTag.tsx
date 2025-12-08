export default function HeatTag({ value }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full 
                     bg-gradient-to-r from-orange-400 to-orange-500 
                     text-white text-xs font-semibold shadow">
      🔥 热度 {value}
    </span>
  );
}
