"use client";

import { useEffect, useState } from "react";
import { getHeatRankSafe } from "../utils/heat";

export default function useHeatRank(exams) {
  const [ranked, setRanked] = useState([]);

  useEffect(() => {
    const sorted = getHeatRankSafe(exams);
    setRanked(sorted);
  }, [exams]);

  return ranked;
}
