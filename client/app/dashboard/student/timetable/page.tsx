import TimetableHeader from "@/components/students/timetable/TimetableHeader";
import TodaySchedule from "@/components/students/timetable/TodaySchedule";
import WeeklyTimetable from "@/components/students/timetable/WeeklyTimetable";

export default function StudentTimetablePage() {
  return (
    <div className="space-y-8">

      <TimetableHeader />

      <TodaySchedule />

      <WeeklyTimetable />

    </div>
  );
}