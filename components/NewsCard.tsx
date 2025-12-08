import Link from "next/link";

export default function NewsCard({ item }) {
  return (
    <Link
      href={`/news/${item.id}`}
      className="p-5 rounded-xl bg-white shadow border hover:shadow-lg transition block"
    >
      {item.cover && (
        <img
          src={item.cover}
          alt={item.title}
          className="rounded-lg mb-3 w-full h-40 object-cover"
        />
      )}
      <p className="text-xs text-gray-500">{item.date}</p>
      <h3 className="mt-1 text-sm font-semibold">{item.title}</h3>
      <p className="text-xs text-gray-600 mt-2 line-clamp-2">
        {item.content.replace(/\s+/g, ' ').slice(0, 60)}...
      </p>
    </Link>
  );
}
