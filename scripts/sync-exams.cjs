const fs = require("fs");
const path = require("path");

const jsonPath = path.join(process.cwd(), "data", "exams.json");
const tsPath = path.join(process.cwd(), "data", "exams.ts");

function main() {
  if (!fs.existsSync(jsonPath)) {
    console.error("❌ 找不到 data/exams.json，请先创建内容数据。");
    process.exit(1);
  }

  const raw = fs.readFileSync(jsonPath, "utf-8");
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error("❌ exams.json 不是合法的 JSON，请检查格式（逗号、引号、方括号等）。");
    console.error(e.message);
    process.exit(1);
  }

  if (!Array.isArray(data)) {
    console.error("❌ exams.json 顶层必须是数组，例如：[ {...}, {...} ]");
    process.exit(1);
  }

  const interfaceDef = `
export interface Exam {
  slug: string;
  name: string;
  category: string;
  description: string;
  nextExamDate: string;
  registrationTime: string;
  overview: string;
  eligibility: string[];
  suitableFor: string[];
  subjects: string[];
  value: string[];
  locations: string[];
  tips: string[];
}
`.trim();

  const jsonString = JSON.stringify(data, null, 2);

  const tsContent = `// 本文件由 scripts/sync-exams.cjs 自动生成，请勿手动编辑。
// 编辑 data/exams.json 后运行：npm run sync:exams

${interfaceDef}

export const exams: Exam[] = ${jsonString};
`;

  fs.writeFileSync(tsPath, tsContent, "utf-8");
  console.log("✅ 已根据 data/exams.json 生成 data/exams.ts");
}

main();
