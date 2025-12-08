export const categoryColor = (category = "") => {
  if (category.includes("教育")) return "bg-blue-500";
  if (category.includes("财") || category.includes("会计")) return "bg-green-500";
  if (category.includes("IT") || category.includes("互联网")) return "bg-purple-500";
  if (category.includes("项目管理")) return "bg-orange-500";
  if (category.includes("心理")) return "bg-pink-500";
  if (category.includes("法律")) return "bg-red-500";

  return "bg-gray-400"; // 默认颜色
};
