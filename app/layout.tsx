import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "考证 - 清晰你的考试方向",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="bg-[#f6f7f8] text-gray-900">

        {/* 侧边栏 */}
        <Sidebar />

        {/* 主内容固定左边距，避免被侧边栏挤压 */}
        <main className="ml-20 px-8 py-10">
          {children}
        </main>

      </body>
    </html>
  );
}
