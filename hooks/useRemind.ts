"use client";

import { useEffect, useState } from "react";

export function useRemind() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("remind_list");
    if (saved) setList(JSON.parse(saved));

    Notification.requestPermission();
  }, []);

  function addExam(exam) {
    const updated = [...list, exam];
    setList(updated);
    localStorage.setItem("remind_list", JSON.stringify(updated));
  }

  function removeExam(slug) {
    const updated = list.filter((e) => e.slug !== slug);
    setList(updated);
    localStorage.setItem("remind_list", JSON.stringify(updated));
  }

  return { list, addExam, removeExam };
}
