export function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const days = [];

  for (let i = 0; i < new Date(year, month + 1, 0).getDate(); i++) {
    const date = new Date(year, month, i + 1);
    days.push({
      date,
      year,
      month,
      day: i + 1,
      weekday: date.getDay(),
      key: `${year}-${month + 1}-${i + 1}`,
    });
  }
  return days;
}

export function formatYMD(date: Date) {
  return date.toISOString().split("T")[0];
}

// 获取某一天所在周的 7 天
export function getWeekDays(date: Date) {
  const day = date.getDay(); // 0=周日
  const start = new Date(date);
  start.setDate(date.getDate() - day);

  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    days.push({
      key: d.toISOString(),
      date: d,
      year: d.getFullYear(),
      month: d.getMonth(),
      day: d.getDate(),
      weekday: d.getDay(),
    });
  }
  return days;
}
