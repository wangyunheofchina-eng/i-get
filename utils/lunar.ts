import { Lunar } from "lunar-javascript";

export function getLunarInfo(date: Date) {
  const lunar = Lunar.fromDate(date);
  const day = lunar.getDayInChinese();  // 初一、十五、廿七...

  const festival = lunar.getFestivals().join(","); // 传统节日
  const solarTerm = lunar.getJieQi(); // 节气（立春、清明等）

  return {
    lunarDay: day,
    festival: festival || null,
    solarTerm: solarTerm || null,
  };
}
