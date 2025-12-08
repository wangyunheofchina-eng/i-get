export function getSearchHistory() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("search_history") || "[]");
  } catch {
    return [];
  }
}

export function addSearchHistory(term) {
  if (typeof window === "undefined") return;
  const trimmed = term.trim();
  if (!trimmed) return;

  let list = getSearchHistory();
  // 去重 + 最近在前
  list = [trimmed, ...list.filter((item) => item !== trimmed)].slice(0, 10);
  localStorage.setItem("search_history", JSON.stringify(list));
}

export function clearSearchHistory() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("search_history");
}
