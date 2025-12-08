export default function ExamLinks({ links = [] }) {
  if (!links.length) return null;

  return (
    <ul className="space-y-2 text-sm">
      {links.map((item, i) => (
        <li key={i}>
          <a
            href={item.url}
            target="_blank"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {item.name} →
          </a>
        </li>
      ))}
    </ul>
  );
}
