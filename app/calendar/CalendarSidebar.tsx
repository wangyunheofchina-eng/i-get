import { countdownInfo } from "../../utils/countdown";

export default function CalendarSidebar({ date, exams }) {
  if (!date) {
    return (
      <div className="apple-card p-6 text-sm text-gray-600 rounded-2xl min-h-[150px] flex items-center justify-center">
        选择一个日期查看考试安排
      </div>
    );
  }

  const list = exams.filter(ex =>
    (Array.isArray(ex.dates) && ex.dates.includes(date)) ||
    ex.nextExamDate === date
  );

  return (
    <div className="apple-card p-6 rounded-2xl space-y-4">
      <p className="text-xs text-gray-500">选中日期</p>
      <p className="text-lg font-semibold">{date}</p>

      {list.length === 0 && (
        <p className="text-xs text-gray-500">当天没有考试安排</p>
      )}

      {list.map(exam => {
        const { examDays } = countdownInfo(exam);

        return (
          <a
            key={exam.slug}
            href={`/exams/${exam.slug}`}
            className="apple-card p-4 block rounded-xl hover:-translate-y-1 transition"
          >
            <p className="text-sm font-medium">{exam.name}</p>
            <p className="text-[11px] text-gray-500">{exam.category}</p>

            {examDays != null && (
              <p className="text-[11px] text-blue-600 mt-2">
                ⏱ 距考试 {examDays} 天
              </p>
            )}
          </a>
        );
      })}
    </div>
  );
}
