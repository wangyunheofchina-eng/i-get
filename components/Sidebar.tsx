"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  AcademicCapIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const nav = [
    { name: "首页", href: "/", icon: HomeIcon },
    { name: "考试", href: "/exams", icon: AcademicCapIcon },
    { name: "搜索", href: "/search", icon: MagnifyingGlassIcon },
    { name: "收藏", href: "/favorites", icon: BookmarkIcon },
    { name: "日历", href: "/calendar", icon: CalendarIcon },
    { name: "资讯", href: "/news", icon: NewspaperIcon },
  ];

  return (
    <aside
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`
        fixed left-0 top-0 z-40
        h-screen bg-white border-r shadow-lg
        flex flex-col
        transition-all duration-500
        ease-[cubic-bezier(.25,.8,.25,1)]
        ${open ? "w-56" : "w-20"}
      `}
    >
      {/* Logo 区域 */}
      <div className="h-20 flex items-center px-6 border-b">
        <span
          className={`
            text-xl font-semibold text-gray-900 tracking-wide
            transition-all duration-500
            ease-[cubic-bezier(.25,.8,.25,1)]
            ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
          `}
        >
          考证
        </span>

        {/* 折叠后的 KZ（仅收起时显示） */}
        {!open && (
          <span
            className="
              absolute left-6 text-xl font-bold
              opacity-100
              transition-all duration-500 ease-[cubic-bezier(.25,.8,.25,1)]
            "
          >
            KZ
          </span>
        )}
      </div>

      {/* 菜单 */}
      <div className="flex flex-col gap-1 px-3 mt-4">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              flex items-center gap-3 px-3 py-3
              rounded-xl hover:bg-gray-100
              transition-all duration-300
            "
          >
            {/* 图标：滑动 + 渐变 */}
            <item.icon
              className={`
                w-6 h-6 text-gray-700
                transition-all duration-500 ease-[cubic-bezier(.25,.8,.25,1)]
                ${open ? "translate-x-0 opacity-100" : "translate-x-1 opacity-90"}
              `}
            />

            {/* 文本：从透明慢慢滑出 */}
            <span
              className={`
                text-sm text-gray-900 whitespace-nowrap
                transition-all duration-500
                ease-[cubic-bezier(.25,.8,.25,1)]
                ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}
              `}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
