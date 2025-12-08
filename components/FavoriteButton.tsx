"use client";

import { useEffect, useState } from "react";
import { toggleFavorite, isFavorite } from "../utils/favorite";
import { markFavorite } from "../utils/recommend";

export default function FavoriteButton({ slug }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(isFavorite(slug));
  }, [slug]);

  return (
    <button
      onClick={() => {
        const updated = toggleFavorite(slug);
        const nowFav = updated.includes(slug);
        setFav(nowFav);

        if (nowFav) markFavorite(slug); // 收藏时提升模型评分
      }}
      className="px-4 py-2 rounded-full border border-black/10 bg-white/70 
                 backdrop-blur shadow-sm hover:shadow transition text-sm"
    >
      {fav ? "❤️ 已收藏" : "🤍 收藏"}
    </button>
  );
}
