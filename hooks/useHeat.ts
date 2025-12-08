"use client";

/**
 * 安全获取 localStorage
 */
function safeStorage() {
  if (typeof window === "undefined") return null;
  return window.localStorage;
}

/**
 * 获取所有热度数据（安全）
 */
export function getAllHeatSafe(): Record<string, number> {
  const store = safeStorage();
  if (!store) return {};
  try {
    return JSON.parse(store.getItem("exam_heat") || "{}");
  } catch {
    return {};
  }
}

/**
 * 获取某个考试热度
 */
export function getExamHeat(slug: string): number {
  const heat = getAllHeatSafe();
  return heat[slug] || 0;
}

/**
 * hook：当用户访问考试详情时热度+1
 */
export function useHeat(slug: string) {
  if (typeof window === "undefined") return;

  try {
    const heat = getAllHeatSafe();
    heat[slug] = (heat[slug] || 0) + 1;
    window.localStorage.setItem("exam_heat", JSON.stringify(heat));
  } catch {}
}

/**
 * 首页排序函数：按热度排序并返回完整考试数组
 */
export function getHeatRankSafe(exams: any[]) {
  const heat = getAllHeatSafe();

  return [...exams]
    .map(e => ({
      ...e,
      heat: heat[e.slug] || 0,
    }))
    .sort((a, b) => b.heat - a.heat);
}
