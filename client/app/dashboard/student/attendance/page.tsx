import AttendanceHeader from "@/components/students/attendance/AttendanceHeader";
import AttendanceStats from "@/components/students/attendance/AttendanceStats";
import AttendanceCalendar from "@/components/students/attendance/AttendanceCalendar";
import AttendanceHistory from "@/components/students/attendance/AttendanceHistory";
import AttendanceLegend from "@/components/students/attendance/AttendanceLegend";
import AttendanceProgress from "@/components/students/attendance/AttendanceProgress";

export default function StudentAttendancePage() {
  return (
    <div className="space-y-8">

      <AttendanceHeader />

      <AttendanceStats />

      <AttendanceProgress />

      <AttendanceLegend />

      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">

        <AttendanceCalendar />

        <AttendanceHistory />

      </div>

    </div>
  );
}