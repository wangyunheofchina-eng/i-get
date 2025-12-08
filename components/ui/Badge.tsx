export default function Badge({ children, color = "gray" }) {
  const colorMap = {
    gray: "bg-gray-100 text-gray-600",
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-600",
    green: "bg-green-100 text-green-700",
  };

  return (
    <span className={
      "px-2 py-0.5 rounded-full text-xs font-medium " +
      (colorMap[color] || colorMap.gray)
    }>
      {children}
    </span>
  );
}
