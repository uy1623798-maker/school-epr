"use client";

const history = [
  {
    date: "15 Jul 2026",
    status: "Present",
  },
  {
    date: "14 Jul 2026",
    status: "Present",
  },
  {
    date: "13 Jul 2026",
    status: "Leave",
  },
  {
    date: "12 Jul 2026",
    status: "Absent",
  },
  {
    date: "11 Jul 2026",
    status: "Present",
  },
];

export default function AttendanceHistory() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">

      <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
        Attendance History
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-4 text-left">
              Date
            </th>

            <th className="py-4 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {history.map((item) => (

            <tr
              key={item.date}
              className="border-b"
            >

              <td className="py-5">
                {item.date}
              </td>

              <td>

                <span
                  className={`rounded-full px-4 py-2 text-white

                  ${
                    item.status === "Present"
                      ? "bg-green-500"
                      : item.status === "Absent"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {item.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}