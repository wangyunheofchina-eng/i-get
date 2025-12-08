import Link from "next/link";
import { exams } from "../../data/exams";
import { categories } from "../../data/categories";

export default function WikiHomePage() {
  const byCategory = categories.map((cat) => ({
    ...cat,
    items: exams.filter((e) => e.category.includes(cat.name.split("·")[0])),
  }));

  const hot = [...exams]
    .filter((e) => typeof e.heat === "number")
    .sort((a, b) => (b.heat || 0) - (a.heat || 0))
    .slice(0, 6);

  return (
    <div className="max-w-5xl mx-auto pt-10 space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">📘 考试百科</h1>
        <p className="text-gray-600 text-sm max-w-2xl">
          把考试信息做成“百科”，帮你快速看清楚：有哪些证可以考、各自难度如何、
          是否适合自己、通过之后能做什么。
        </p>

        <p className="text-xs text-gray-500">
          提示：详情页字段说明见{" "}
          <Link href="/wiki/guide" className="text-blue-600 underline">
            《字段说明》
          </Link>
        </p>
      </section>

      {/* 热门考试 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">🔥 当前关注度较高的考试</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {hot.map((e) => (
            <Link
              key={e.slug}
              href={`/exams/${e.slug}`}
              className="block p-4 rounded-xl bg-white border border-black/5 hover:shadow-md transition text-sm"
            >
              <p className="text-xs text-gray-500">{e.category}</p>
              <p className="mt-1 font-semibold">{e.name}</p>
              {e.nextExamDate && (
                <p className="mt-1 text-xs text-gray-600">
                  下一次考试：{e.nextExamDate}
                </p>
              )}
            </Link>
          ))}
          {hot.length === 0 && (
            <p className="text-sm text-gray-500">
              当前还没有热度数据，稍后再来看看～
            </p>
          )}
        </div>
      </section>

      {/* 按方向浏览 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">📂 按方向浏览考试</h2>

        <div className="space-y-6">
          {byCategory.map((block) => (
            <div key={block.slug} className="space-y-2">
              <h3 className="text-sm font-semibold">{block.name}</h3>
              {block.items.length === 0 ? (
                <p className="text-xs text-gray-500">暂时还没有录入考试。</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {block.items.map((e) => (
                    <Link
                      key={e.slug}
                      href={`/exams/${e.slug}`}
                      className="px-3 py-1.5 rounded-full bg-white border border-black/5 text-xs hover:border-black/20"
                    >
                      {e.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
