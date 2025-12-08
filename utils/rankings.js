import exams from "../data/exams/index.json";
import heat from "../scripts/heat.json";

export function getRankings() {
  const list = exams.map(exam => {
    const log = heat[exam.slug] || [];

    const now = Date.now();
    const weekAgo = now - 7 * 24 * 3600 * 1000;
    const monthAgo = now - 30 * 24 * 3600 * 1000;
    const twoWeeksAgo = now - 14 * 24 * 3600 * 1000;

    const weekly = log.filter(t => t > weekAgo).length;
    const monthly = log.filter(t => t > monthAgo).length;

    const prevWeek = log.filter(t => t < weekAgo && t > twoWeeksAgo).length;
    const trend = weekly - prevWeek;

    return {
      ...exam,
      weekly,
      monthly,
      total: log.length,
      trend,
    };
  });

  return {
    weekly: list.sort((a, b) => b.weekly - a.weekly).slice(0, 10),
    monthly: list.sort((a, b) => b.monthly - a.monthly).slice(0, 10),
    total: list.sort((a, b) => b.total - a.total).slice(0, 10),
  };
}
