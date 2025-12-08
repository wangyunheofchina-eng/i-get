import fs from "fs";
import path from "path";

// 正确的路径：exams.ts
const file = path.join(process.cwd(), "data/exams.ts");
let content = fs.readFileSync(file, "utf-8");

// 如果已包含 heat 字段则跳过
if (content.includes("heat:")) {
  console.log("✔ exams.ts 已包含 heat 字段，无需处理");
  process.exit(0);
}

// 给每个考试对象自动添加 heat: 0
content = content.replace(
  /(\{[\s\S]*?\})/g,
  (match) => {
    if (match.includes("heat:")) return match;
    return match.replace(/\}$/, ", heat: 0 }");
  }
);

fs.writeFileSync(file, content);
console.log("✔ 已自动为所有考试添加默认 heat: 0 字段");
