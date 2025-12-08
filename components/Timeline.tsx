export default function Timeline({ steps = [] }) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="w-3 h-3 rounded-full bg-black mt-1.5"></div>

          <div>
            <p className="text-sm font-medium">{step.title}</p>
            <p className="text-xs text-gray-600 mt-0.5">{step.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
