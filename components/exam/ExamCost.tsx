export default function ExamCost({ cost }) {
  if (!cost) return null;

  return (
    <div className="space-y-3 text-sm text-gray-700">

      {cost.fee && (
        <p>💰 报名费用：<span className="font-medium">{cost.fee}</span></p>
      )}

      {cost.studyHours && (
        <p>⏱ 学习时长（参考）：<span className="font-medium">{cost.studyHours}</span></p>
      )}

      {cost.extra && cost.extra.length > 0 && (
        <div>
          <p className="font-medium mb-1">📄 额外成本 / 要求：</p>
          <ul className="list-disc pl-5 space-y-1">
            {cost.extra.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
