export default function CalendarEvent({ exam }) {
  return (
    <div className="mt-1 p-1 rounded bg-black text-white text-[10px] text-center">
      {exam.name}
    </div>
  );
}
