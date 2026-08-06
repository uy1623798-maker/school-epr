import TeacherDashboardHeader from "@/components/teachers/dashboard/TeacherDashboardHeader";
import TeacherStatsCards from "@/components/teachers/dashboard/TeacherStatsCards";
import TeacherTodayClasses from "@/components/teachers/dashboard/TeacherTodayClasses";
import TeacherPendingHomework from "@/components/teachers/dashboard/TeacherPendingHomework";
import TeacherRecentStudents from "@/components/teachers/dashboard/TeacherRecentStudents";
import TeacherQuickActions from "@/components/teachers/dashboard/TeacherQuickActions";

export default function TeacherDashboardPage() {
  return (
    <div className="space-y-8">

      <TeacherDashboardHeader />

      <TeacherStatsCards />

      <div className="grid gap-8 xl:grid-cols-2">
        <TeacherTodayClasses />
        <TeacherPendingHomework />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <TeacherRecentStudents />
        <TeacherQuickActions />
      </div>

    </div>
  );
}