import RadarChartCard from "./RadarChartCard";

export default function CompareCard({ exam }) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">{exam.name}</h2>

      <p className="text-gray-600">{exam.description}</p>

      <RadarChartCard exam={exam} />
    </div>
  );
}
