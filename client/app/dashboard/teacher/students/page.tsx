import StudentHeader from "@/components/students/StudentHeader";
import StudentStats from "@/components/students/StudentStats";
import StudentFilters from "@/components/students/StudentFilters";
import StudentTable from "@/components/students/StudentTable";
import StudentBulkActions from "@/components/students/StudentBulkActions";
import StudentPagination from "@/components/students/StudentPagination";
export default function StudentsPage() {
  return (
    <div className="space-y-8">
<StudentHeader />

<StudentStats />

<StudentFilters />

<StudentBulkActions />

<StudentTable />

<StudentPagination />
    </div>
  );
}