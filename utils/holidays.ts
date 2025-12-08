// 法定节假日（公历）
// 这里只列最常见的，可随时扩展
export const holidays = {
  "1-1": "元旦",
  "2-14": "情人节",
  "5-1": "劳动节",
  "6-1": "儿童节",
  "10-1": "国庆节",
  "12-25": "圣诞节",
};

// 农历节日由 lunar-javascript 自动提供：
// 春节、元宵、清明、七夕、中秋、重阳 ……

export function getHolidayInfo(date: Date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const key = `${month}-${day}`;

  return holidays[key] || null;
}
