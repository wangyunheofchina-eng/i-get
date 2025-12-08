"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Library, Search, Flame, Calendar } from "lucide-react";

const nav = [
  { href: "/exams", icon: Library, label: "考试" },
  { href: "/search", icon: Search, label: "搜索" },
  { href: "/rankings", icon: Flame, label: "热门" },
  { href: "/calendar", icon: Calendar, label: "日历" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t flex justify-around items-center backdrop-blur">
      {nav.map(({ href, icon: Icon, label }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={
              "flex flex-col items-center text-xs " +
              (active ? "text-black font-medium" : "text-gray-500")
            }
          >
            <Icon size={20} strokeWidth={1.8} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
