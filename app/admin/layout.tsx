import "../globals.css";

export default function AdminLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="flex">
        {/* 左侧边栏 */}
        <aside className="w-60 h-screen border-r bg-white p-6 space-y-6">
          <h1 className="text-lg font-semibold">i get · 管理后台</h1>

          <nav className="space-y-3 text-sm">
            <a href="/admin" className="block hover:text-black">
              📚 内容总览
            </a>
            <a href="/admin/quality" className="block hover:text-black">
              ✅ 内容质量
            </a>
            <a href="/admin/exams" className="block hover:text-black">
              📝 考试管理
            </a>
            <a href="/admin/categories" className="block hover:text-black">
              📂 分类管理
            </a>
            <a href="/admin/news" className="block hover:text-black">
              📰 资讯管理
            </a>
          </nav>
        </aside>

        {/* 右侧内容区域 */}
        <main className="flex-1 p-10 bg-[#f5f5f7] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
