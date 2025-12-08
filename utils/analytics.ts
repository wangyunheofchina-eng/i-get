export function logCompareEvent(a, b) {
  if (typeof window === "undefined") return;

  try {
    const raw = window.localStorage.getItem("compare_history") || "[]";
    const list = JSON.parse(raw);

    const record = {
      at: new Date().toISOString(),
      a: { slug: a.slug, name: a.name },
      b: { slug: b.slug, name: b.name },
    };

    list.unshift(record);

    // 只保留最近 20 条
    const trimmed = list.slice(0, 20);

    window.localStorage.setItem("compare_history", JSON.stringify(trimmed));
  } catch (e) {
    console.error("logCompareEvent error", e);
  }
}
