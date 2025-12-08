"use client";

import { useState, useEffect } from "react";

export function useCompare() {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("compare");
    if (saved) setList(JSON.parse(saved));
  }, []);

  function toggle(slug: string) {
    const updated = list.includes(slug)
      ? list.filter((x) => x !== slug)
      : [...list, slug];

    setList(updated);
    localStorage.setItem("compare", JSON.stringify(updated));
  }

  return { list, toggle };
}
