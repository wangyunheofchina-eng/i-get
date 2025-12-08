export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-wide">考证</span>
        </a>

        {/* Menu */}
        <div className="flex items-center space-x-6 text-sm text-gray-700">
          <a href="/exams" className="hover:text-black transition">考试列表</a>
          <a href="/calendar" className="hover:text-black transition">考试日历</a>
          <a href="/rankings" className="hover:text-black transition">排行榜</a>
          <a href="/favorites" className="hover:text-black transition">❤️ 收藏夹</a>
        </div>
      </div>
    </nav>
  );
}
