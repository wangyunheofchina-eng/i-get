"use client";

import Link from "next/link";
import { exams } from "../../../data/exams";
import { scoreExam } from "../../../utils/contentScore";
import { validateExam } from "../../../utils/contentValidator";

export default function ExamAdminList() {
  const scored = exams.map(e => {
    const score = scoreExam(e).score;
    const issues = validateExam(e);
    return { ...e, score, issues };
  });

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">📝 考试管理</h1>
        <a href="/admin/exams/new" className="px-4 py-2 rounded bg-black text-white text-sm">
          + 新增考试
        </a>
      </div>

      <table className="w-full text-left bg-white border shadow rounded-xl overflow-hidden">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-3">名称</th>
            <th className="p-3">分类</th>
            <th className="p-3">内容分</th>
            <th className="p-3">问题数</th>
            <th className="p-3">操作</th>
          </tr>
        </thead>

        <tbody>
          {scored.map(exam => (
            <tr key={exam.slug} className="border-b hover:bg-gray-50">
              <td className="p-3">{exam.name}</td>
              <td className="p-3 text-gray-600">{exam.category}</td>

              <td className="p-3">{exam.score}</td>

              <td className="p-3">
                {exam.issues.length > 0 ? (
                  <span className="text-red-600 font-medium">
                    {exam.issues.length} 个问题
                  </span>
                ) : (
                  <span className="text-green-600">✔ 完整</span>
                )}
              </td>

              <td className="p-3">
                <Link
                  href={`/admin/exams/${exam.slug}`}
                  className="text-blue-600 hover:underline"
                >
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
