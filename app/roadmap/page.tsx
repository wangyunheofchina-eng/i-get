"use client";

import Link from "next/link";

const roadmap = [
  {
    title: "教育方向",
    steps: [
      { name: "普通话等级证书", slug: "putonghua" },
      { name: "教师资格证（教资）", slug: "teacher-cert" },
      { name: "教育心理学相关证书", slug: "edu-psych" }
    ]
  },
  {
    title: "IT 互联网方向",
    steps: [
      { name: "软考初级", slug: "ruankaocj" },
      { name: "软考中级", slug: "ruankaozj" },
      { name: "信息安全工程师", slug: "sec-eng" }
    ]
  },
  {
    title: "财会方向",
    steps: [
      { name: "初级会计", slug: "cjkuaiji" },
      { name: "中级会计", slug: "zjkuaiji" },
      { name: "注册会计师 CPA", slug: "cpa" }
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="pt-10 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">职业路线图</h1>

      <div className="space-y-6">
        {roadmap.map((cat) => (
          <div key={cat.title} className="card p-5 space-y-3">
            <h3 className="text-lg font-medium">{cat.title}</h3>

            <div className="flex gap-3 flex-wrap">
              {cat.steps.map((step, idx) => (
                <Link
                  key={step.slug}
                  href={`/exams/${step.slug}`}
                  className="px-3 py-2 bg-black text-white text-xs rounded-xl"
                >
                  {idx + 1}. {step.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
