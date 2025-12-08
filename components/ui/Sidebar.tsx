"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Calendar,
  Search,
  BarChart,
  Bookmark,
  Layers,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full border-r bg-white/70 backdrop-blur-xl
        transition-all duration-300
        ${open ? "w-56" : "w-16"}
      `}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-3">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 hover:bg-gray-100 rounded-xl transition"
        >
          {open ? "←" : "→"}
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4 space-y-2 px-3">
        <SidebarItem open={open} href="/" label="首页" icon={<Home size={18} />} />
        <SidebarItem open={open} href="/exams" label="考试大全" icon={<BookOpen size={18} />} />
        <SidebarItem open={open} href="/calendar" label="考试日历" icon={<Calendar size={18} />} />
        <SidebarItem open={open} href="/search" label="搜索" icon={<Search size={18} />} />
        <SidebarItem open={open} href="/rankings" label="排行榜" icon={<BarChart size={18} />} />
        <SidebarItem open={open} href="/favorites" label="收藏夹" icon={<Bookmark size={18} />} />
        <SidebarItem open={open} href="/guide" label="找方向" icon={<Layers size={18} />} />
      </nav>
    </aside>
  );
}

function SidebarItem({ href, label, icon, open }) {
  return (
    <Link
      href={href}
      className="
        flex items-center gap-3 px-3 py-2 rounded-xl
        text-gray-800 hover:bg-gray-100 transition
      "
    >
      {icon}
      {open && <span className="text-sm">{label}</span>}
    </Link>
  );
}
