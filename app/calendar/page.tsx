"use client";

import { useState, useMemo } from "react";
import { exams } from "../../data/exams";
import { getMonthDays, getWeekDays } from "../../utils/date";

import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import CalendarSidebar from "./CalendarSidebar";
import ViewSwitcher from "../../components/calendar/ViewSwitcher";

export default function CalendarPage() {
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [mode, setMode] = useState<"month" | "week">("month");

  const monthDays = getMonthDays(year, month);

  const weekDays = useMemo(() => {
    if (selectedDate) {
      const [y, m, d] = selectedDate.split("-").map(Number);
      return getWeekDays(new Date(y, m - 1, d));
    }
    return getWeekDays(today);
  }, [selectedDate, year, month]);

  const examMap = useMemo(() => {
    const map: Record<string, any[]> = {};
    exams.forEach((e) => {
      if (Array.isArray(e.dates)) {
        e.dates.forEach((d) => {
          map[d] ||= [];
          map[d].push(e);
        });
      }
    });
    return map;
  }, []);

  function prevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else setMonth(month - 1);

    setSelectedDate(null);
  }

  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else setMonth(month + 1);

    setSelectedDate(null);
  }

  /* ----------------------
     周视图：上一周 / 下一周
  -------------------------*/
  function prevWeek() {
    const base = selectedDate
      ? new Date(selectedDate)
      : new Date(today);

    const newDate = new Date(base);
    newDate.setDate(base.getDate() - 7);

    setSelectedDate(
      `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
    );
  }

  function nextWeek() {
    const base = selectedDate
      ? new Date(selectedDate)
      : new Date(today);

    const newDate = new Date(base);
    newDate.setDate(base.getDate() + 7);

    setSelectedDate(
      `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
    );
  }

  return (
    <div className="pt-10 space-y-6 max-w-5xl mx-auto">

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">考试日历</h1>
        <ViewSwitcher mode={mode} setMode={setMode} />
      </div>

      <CalendarHeader
        year={year}
        month={month}
        mode={mode}
        onPrev={prevMonth}
        onNext={nextMonth}
        onPrevWeek={prevWeek}
        onNextWeek={nextWeek}
        onToday={() => {
          setYear(today.getFullYear());
          setMonth(today.getMonth());
          setSelectedDate(null);
        }}
      />

      <div className="flex gap-10">

        <div className="flex-1">
          <CalendarGrid
            days={mode === "month" ? monthDays : weekDays}
            examMap={examMap}
            onSelectDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </div>

        <div className="w-80">
          <CalendarSidebar date={selectedDate} exams={exams} />
        </div>

      </div>
    </div>

  );
}

