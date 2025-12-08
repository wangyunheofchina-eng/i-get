import UiCard from "../ui/UiCard";

export default function ExamSection({ title, children }) {
  return (
    <UiCard className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-gray-700 text-sm leading-relaxed">
        {children}
      </div>
    </UiCard>
  );
}
