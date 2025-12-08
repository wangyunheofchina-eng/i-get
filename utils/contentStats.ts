import { exams } from "../data/exams";
import { categories } from "../data/categories";
import { scoreExam } from "./contentScore";

export function getGlobalContentStats() {
  const scored = exams.map(e => ({ ...e, score: scoreExam(e).score }));

  const avgScore =
    Math.round(scored.reduce((sum, e) => sum + e.score, 0) / scored.length);

  const lowQuality = scored
    .filter(e => e.score < 60)
    .sort((a, b) => a.score - b.score)
    .slice(0, 5);

  const categoryStats = categories.map(cat => {
    const list = scored.filter(e => e.category.includes(cat.name));
    const avg =
      list.length === 0
        ? 0
        : Math.round(list.reduce((sum, e) => sum + e.score, 0) / list.length);

    return {
      category: cat.name,
      avgScore: avg,
      count: list.length,
    };
  });

  return {
    avgScore,
    lowQuality,
    categoryStats,
    total: exams.length,
  };
}
