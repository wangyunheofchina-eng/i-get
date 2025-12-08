import Link from "next/link";
import UiCard from "../../components/ui/UiCard";
import { getSortedNews } from "../../data/news";

export const metadata = {
  title: "考试资讯 - i get",
  description: "集中查看考试时间、政策变化、趋势洞察等最新资讯。",
};

function formatDate(date: string) {
  // 避免 SSR / Hydration 差异，简单字符串处理
  return date.replace(/-/g, ".");
}

export default function NewsPage() {
  const list = getSortedNews();

  return (
    <div className="pt-10 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          📰 考试资讯
        </h1>
        <p className="text-gray-600 max-w-2xl text-sm">
          这里是「信息更新区」：报考提醒、政策变化、趋势洞察……
          帮助你持续刷新对考试和职业路径的理解。
        </p>
      </header>

      <div className="space-y-4">
        {list.map((item) => (
          <UiCard
            key={item.slug}
            className="p-5 hover-apple flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span className="inline-flex px-2 py-0.5 rounded-full bg-gray-100">
                  {item.tag}
                </span>
                <span>{formatDate(item.date)}</span>
              </div>

              <Link
                href={`/news/${item.slug}`}
                className="text-base font-semibold text-gray-900 hover:underline"
              >
                {item.title}
              </Link>

              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {item.summary}
              </p>
            </div>

            <div className="text-xs text-gray-500">
              <Link
                href={`/exams/${item.examSlug}`}
                className="underline hover:text-black"
              >
                关联考试详情 →
              </Link>
            </div>
          </UiCard>
        ))}
      </div>
    </div>
  );
}
