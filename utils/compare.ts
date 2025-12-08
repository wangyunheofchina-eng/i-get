// 不同考试的对比维度
export const compareFields = [
  { key: "difficulty", label: "考试难度" },
  { key: "duration", label: "备考周期" },
  { key: "cost", label: "报考成本" },
  { key: "value", label: "行业认可度" },
  { key: "future", label: "未来发展价值" },
];

// 给不同考试一个默认评分（未来可由 AI 动态生成）
export function getCompareScore(exam) {
  return {
    difficulty: exam.difficulty || 3,
    duration: exam.duration || 3,
    cost: exam.cost || 3,
    value: exam.value || 3,
    future: exam.future || 3,
  };
}
