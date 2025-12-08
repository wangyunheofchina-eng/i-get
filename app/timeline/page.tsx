"use client";

import { exams } from "../../data/exams";
import Link from "next/link";

export default function TimelinePage() {
  const sorted = exams
    .filter(e => e.nextExamDate)
    .sort((a, b) => new Date(a.nextExamDate) - new Date(b.nextExamDate));

  return (
    <div className="pt-10 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">考试时间线</h1>

      <div className="space-y-6">
        {sorted.map((exam) => (
          <Link
            key={exam.slug}
            href={`/exams/${exam.slug}`}
            className="block card p-5 hover:-translate-y-1 hover:shadow-md transition-all"
          >
            <h3 className="text-lg font-medium">{exam.name}</h3>

            <p className="mt-1 text-sm text-gray-600">{exam.category}</p>

            <div className="mt-2 text-sm text-gray-700">
              📅 考试时间：{exam.nextExamDate}
            </div>
            <div className="text-xs text-gray-500">
              报名：{exam.registrationTime}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
