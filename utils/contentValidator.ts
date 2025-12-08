import { categories } from "../data/categories";

export interface ValidationIssue {
  type: "error" | "warning";
  message: string;
}

const REQUIRED_FIELDS = ["slug", "name", "category", "nextExamDate", "registrationTime"];

export function validateExam(exam: any): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  // === 1. 必填字段检查 ===
  REQUIRED_FIELDS.forEach(field => {
    if (!exam[field] || exam[field].trim() === "") {
      issues.push({
        type: "error",
        message: `缺少字段：${field}`,
      });
    }
  });

  // === 2. 分类合法性 ===
  const validCategories = categories.map(c => c.name);
  if (!validCategories.some(cat => exam.category?.includes(cat))) {
    issues.push({
      type: "warning",
      message: `分类“${exam.category}”未在系统中定义`,
    });
  }

  // === 3. 描述检查 ===
  if (!exam.description || exam.description.length < 20) {
    issues.push({
      type: "warning",
      message: "描述过短（建议至少 20 字）",
    });
  }

  // === 4. tips 检查 ===
  if (!exam.tips || exam.tips.length === 0) {
    issues.push({
      type: "warning",
      message: "缺少备考建议（tips）",
    });
  }

  // === 5. 流程检查 ===
  if (!exam.flow || exam.flow.length < 2) {
    issues.push({
      type: "warning",
      message: "报考流程过少（建议至少 2 步）",
    });
  }

  // === 6. 不认识的字段（检测拼写错误） ===
  const allowed = [
    "slug",
    "name",
    "category",
    "description",
    "nextExamDate",
    "registrationTime",
    "tips",
    "flow",
    "suitable",
    "heat",
  ];

  Object.keys(exam).forEach(key => {
    if (!allowed.includes(key)) {
      issues.push({
        type: "warning",
        message: `发现未识别字段：${key}`,
      });
    }
  });

  return issues;
}
