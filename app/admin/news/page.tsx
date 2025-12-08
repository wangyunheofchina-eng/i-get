import Link from "next/link";
import { getSortedNews } from "../../../data/news";

export default function AdminNewsList() {
  const list = getSortedNews();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">📰 资讯管理</h1>
        <a
          href="/admin/news/new"
          className="px-4 py-2 rounded bg-black text-white text-sm"
        >
          + 新建资讯（演示）
        </a>
      </div>

      <table className="w-full text-left bg-white border shadow rounded-xl overflow-hidden text-sm">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-3">标题</th>
            <th className="p-3">Tag</th>
            <th className="p-3">日期</th>
            <th className="p-3">关联考试</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item.slug} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <Link
                  href={`/news/${item.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {item.title}
                </Link>
              </td>
              <td className="p-3 text-gray-600">{item.tag}</td>
              <td className="p-3 text-gray-600">{item.date}</td>
              <td className="p-3 text-gray-600">{item.examSlug}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs text-gray-500">
        当前为静态数据演示。未来可以：从表格/Notion/飞书多维表同步数据，或接入简单 CMS。
      </p>
    </div>
  );
}
