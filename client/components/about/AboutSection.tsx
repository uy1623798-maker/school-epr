import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>
          <img
            src="/images/about/about-school.png"
            alt="Dr.Lockmandas Public School"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
            About Our School
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Building Future Leaders
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our school focuses on academic excellence,
            innovation, sports and personality development.

            We believe every student deserves an environment
            where creativity and learning go together.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700"
          >
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
}