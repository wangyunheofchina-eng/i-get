export function getFavorites() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

export function toggleFavorite(slug: string) {
  const list = getFavorites();

  const updated = list.includes(slug)
    ? list.filter((item) => item !== slug)
    : [...list, slug];

  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
}

export function isFavorite(slug: string) {
  return getFavorites().includes(slug);
}
