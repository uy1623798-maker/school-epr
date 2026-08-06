"use client";

import { Save, Upload } from "lucide-react";

export default function StudentEditForm() {
  return (
    <form className="space-y-8">

      {/* Photo */}

      <div className="rounded-3xl bg-slate-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Student Photo
        </h2>

        <div className="flex items-center gap-6">

          <img
            src="/avatar.png"
            alt="student"
            className="h-36 w-36 rounded-full border-4 border-slate-700 object-cover"
          />

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white"
          >
            <Upload size={18} />
            Change Photo
          </button>

        </div>

      </div>

      {/* Personal */}

      <div className="rounded-3xl bg-slate-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Personal Details
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            defaultValue="Rahul"
            placeholder="First Name"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

          <input
            defaultValue="Sharma"
            placeholder="Last Name"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

          <input
            defaultValue="Male"
            placeholder="Gender"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

          <input
            defaultValue="9876543210"
            placeholder="Mobile"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

        </div>

      </div>

      {/* Academic */}

      <div className="rounded-3xl bg-slate-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Academic Details
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            defaultValue="ADM1025"
            placeholder="Admission No"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

          <input
            defaultValue="18"
            placeholder="Roll No"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

          <input
            defaultValue="XII"
            placeholder="Class"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

          <input
            defaultValue="A"
            placeholder="Section"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

        </div>

      </div>

      {/* Parent */}

      <div className="rounded-3xl bg-slate-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          Parent Details
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            defaultValue="Amit Sharma"
            placeholder="Father Name"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

          <input
            defaultValue="Neha Sharma"
            placeholder="Mother Name"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

          <input
            defaultValue="amit@gmail.com"
            placeholder="Email"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

          <input
            defaultValue="9999999999"
            placeholder="Mobile"
            className="rounded-xl bg-slate-800 p-4 text-white"
          />

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4">

        <button
          type="button"
          className="rounded-xl border border-slate-700 px-6 py-3 text-white"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          <Save size={18} />
          Save Changes
        </button>

      </div>

    </form>
  );
}