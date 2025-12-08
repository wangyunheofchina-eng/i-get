import { exams } from "../../data/exams";

export const metadata = {
  title: "热门考试排行榜 - i get",
  description: "查看当前最热门、最受关注的考试排行。",
};

export default function RankingsPage() {
  // 排序：热度高 → 低；没有 heat 字段的默认是 0
  const sorted = [...exams].sort((a, b) => (b.heat || 0) - (a.heat || 0));

  return (
    <div className="pt-10 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">🔥 热门考试排行榜</h1>

      <p className="text-gray-600">
        根据用户访问量、收藏量、页面浏览量等综合热度计算。
      </p>

      <div className="space-y-4">
        {sorted.map((exam, index) => (
          <a
            key={exam.slug}
            href={`/exams/${exam.slug}`}
            className="flex items-center justify-between p-4 rounded-xl bg-white shadow-sm border border-black/5 hover:shadow-md transition"
          >
            <div>
              <p className="text-sm text-gray-500">#{index + 1}</p>
              <h2 className="text-lg font-medium">{exam.name}</h2>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">热度</p>
              <p className="text-xl font-semibold">{exam.heat || 0}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
