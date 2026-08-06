type FacilityProps = {
  title: string;
  description: string;
  icon: string;
};

export default function FacilityCard({
  title,
  description,
  icon,
}: FacilityProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 text-5xl">{icon}</div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>
    </div>
  );
}