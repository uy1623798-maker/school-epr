type Props = {
  name: string;
  role: string;
  image: string;
  review: string;
};

export default function TestimonialCard({
  name,
  role,
  image,
  review,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition">

      <img
        src={image}
        alt={name}
        className="mx-auto h-24 w-24 rounded-full object-cover"
      />

      <h3 className="mt-5 text-center text-2xl font-bold">
        {name}
      </h3>

      <p className="text-center text-blue-600">
        {role}
      </p>

      <p className="mt-6 text-center text-slate-600 italic">
        "{review}"
      </p>

    </div>
  );
}