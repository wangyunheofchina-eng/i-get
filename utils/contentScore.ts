export function scoreExam(exam) {
  // 你现有的评分逻辑，如果没有我给你模板
  return {
    id: exam.id,
    score: exam.questions.length
  };
}

export function scoreAllExams(exams) {
  return exams.map(scoreExam);
}

