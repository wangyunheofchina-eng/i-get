export default function UiCard({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-[12px] bg-[var(--color-surface)] backdrop-blur-xl " +
        "border border-[var(--color-border)] shadow-[var(--shadow-card)] " +
        "transition-all hover:shadow-[var(--shadow-hover)] hover:-translate-y-[2px] " +
        className
      }
    >
      {children}
    </div>
  );
}
