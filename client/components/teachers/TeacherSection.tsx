import TeacherCard from "./TeacherCard";

const teachers = [
  {
    name: "Rahul Sharma",
    subject: "Mathematics",
    image: "/images/teachers/t1.jpg",
  },
  {
    name: "Priya Singh",
    subject: "Science",
    image: "/images/teachers/t2.jpg",
  },
  {
    name: "Anjali Verma",
    subject: "English",
    image: "/images/teachers/t3.jpg",
  },
];

export default function TeacherSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            Meet Our Teachers
          </h2>

          <p className="mt-4 text-slate-600">
            Experienced educators shaping future leaders.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.name}
              {...teacher}
            />
          ))}

        </div>
      </div>
    </section>
  );
}