import Link from "next/link";
import UiCard from "./ui/UiCard";

export default function ExamCard({ exam }) {
  return (
    <Link href={`/exams/${exam.slug}`} className="block">
      <UiCard className="p-5">
        <p className="text-xs text-gray-500">{exam.category}</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          {exam.name}
        </h3>

        <p className="mt-2 text-xs text-gray-600">
          下一次考试：{exam.nextExamDate}
        </p>

        {exam.heat !== undefined && (
          <p className="text-xs text-orange-600 mt-1">
            热度：{exam.heat}
          </p>
        )}
      </UiCard>
    </Link>
  );
}
