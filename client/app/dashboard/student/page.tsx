import StudentDashboardHeader from "@/components/students/dashboard/StudentDashboardHeader";
import StudentStatsCards from "@/components/students/dashboard/StudentStatsCards";
import StudentTodayClasses from "@/components/students/dashboard/StudentTodayClasses";
import StudentHomeworkCard from "@/components/students/dashboard/StudentHomeworkCard";
import StudentNoticeCard from "@/components/students/dashboard/StudentNoticeCard";
import StudentQuickActions from "@/components/students/dashboard/StudentQuickActions";
export default function StudentDashboardPage() {
  return (
    <div className="space-y-8">
      <StudentDashboardHeader />

      <StudentStatsCards />

      <div className="grid gap-8 xl:grid-cols-2">
        <StudentTodayClasses />
        <StudentHomeworkCard />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <StudentNoticeCard />
        <StudentQuickActions />
      </div>
    </div>
  );
}