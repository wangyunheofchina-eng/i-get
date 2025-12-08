export default function NextSteps({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="mt-8 p-6 rounded-2xl bg-white shadow border border-black/5 space-y-3">
      <h2 className="text-lg font-semibold text-gray-900">👣 接下来可以这样做</h2>

      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 leading-relaxed">
        {items.map((s: string, i: number) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <p className="text-xs text-gray-500 mt-2">
        不需要一下子解决所有问题。先完成其中 1 条，你就已经比昨天更清晰了。
      </p>
    </div>
  );
}
