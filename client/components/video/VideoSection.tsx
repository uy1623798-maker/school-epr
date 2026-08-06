export default function VideoSection() {
  return (
    <section className="bg-slate-900 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-5xl font-bold">
            Explore Our Campus
          </h2>

          <p className="mt-5 text-gray-300">
            Take a quick virtual tour of our school.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">

          <video
            className="w-full"
            controls
            autoPlay
            muted
            loop
          >
            <source
              src="/videos/campus-tour.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      </div>

    </section>
  );
}