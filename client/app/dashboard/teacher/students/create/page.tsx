import StudentForm from "@/components/students/StudentForm";

export default function CreateStudentPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Add New Student
        </h1>

        <p className="mt-2 text-slate-400">
          Register a new student in your school ERP.
        </p>
      </div>

      <StudentForm />

    </div>
  );
}