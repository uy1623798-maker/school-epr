import StudentEditForm from "@/components/students/edit/StudentEditForm";

export default function EditStudentPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Edit Student
        </h1>

        <p className="mt-2 text-slate-400">
          Update student information.
        </p>
      </div>

      <StudentEditForm />

    </div>
  );
}