"use client";

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from "recharts";

export default function RadarChartCard({ exam }) {
  const data = [
    { key: "难度", value: exam.difficulty },
    { key: "认可度", value: exam.recognition },
    { key: "成本", value: exam.cost },
    { key: "周期", value: exam.duration },
    { key: "未来价值", value: exam.value },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl shadow border">
      <h3 className="text-lg font-semibold mb-3">{exam.name} 能力雷达图</h3>

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#ddd" />
          <PolarAngleAxis dataKey="key" stroke="#666" />
          <PolarRadiusAxis angle={30} domain={[0, 5]} />
          <Radar
            name={exam.name}
            dataKey="value"
            stroke="#000"
            fill="#000"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
