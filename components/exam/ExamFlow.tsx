export default function ExamFlow({ steps = [] }) {
  return (
    <div className="space-y-4">
      {steps.map((s, i) => (
        <div key={i} className="flex space-x-3 items-start">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-xs">
            {i + 1}
          </div>
          <p className="text-sm text-gray-700">{s}</p>
        </div>
      ))}
    </div>
  );
}
