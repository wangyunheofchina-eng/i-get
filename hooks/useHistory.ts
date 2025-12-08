"use client";

export function useHistory(slug: string) {
  if (typeof window === "undefined") return;

  const raw = localStorage.getItem("exam_history");
  const history = raw ? JSON.parse(raw) : [];

  history.push(slug);

  localStorage.setItem("exam_history", JSON.stringify(history.slice(-50)));
}
