import HoverCard from "../../components/HoverCard";

export default function CalendarItem({ exam }) {

  const content = (
    <div>
      <p className="font-semibold text-gray-900">{exam.name}</p>
      <p className="text-gray-600 text-xs mt-1">{exam.description}</p>

      <div className="mt-2 text-xs text-gray-700 space-y-1">
        <p>📅 考试时间：{exam.nextExamDate}</p>
        <p>📝 报名：{exam.registrationTime}</p>
      </div>

      <div className="mt-2">
        <p className="text-xs font-medium">难度</p>
        <div className="flex space-x-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <div key={i}
              className={`w-2 h-2 rounded-full ${i < (exam.difficulty || 3) ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <HoverCard content={content}>
      <a
        href={`/exams/${exam.slug}`}
        className="block text-xs bg-black text-white px-2 py-1 rounded-full"
      >
        {exam.name}
      </a>
    </HoverCard>
  );
}
