"use client";

import { useState } from "react";

import StudentProfileHeader from "@/components/students/profile/StudentProfileHeader";
import StudentPersonalCard from "@/components/students/profile/StudentPersonalCard";
import StudentParentCard from "@/components/students/profile/StudentParentCard";
import StudentAcademicCard from "@/components/students/profile/StudentAcademicCard";
import StudentDocumentsCard from "@/components/students/profile/StudentDocumentsCard";
import StudentQuickActions from "@/components/students/profile/StudentQuickActions";
import StudentTimeline from "@/components/students/profile/StudentTimeline";
import DeleteStudentModal from "@/components/students/delete/DeleteStudentModal";

export default function StudentProfilePage() {
  const [openDelete, setOpenDelete] = useState(false);

  const handleDelete = () => {
    console.log("Delete Student");
    setOpenDelete(false);
  };

  return (
    <>
      <div className="space-y-8">

        {/* Header */}
        <StudentProfileHeader />

        {/* Personal + Academic */}
        <div className="grid gap-8 xl:grid-cols-2">
          <StudentPersonalCard />
          <StudentAcademicCard />
        </div>

        {/* Parent */}
        <StudentParentCard />

        {/* Documents + Quick Actions */}
        <div className="grid gap-8 xl:grid-cols-2">
          <StudentDocumentsCard />

          <StudentQuickActions
            onDelete={() => setOpenDelete(true)}
          />
        </div>

        {/* Student Timeline */}
        <StudentTimeline />

      </div>

      {/* Delete Modal */}
      <DeleteStudentModal
        open={openDelete}
        studentName="Rahul Sharma"
        onClose={() => setOpenDelete(false)}
        onDelete={handleDelete}
      />
    </>
  );
}