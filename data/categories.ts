export interface Category {
  slug: string;
  name: string;
  description?: string;
}

export const categories: Category[] = [
  { slug: "education", name: "教育类 · 教资" },
  { slug: "finance", name: "财会类 · 会计 & 审计" },
  { slug: "it", name: "IT & 互联网" },
  { slug: "pm", name: "项目管理类" },
  { slug: "psychology", name: "心理类" },
  { slug: "law", name: "法律类 · 法考" },
];
