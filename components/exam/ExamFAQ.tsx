export default function ExamFAQ({ faq = [] }) {
  if (!faq.length) return null;

  return (
    <div className="space-y-4">
      {faq.map((item, i) => (
        <div key={i} className="p-4 rounded-xl bg-white border shadow-sm">
          <p className="font-medium text-gray-900">Q：{item.q}</p>
          <p className="text-gray-700 mt-1 text-sm">A：{item.a}</p>
        </div>
      ))}
    </div>
  );
}
