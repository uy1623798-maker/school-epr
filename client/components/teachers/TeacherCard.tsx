type TeacherProps = {
  name: string;
  subject: string;
  image: string;
};

export default function TeacherCard({
  name,
  subject,
  image,
}: TeacherProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="h-72 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">{name}</h3>

        <p className="mt-2 text-slate-500">
          {subject}
        </p>
      </div>
    </div>
  );
}