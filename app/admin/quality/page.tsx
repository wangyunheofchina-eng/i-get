import { exams } from "../../../data/exams";
import UiCard from "../../../components/ui/UiCard";
import { scoreAllExams } from "../../../utils/contentScore";

export default function QualityDashboardPage() {
  const scored = scoreAllExams(exams)
    .sort((a, b) => b.score - a.score);

  const avgScore =
    scored.length === 0
      ? 0
      : Math.round(
          scored.reduce((sum, item) => sum + item.score, 0) / scored.length
        );

  const needImprove = scored.filter((item) => item.score < 70);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">�� 内容质量总览</h1>

      {/* 概览卡片 */}
      <div className="grid md:grid-cols-3 gap-6">
        <UiCard className="p-6">
          <p className="text-sm text-gray-500">考试总数</p>
          <p className="mt-1 text-3xl font-semibold">{exams.length}</p>
        </UiCard>

        <UiCard className="p-6">
          <p className="text-sm text-gray-500">平均内容完整度</p>
          <p className="mt-1 text-3xl font-semibold">{avgScore} / 100</p>
        </UiCard>

        <UiCard className="p-6">
          <p className="text-sm text-gray-500">需要完善的考试（&lt; 70 分）</p>
          <p className="mt-1 text-3xl font-semibold">{needImprove.length}</p>
        </UiCard>
      </div>

      {/* 需要完善列表 */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">🛠 优先完善列表（按分数从低到高）</h2>

        <div className="space-y-3">
          {scored
            .slice()
            .sort((a, b) => a.score - b.score)
            .map(({ exam, score, missing }) => (
              <UiCard
                key={exam.slug}
                className="p-4 flex items-start justify-between hover-apple"
              >
                <div>
                  <p className="text-sm font-medium">
                    {exam.name}
                    <span className="ml-2 text-xs text-gray-500">
                      {exam.category}
                    </span>
                  </p>
                  {missing.length > 0 ? (
                    <p className="mt-1 text-xs text-gray-600">
                      缺少字段：{missing.join("、")}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-green-600">
                      ✅ 内容已较为完整
                    </p>
                  )}
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">完整度</p>
                  <p className="text-xl font-semibold">{score}</p>
                  <a
                    href={`/admin/exams/${exam.slug}`}
                    className="mt-1 text-xs text-blue-600 underline inline-block"
                  >
                    去编辑
                  </a>
                </div>
              </UiCard>
            ))}
        </div>
      </section>
    </div>
  );
}
