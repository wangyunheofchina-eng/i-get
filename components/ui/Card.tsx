export default function Card({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-[var(--radius-md)] bg-[var(--bg-card)] border border-[var(--border)] shadow-sm hover:shadow-md transition-all " +
        className
      }
    >
      {children}
    </div>
  );
}
