import HomeworkHeader from "@/components/students/homework/HomeworkHeader";
import HomeworkStats from "@/components/students/homework/HomeworkStats";
import HomeworkFilters from "@/components/students/homework/HomeworkFilters";
import HomeworkList from "@/components/students/homework/HomeworkList";

export default function StudentHomeworkPage() {
  return (
    <div className="space-y-8">
      <HomeworkHeader />
      <HomeworkStats />
      <HomeworkFilters />
      <HomeworkList />
    </div>
  );
}