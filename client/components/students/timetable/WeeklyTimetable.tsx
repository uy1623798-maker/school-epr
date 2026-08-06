"use client";

const timetable = [
  {
    day: "Monday",
    classes: ["Math", "Physics", "English", "Computer"],
  },
  {
    day: "Tuesday",
    classes: ["Chemistry", "Math", "Biology", "Sports"],
  },
  {
    day: "Wednesday",
    classes: ["Physics", "Computer", "English", "Library"],
  },
  {
    day: "Thursday",
    classes: ["Math", "Chemistry", "Hindi", "Computer"],
  },
  {
    day: "Friday",
    classes: ["Physics", "Biology", "English", "Games"],
  },
];

export default function WeeklyTimetable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-6 py-5">

        <h2 className="text-2xl font-bold">
          Weekly Timetable
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[800px]">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left">Day</th>
              <th className="px-6 py-4 text-left">Period 1</th>
              <th className="px-6 py-4 text-left">Period 2</th>
              <th className="px-6 py-4 text-left">Period 3</th>
              <th className="px-6 py-4 text-left">Period 4</th>

            </tr>

          </thead>

          <tbody>

            {timetable.map((row) => (
              <tr
                key={row.day}
                className="border-t border-slate-200 hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-semibold">
                  {row.day}
                </td>

                {row.classes.map((subject) => (
                  <td key={subject} className="px-6 py-5">
                    {subject}
                  </td>
                ))}

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}