export default function Logo({ size = 28 }) {
  return (
    <div className="flex items-center select-none">
      <div
        className="rounded-md bg-black text-white flex items-center justify-center"
        style={{ width: size, height: size, fontSize: size * 0.6 }}
      >
        考
      </div>
      <span className="ml-2 text-lg font-semibold tracking-tight">考证</span>
    </div>
  );
}
