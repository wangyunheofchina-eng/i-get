"use client";

import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  function toggleFavorite(slug: string) {
    const updated = favorites.includes(slug)
      ? favorites.filter((s) => s !== slug)
      : [...favorites, slug];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return { favorites, toggleFavorite };
}
