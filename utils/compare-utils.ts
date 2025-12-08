// 评分权重（可随时调整）
const weights = {
  difficulty: -1,      // 难度越高越不利
  recognition: 1.2,    // 认可度更重要
  cost: -0.8,          // 成本越低越好
  duration: -0.6,      // 周期越短越好
  value: 1.5,          // 未来价值非常重要
};

export function compareTwoExams(a, b) {
  // 自动计算分数
  const scoreA =
    a.recognition * weights.recognition +
    a.value * weights.value +
    a.difficulty * weights.difficulty +
    a.cost * weights.cost +
    a.duration * weights.duration;

  const scoreB =
    b.recognition * weights.recognition +
    b.value * weights.value +
    b.difficulty * weights.difficulty +
    b.cost * weights.cost +
    b.duration * weights.duration;

  return {
    aScore: scoreA,
    bScore: scoreB,
    better: scoreA > scoreB ? a : b,
  };
}

// 自动生成推荐建议
export function getTargetAdvice(a, b) {
  const winner = compareTwoExams(a, b).better;

  if (winner === a) {
    return `${a.name} 更适合追求认可度、未来发展潜力的人群。`;
  }

  return `${b.name} 对预算有限、希望快速入门的用户更友好。`;
}

// 自动生成优势 / 劣势对比表
export function getExamAdvantages(exam) {
  const pros = [];
  const cons = [];

  if (exam.recognition >= 4) pros.push("社会认可度高");
  if (exam.value >= 4) pros.push("未来发展潜力强");
  if (exam.difficulty <= 2) pros.push("考试难度较低");
  if (exam.cost <= 2) pros.push("报考成本较低");

  if (exam.difficulty >= 4) cons.push("考试难度高，需投入大量时间");
  if (exam.duration >= 4) cons.push("备考周期长");
  if (exam.cost >= 3) cons.push("报考成本偏高");

  return { pros, cons };
}
