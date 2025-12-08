const fs = require("fs");
const path = require("path");

const jsonPath = path.join(process.cwd(), "data", "exams.json");

function isValidDate(str) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(str)) return false;
  const d = new Date(str);
  return !Number.isNaN(d.getTime());
}

function main() {
  if (!fs.existsSync(jsonPath)) {
    console.error("❌ 找不到 data/exams.json");
    process.exit(1);
  }

  const raw = fs.readFileSync(jsonPath, "utf-8");
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error("❌ exams.json 不是合法 JSON。");
    console.error(e.message);
    process.exit(1);
  }

  const errors = [];
  const warnings = [];

  const requiredFields = [
    "slug",
    "name",
    "category",
    "description",
    "nextExamDate",
    "registrationTime",
    "overview",
    "eligibility",
    "suitableFor",
    "subjects",
    "value",
    "locations",
    "tips"
  ];

  const seenSlugs = new Set();

  data.forEach((exam, index) => {
    const prefix = `第 ${index + 1} 个考试（slug=${exam.slug || "未知"}）`;

    // 必填字段检查
    requiredFields.forEach((field) => {
      if (exam[field] === undefined || exam[field] === null) {
        errors.push(`${prefix} 缺少字段：${field}`);
      }
    });

    if (exam.slug) {
      if (seenSlugs.has(exam.slug)) {
        errors.push(`${prefix} slug 重复：${exam.slug}`);
      } else {
        seenSlugs.add(exam.slug);
      }
    }

    if (exam.description && exam.description.length < 10) {
      warnings.push(`${prefix} description 过短，建议补充。`);
    }

    if (exam.nextExamDate && !isValidDate(exam.nextExamDate)) {
      errors.push(`${prefix} nextExamDate 格式不合法，应为 YYYY-MM-DD，例如 2025-03-15。`);
    }

    if (!Array.isArray(exam.eligibility) || exam.eligibility.length === 0) {
      warnings.push(`${prefix} eligibility（报考条件）为空，建议补充。`);
    }

    if (!Array.isArray(exam.tips) || exam.tips.length === 0) {
      warnings.push(`${prefix} tips（备考建议）为空，建议补充。`);
    }
  });

  console.log("🔎 exams.json 内容检查结果：\n");

  if (errors.length === 0) {
    console.log("✅ 严重错误：无");
  } else {
    console.log("❌ 严重错误：");
    errors.forEach((e) => console.log("  - " + e));
  }

  console.log("");

  if (warnings.length === 0) {
    console.log("✅ 提示/警告：无");
  } else {
    console.log("⚠️ 提示/警告：");
    warnings.forEach((w) => console.log("  - " + w));
  }

  console.log("\n📌 建议：先修复严重错误，再按优先级慢慢补充警告项。");
}

main();
