import Link from "next/link";
import UiCard from "../../../components/ui/UiCard";
import { news } from "../../../data/news";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export default function NewsDetailPage({ params }: PageProps) {
  const item = news.find((n) => n.slug === params.slug);

  if (!item) {
    return <div className="pt-10 text-gray-600">未找到这条资讯。</div>;
  }

  return (
    <div className="pt-10 space-y-8 max-w-3xl">
      <Link
        href="/news"
        className="text-xs text-gray-500 hover:text-black inline-flex items-center gap-1"
      >
        ← 返回资讯列表
      </Link>

      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-flex px-2 py-0.5 rounded-full bg-gray-100">
            {item.tag}
          </span>
          <span>{item.date.replace(/-/g, ".")}</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          {item.title}
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed">{item.summary}</p>
      </header>

      <UiCard className="p-6 space-y-4">
        {item.content.map((p, i) => (
          <p key={i} className="text-sm text-gray-800 leading-relaxed">
            {p}
          </p>
        ))}
      </UiCard>

      <UiCard className="p-4 text-sm flex items-center justify-between">
        <div className="text-gray-600">
          想更系统地了解这类考试？
        </div>
        <Link
          href={`/exams/${item.examSlug}`}
          className="px-4 py-1.5 rounded-full bg-black text-white text-xs hover:bg-black/90"
        >
          查看对应考试 →
        </Link>
      </UiCard>
    </div>
  );
}
