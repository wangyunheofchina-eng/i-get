"use client";

// ===============================
// Heat System for Exams
// ===============================

// 本地存储 key
const STORAGE_KEY = "exam_heat";

// 读取本地热度数据（保证永远返回对象）
export function getHeatMap() {
  if (typeof localStorage === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

// 记录某考试 +1 热度
export function addHeat(slug: string) {
  if (typeof localStorage === "undefined") return;
  const map = getHeatMap();
  map[slug] = (map[slug] || 0) + 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

// 获取某考试热度数字
export function getExamHeat(slug: string) {
  const map = getHeatMap();
  return map[slug] || 0;
}

// 对考试数组排序（始终返回数组）
export function getHeatRank(list: any[]) {
  const map = getHeatMap();
  return [...list]
    .map((e) => ({ ...e, heat: map[e.slug] || 0 }))
    .sort((a, b) => b.heat - a.heat);
}
