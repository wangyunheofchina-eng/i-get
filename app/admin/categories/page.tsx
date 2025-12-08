import Link from "next/link";
import { categories } from "../../../data/categories";

export default function CategoryAdminList() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">📂 分类管理</h1>

        <a href="/admin/categories/new"
          className="px-4 py-2 rounded bg-black text-white text-sm">
          + 新增分类
        </a>
      </div>

      <table className="w-full text-left bg-white border shadow rounded-xl overflow-hidden">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-3">名称</th>
            <th className="p-3">Slug</th>
            <th className="p-3">操作</th>
          </tr>
        </thead>

        <tbody>
          {categories.map(cat => (
            <tr key={cat.slug} className="border-b hover:bg-gray-50">
              <td className="p-3">{cat.name}</td>
              <td className="p-3 text-gray-600">{cat.slug}</td>
              <td className="p-3">
                <Link href={`/admin/categories/${cat.slug}`}
                  className="text-blue-600 hover:underline">
                  编辑
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
