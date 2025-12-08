export function daysUntil(dateString: string) {
  if (!dateString) return null;
  const target = new Date(dateString);
  const now = new Date();

  const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return diff >= 0 ? diff : null;
}

export function countdownInfo(exam) {
  return {
    examDays: daysUntil(exam.nextExamDate),

    regStartDays: exam.registrationStart
      ? daysUntil(exam.registrationStart)
      : null,

    regEndDays: exam.registrationEnd
      ? daysUntil(exam.registrationEnd)
      : null,
  };
}
