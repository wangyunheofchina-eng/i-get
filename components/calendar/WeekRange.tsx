export default function WeekRange({ start, end }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
      <span>{start}</span>
      <span className="opacity-50">—</span>
      <span>{end}</span>
    </div>
  );
}
