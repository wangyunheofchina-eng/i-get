export function generateICS(exam) {
  const content = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${exam.name}考试
DTSTART:${exam.nextExamDate.replace(/-/g, '')}
DESCRIPTION:${exam.name}考试提醒
END:VEVENT
END:VCALENDAR
  `.trim();

  return content;
}
