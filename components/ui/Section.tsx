export default function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-[var(--text-0)]">
        {title}
      </h2>
      {children}
    </section>
  );
}
