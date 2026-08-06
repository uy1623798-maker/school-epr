import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Amit Kumar",
    role: "Parent",
    image: "/images/testimonials/p1.jpg",
    review:
      "Excellent school with experienced teachers and modern classrooms.",
  },
  {
    name: "Sneha Singh",
    role: "Parent",
    image: "/images/testimonials/p2.jpg",
    review:
      "The ERP keeps us updated with attendance, homework and fees.",
  },
  {
    name: "Rohan Gupta",
    role: "Student",
    image: "/images/testimonials/p3.jpg",
    review:
      "Teachers are supportive and campus facilities are outstanding.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">
            What People Say
          </h2>

          <p className="mt-4 text-slate-600">
            Trusted by students and parents.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}