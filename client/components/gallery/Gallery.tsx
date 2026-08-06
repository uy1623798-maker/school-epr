
const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-5xl font-bold">
            School Gallery
          </h2>

          <p className="mt-4 text-slate-600">
            Explore our modern campus and learning environment.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              <img
                src={image}
                alt="School"
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}