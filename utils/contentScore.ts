export function scoreExam(exam) {
  const scores = {
    description: 0,
    fields: 0,
    suitable: 0,
    tips: 0,
    flow: 0,
  };

  // 描述质量（0–100）
  if (exam.description) {
    const len = exam.description.length;
    if (len > 80) scores.description = 100;
    else if (len > 40) scores.description = 70;
    else if (len > 20) scores.description = 40;
    else scores.description = 10;
  }

  // 必填字段完整度
  const required = ["slug", "name", "category", "nextExamDate", "registrationTime"];
  const filled = required.filter(f => exam[f]);
  scores.fields = Math.round((filled.length / required.length) * 100);

  // 适合人群 suitable
  if (exam.suitable) {
    scores.suitable = Math.min(exam.suitable.length * 20, 100);
  }

  // 备考建议 tips
  if (exam.tips) {
    scores.tips = Math.min(exam.tips.length * 20, 100);
  }

  // 流程 flow
  if (exam.flow) {
    scores.flow = Math.min(exam.flow.length * 25, 100);
  }

  // 总分为五项平均
  const score = Math.round(
    (scores.description + scores.fields + scores.suitable + scores.tips + scores.flow) / 5
  );

  return { score, scores };
}
