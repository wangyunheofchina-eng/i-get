"use client";

import { useRef } from "react";

export function useWeekSwipe({ mode, onPrevWeek, onNextWeek }) {
  const startX = useRef(0);

  function handleTouchStart(e) {
    if (mode !== "week") return;
    startX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (mode !== "week") return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;

    if (Math.abs(diff) < 40) return; // 防止误触

    if (diff > 0) onPrevWeek();
    else onNextWeek();
  }

  function handleWheel(e) {
    if (mode !== "week") return;

    // 触控板横向滚动
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) onNextWeek();
      else onPrevWeek();
    }
  }

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onWheel: handleWheel,
  };
}
