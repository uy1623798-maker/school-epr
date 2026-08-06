import {
  GraduationCap,
  ShieldCheck,
  MonitorSmartphone,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description:
      "Experienced teachers with modern teaching methods.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital ERP",
    description:
      "Attendance, Fees, Homework and Reports online.",
  },
  {
    icon: Trophy,
    title: "Best Results",
    description:
      "Excellent academic performance and achievements.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    description:
      "Secure campus with CCTV and GPS transport.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Why Choose Our School?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything your child needs for a successful future.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon
                  size={50}
                  className="text-blue-600"
                />

                <h3 className="mt-6 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}