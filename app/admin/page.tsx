import { getGlobalContentStats } from "../../utils/contentStats";

export default function AdminDashboard() {
  const stats = getGlobalContentStats();

  return (
    <div className="space-y-12">

      {/* 顶部大标题 */}
      <h1 className="text-2xl font-semibold">📚 内容总览（运营驾驶舱）</h1>

      {/* 概览卡片 */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white shadow border">
          <p className="text-gray-500 text-sm">全站内容平均分</p>
          <p className="text-3xl font-semibold mt-1">{stats.avgScore} 分</p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow border">
          <p className="text-gray-500 text-sm">考试总数量</p>
          <p className="text-3xl font-semibold mt-1">{stats.total}</p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow border">
          <p className="text-gray-500 text-sm">待重点补齐（低于 60 分）</p>
          <p className="text-3xl font-semibold mt-1">{stats.lowQuality.length}</p>
        </div>
      </div>

      {/* 分类内容质量分析 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">📂 分类内容质量</h2>

        <table className="w-full text-left bg-white border shadow rounded-xl overflow-hidden">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3">分类</th>
              <th className="p-3">考试数量</th>
              <th className="p-3">平均内容分</th>
            </tr>
          </thead>
          <tbody>
            {stats.categoryStats.map((c, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3">{c.category}</td>
                <td className="p-3">{c.count}</td>
                <td className="p-3">
                  <span
                    className={
                      "px-2 py-1 rounded text-xs " +
                      (c.avgScore >= 85
                        ? "bg-green-100 text-green-700"
                        : c.avgScore >= 60
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700")
                    }
                  >
                    {c.avgScore}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 待补齐列表 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">⚠️ 优先补齐（内容评分最低）</h2>

        <div className="space-y-3">
          {stats.lowQuality.map((e) => (
            <a
              key={e.slug}
              href={`/admin/exams/${e.slug}`}
              className="block p-4 bg-white shadow border rounded-xl hover:bg-gray-50"
            >
              <p className="font-medium">{e.name}</p>
              <p className="text-sm text-gray-600">
                内容分：{e.score} · 分类：{e.category}
              </p>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
