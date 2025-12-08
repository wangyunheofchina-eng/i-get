const fs = require("fs");
const path = require("path");

const jsonPath = path.join(process.cwd(), "data", "exams.json");

function main() {
  if (!fs.existsSync(jsonPath)) {
    console.error("❌ 找不到 data/exams.json");
    process.exit(1);
  }

  const raw = fs.readFileSync(jsonPath, "utf-8");
  const data = JSON.parse(raw);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = [];
  const expired = [];

  data.forEach((exam) => {
    if (!exam.nextExamDate) return;
    const d = new Date(exam.nextExamDate);
    if (Number.isNaN(d.getTime())) return;
    d.setHours(0, 0, 0, 0);

    if (d >= today) {
      upcoming.push({ exam, date: d });
    } else {
      expired.push({ exam, date: d });
    }
  });

  upcoming.sort((a, b) => a.date - b.date);

  console.log("📅 即将到来的考试：");
  if (upcoming.length === 0) {
    console.log("  （暂无）");
  } else {
    upcoming.slice(0, 10).forEach(({ exam, date }) => {
      console.log(`  - ${exam.name} (${exam.slug})：${date.toISOString().slice(0, 10)}`);
    });
  }

  console.log("\n⌛ 已经过期但未更新 nextExamDate 的考试：");
  if (expired.length === 0) {
    console.log("  （暂无）");
  } else {
    expired.forEach(({ exam, date }) => {
      console.log(`  - ${exam.name} (${exam.slug})：${date.toISOString().slice(0, 10)}`);
    });
  }

  console.log("\n📌 建议：对“已过期”列表中的考试更新新一轮考试日期或标记为停考。");
}

main();
