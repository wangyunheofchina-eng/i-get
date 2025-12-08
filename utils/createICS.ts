type ICSOptions = {
  title: string;
  date: string;        // 预期格式：YYYY-MM-DD
  description?: string;
};

export function createICS({ title, date, description = "" }: ICSOptions) {
  if (typeof window === "undefined") return;
  if (!date) return;

  // 转成 YYYYMMDD，作为全天事件
  const normalized = date.replace(/-/g, "");
  const dtStart = normalized;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//kaozheng.site//Exam Calendar//ZH",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@kaozheng.site`,
    `SUMMARY:${title}`,
    `DTSTART;VALUE=DATE:${dtStart}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  const content = lines.join("\r\n");

  const blob = new Blob([content], {
    type: "text/calendar;charset=utf-8",
  });

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
