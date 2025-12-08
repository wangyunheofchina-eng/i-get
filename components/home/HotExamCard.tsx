import Link from "next/link";

export default function HotExamCard({ exam, rank }) {
  return (
    <Link
      href={`/exams/${exam.slug}`}
      className="
        group p-5 rounded-2xl bg-white shadow-sm border border-black/5
        hover:shadow-lg hover:-translate-y-1 transition
      "
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs text-gray-400">#{rank} 热度榜</p>
          <h3 className="mt-1 text-base font-semibold group-hover:text-black">
            {exam.name}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            下一次考试：{exam.nextExamDate}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">热度</p>
          <p className="text-xl font-semibold text-orange-600">
            {exam.heat || 0}
          </p>
        </div>
      </div>
    </Link>
  );
}
