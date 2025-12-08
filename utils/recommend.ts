/**
 * 用户行为数据结构：
 * {
 *   "exam-slug": { views: number, favorite: boolean, score: number }
 * }
 */

export function getUserModel() {
  if (typeof window === "undefined") return {};
  return JSON.parse(localStorage.getItem("user_model") || "{}");
}

export function updateUserModel(slug: string, weight = 1) {
  const model = getUserModel();

  if (!model[slug]) {
    model[slug] = { views: 0, favorite: false, score: 0 };
  }

  // 增加浏览次数和分数
  model[slug].views += 1;
  model[slug].score += weight;

  localStorage.setItem("user_model", JSON.stringify(model));
}

export function markFavorite(slug: string) {
  const model = getUserModel();
  if (!model[slug]) {
    model[slug] = { views: 0, favorite: true, score: 5 };
  } else {
    model[slug].favorite = true;
    model[slug].score += 5;
  }
  localStorage.setItem("user_model", JSON.stringify(model));
}

/**
 * 推荐：根据用户行为→计算“相似考试”
 */
export function recommendExams(exams, top = 3) {
  const model = getUserModel();

  // 如果用户完全没有数据，返回热度最高的考试
  if (!model || Object.keys(model).length === 0) {
    return exams.sort((a, b) => b.heat - a.heat).slice(0, top);
  }

  // 计算基于行为的推荐得分
  const scored = exams.map((exam) => {
    const data = model[exam.slug] || { views: 0, favorite: false, score: 0 };

    const base = exam.heat * 0.2;  // 热度也参与少量评分

    const score =
      data.score +
      data.views * 1.5 +
      (data.favorite ? 8 : 0) + // 收藏权重非常高
      base;

    return { ...exam, score };
  });

  // 按分数排序
  return scored.sort((a, b) => b.score - a.score).slice(0, top);
}

/**
 * 文案生成（模拟 AI 推荐理由）
 */
export function recommendReason(exam) {
  if (!exam) return "";

  return `根据你的浏览与收藏行为，${exam.name} 与您关注的方向高度契合，属于 ${
    exam.category
  } 领域中值得重点考虑的证书。`;
}
