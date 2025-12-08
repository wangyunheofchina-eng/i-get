"use client";

import { useEffect } from "react";

export default function RemindWorker() {
  useEffect(() => {
    const timer = setInterval(() => {
      const list = JSON.parse(localStorage.getItem("remind_list") || "[]");

      list.forEach((exam) => {
        const today = new Date().toISOString().split("T")[0];
        const oneDayBefore = new Date(Date.now() + 24 * 3600 * 1000)
          .toISOString()
          .split("T")[0];
        const sevenDaysBefore = new Date(Date.now() + 7 * 24 * 3600 * 1000)
          .toISOString()
          .split("T")[0];

        if (
          exam.nextExamDate === today ||
          exam.nextExamDate === oneDayBefore ||
          exam.nextExamDate === sevenDaysBefore
        ) {
          new Notification("考试提醒", {
            body: `${exam.name} 即将考试！时间：${exam.nextExamDate}`,
          });
        }
      });
    }, 3600000); // 每小时检查一次

    return () => clearInterval(timer);
  }, []);

  return null;
}
