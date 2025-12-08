const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname, "..", "data", "exams-source.json");
const outPath = path.join(__dirname, "..", "data", "exams.ts");

if (!fs.existsSync(srcPath)) {
  console.error("❌ 找不到 data/exams-source.json，请先创建。");
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(srcPath, "utf8"));

// 这里可以做一些简单校验
function validate(exam) {
  const required = [
    "slug",
    "name",
    "category",
    "description",
    "nextExamDate",
    "registrationTime",
    "level",
    "recognition"
  ];

  const missing = required.filter((key) => !exam[key] || exam[key].trim() === "");
  return missing;
}

let hasError = false;
raw.forEach((exam) => {
  const missing = validate(exam);
  if (missing.length > 0) {
    hasError = true;
    console.warn(
      `⚠️  考试「${exam.name || exam.slug}」缺少字段：${missing.join(", ")}`
    );
  }
});

if (hasError) {
  console.warn("⚠️  建议补全上面缺少字段再继续，但不会阻止生成。");
}

const header = `export type Exam = {
  slug: string;
  name: string;
  category: string;
  description: string;
  nextExamDate: string;      // 下次考试日期，格式：YYYY-MM-DD
  registrationTime: string;  // 报名时间区间
  level: string;             // 入门 / 中等 / 偏难 等
  recognition: string;       // 认可度描述
  officialLink?: string;     // 官方链接，可选
};

export const exams: Exam[] = `;

const body = JSON.stringify(raw, null, 2);

fs.writeFileSync(outPath, header + body + ";\n", "utf8");

console.log("✅ 已根据 data/exams-source.json 生成 data/exams.ts");
