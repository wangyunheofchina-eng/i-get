export default function InfoCard({ title, children }) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur border border-black/5 p-5 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-gray-700 text-sm space-y-1">
        {children}
      </div>
    </div>
  );
}
