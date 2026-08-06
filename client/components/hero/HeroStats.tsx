export default function HeroStats() {
  const stats = [
    { number: "2000+", label: "Students" },
    { number: "50+", label: "Teachers" },
    { number: "50+", label: "Classrooms" },
    { number: "99%", label: "Parent Satisfaction" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-4xl font-bold text-blue-600">
              {item.number}
            </h2>

            <p className="mt-3 text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}