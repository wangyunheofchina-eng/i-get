export default function ExamSuitable({ items }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">🎯 适合人群</h2>

      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
        {items.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
