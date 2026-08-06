import TeacherTcHeader from "@/components/tc/TeacherTcHeader";
import TeacherTcStats from "@/components/tc/TeacherTcStats";
import TeacherTcFilters from "@/components/tc/TeacherTcFilters";
import TeacherTcTable from "@/components/tc/TeacherTcTable";

export default function TeacherTCPage() {
  return (
    <div className="space-y-8">

      <TeacherTcHeader />

      <TeacherTcStats />

      <TeacherTcFilters />

      <TeacherTcTable />

    </div>
  );
}