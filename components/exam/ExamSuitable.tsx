export default function ExamSuitable({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}
