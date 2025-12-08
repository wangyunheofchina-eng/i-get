"use client";

import { exams } from "../../../data/exams";
import UiCard from "../../../components/ui/UiCard";
import ExamSection from "../../../components/exam/ExamSection";
import ExamSuitable from "../../../components/exam/ExamSuitable";
import ExamFlow from "../../../components/exam/ExamFlow";

export default function ExamDetailPage({ params }) {
  const exam = exams.find(e => e.slug === params.slug);

  if (!exam) return <div className="p-10 text-gray-500">未找到考试</div>;

  return (
    <div className="pt-10 space-y-10 max-w-3xl">

      {/* 顶部标题区 */}
      <div className="space-y-3">
        <p className="text-xs text-[var(--color-text-secondary)] tracking-wide uppercase">
          {exam.category}
        </p>

        <h1 className="text-4xl font-semibold text-[var(--color-text)]">
          {exam.name}
        </h1>

        {exam.description && (
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xl">
            {exam.description}
          </p>
        )}
      </div>

      {/* 基本信息 */}
      <ExamSection title="📅 基本信息">
        <div className="space-y-1 text-sm">
          <p>📌 下一次考试：{exam.nextExamDate}</p>
          <p>📝 报名时间：{exam.registrationTime}</p>
          {exam.level && <p>📘 等级 / 类别：{exam.level}</p>}
          {exam.duration && <p>⏳ 学习周期：{exam.duration}</p>}
        </div>
      </ExamSection>

      {/* 适合人群 */}
      {exam.suitable && exam.suitable.length > 0 && (
        <ExamSection title="🎯 适合人群">
          <ExamSuitable items={exam.suitable} />
        </ExamSection>
      )}

      {/* 报考流程 */}
      {exam.flow && exam.flow.length > 0 && (
        <ExamSection title="🛠 报考流程">
          <ExamFlow steps={exam.flow} />
        </ExamSection>
      )}

      {/* 备考建议 */}
      {exam.tips && exam.tips.length > 0 && (
        <ExamSection title="📘 备考建议">
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {exam.tips.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </ExamSection>
      )}

      {/* 推荐相似考试 */}
      <ExamSection title="📚 相似考试推荐">
        <div className="grid md:grid-cols-2 gap-4">
          {exams
            .filter(e => e.category === exam.category && e.slug !== exam.slug)
            .slice(0, 4)
            .map(item => (
              <UiCard key={item.slug} className="p-4 hover-apple">
                <a href={`/exams/${item.slug}`} className="block text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                    {item.category}
                  </p>
                </a>
              </UiCard>
            ))}
        </div>
      </ExamSection>

    </div>
  );
}

{/* =================== 倒计时模块（关键信息） =================== */}
(() => {
  const { examDays, regStartDays, regEndDays } = countdownInfo(exam);

  return (
    <UiCard className="p-5 space-y-2 mt-6">
      <h2 className="text-lg font-semibold">⏱️ 倒计时</h2>

      {examDays != null && (
        <p className="text-sm text-gray-700">
          📘 距离考试还有：
          <span className="font-semibold text-blue-600">{examDays}</span> 天
        </p>
      )}

      {regStartDays != null && (
        <p className="text-sm text-gray-700">
          🟢 距离报名开始：
          <span className="font-semibold text-green-600">{regStartDays}</span> 天
        </p>
      )}

      {regEndDays != null && (
        <p className="text-sm text-gray-700">
          🔔 距离报名截止：
          <span className="font-semibold text-red-600">{regEndDays}</span> 天
        </p>
      )}

      {examDays == null && regEndDays == null && (
        <p className="text-sm text-gray-500">暂无倒计时信息。</p>
      )}
    </UiCard>
  );
})()


{/* =================== 倒计时模块（关键信息） =================== */}
(() => {
  const { examDays, regStartDays, regEndDays } = countdownInfo(exam);

  return (
    <UiCard className="p-5 space-y-2 mt-6">
      <h2 className="text-lg font-semibold">⏱️ 倒计时</h2>

      {examDays != null && (
        <p className="text-sm text-gray-700">
          📘 距离考试还有：
          <span className="font-semibold text-blue-600">{examDays}</span> 天
        </p>
      )}

      {regStartDays != null && (
        <p className="text-sm text-gray-700">
          🟢 距离报名开始：
          <span className="font-semibold text-green-600">{regStartDays}</span> 天
        </p>
      )}

      {regEndDays != null && (
        <p className="text-sm text-gray-700">
          🔔 距离报名截止：
          <span className="font-semibold text-red-600">{regEndDays}</span> 天
        </p>
      )}

      {examDays == null && regEndDays == null && (
        <p className="text-sm text-gray-500">暂无倒计时信息。</p>
      )}
    </UiCard>
  );
})()


{/* =================== 倒计时（关键信息） =================== */}
{(() => {
  const { examDays, regStartDays, regEndDays } = countdownInfo(exam);

  return (
    <UiCard className="p-5 space-y-2 mt-6">
      <h2 className="text-lg font-semibold">⏱️ 倒计时</h2>

      {examDays != null && (
        <p className="text-sm text-gray-700">
          📘 距离考试还有：
          <span className="font-semibold text-blue-600">{examDays}</span> 天
        </p>
      )}

      {regStartDays != null && (
        <p className="text-sm text-gray-700">
          🟢 距离报名开始：
          <span className="font-semibold text-green-600">{regStartDays}</span> 天
        </p>
      )}

      {regEndDays != null && (
        <p className="text-sm text-gray-700">
          🔔 距离报名截止：
          <span className="font-semibold text-red-600">{regEndDays}</span> 天
        </p>
      )}

      {(examDays == null && regEndDays == null) && (
        <p className="text-sm text-gray-500">暂无倒计时信息。</p>
      )}
    </UiCard>
  );
})()}

