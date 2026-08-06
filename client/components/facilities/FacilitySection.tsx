import FacilityCard from "./FacilityCard";

const facilities = [
  {
    title: "Smart Classrooms",
    description: "Interactive digital classrooms with smart boards.",
    icon: "🖥️",
  },
  {
    title: "Computer Lab",
    description: "Modern computer labs with high-speed internet.",
    icon: "💻",
  },
  {
    title: "Science Lab",
    description: "Physics, Chemistry & Biology practical laboratories.",
    icon: "🧪",
  },
  {
    title: "Library",
    description: "Thousands of books with digital learning resources.",
    icon: "📚",
  },
  {
    title: "Sports",
    description: "Indoor & outdoor sports facilities.",
    icon: "⚽",
  },
  {
    title: "Transport",
    description: "GPS-enabled school bus transportation.",
    icon: "🚌",
  },
];

export default function FacilitySection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            Our Facilities
          </h2>

          <p className="mt-5 text-slate-600">
            Everything students need to grow and succeed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
}