import AttendanceHeader from "@/components/students/attendance/AttendanceHeader";
import AttendanceStats from "@/components/students/attendance/AttendanceStats";
import AttendanceProgress from "@/components/students/attendance/AttendanceProgress";
import AttendanceCalendar from "@/components/students/attendance/AttendanceCalendar";
import AttendanceHistory from "@/components/students/attendance/AttendanceHistory";

export default function StudentAttendancePage() {
  return (
    <div className="space-y-8">

      <AttendanceHeader />

      <AttendanceStats />

      <div className="grid gap-8 xl:grid-cols-2">
        <AttendanceProgress />
        <AttendanceCalendar />
      </div>

      <AttendanceHistory />

    </div>
  );
}