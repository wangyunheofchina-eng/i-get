"use client";

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function RadarChart({ scores }) {
  const data = {
    labels: ["描述质量", "字段完整度", "适合人群", "备考建议", "流程清晰度"],
    datasets: [
      {
        label: "内容质量评分",
        data: [
          scores.description,
          scores.fields,
          scores.suitable,
          scores.tips,
          scores.flow,
        ],
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "#000",
        pointBackgroundColor: "#000",
      }
    ]
  };

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { display: false },
        grid: { color: "rgba(0,0,0,0.15)" },
        angleLines: { color: "rgba(0,0,0,0.2)" },
      }
    },
    plugins: { legend: { display: false } }
  };

  return <Radar data={data} options={options} />;
}
