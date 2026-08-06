"use client";

import { useState } from "react";

import PersonalDetails from "./steps/PersonalDetails";
import ParentDetails from "./steps/ParentDetails";
import AcademicDetails from "./steps/AcademicDetails";

export default function StudentForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

      {/* Progress */}

      <div className="mb-10 flex items-center justify-between">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${
              step >= item
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-slate-400"
            }`}
          >
            {item}
          </div>
        ))}

      </div>

      {/* Form Steps */}

      {step === 1 && <PersonalDetails />}

      {step === 2 && <ParentDetails />}

      {step === 3 && <AcademicDetails />}

      {/* Buttons */}

      <div className="mt-10 flex justify-between">

        <button
          onClick={prevStep}
          disabled={step === 1}
          className="rounded-xl bg-slate-700 px-6 py-3 text-white disabled:opacity-40"
        >
          Previous
        </button>

        {step < 3 ? (
          <button
            onClick={nextStep}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white"
          >
            Next
          </button>
        ) : (
          <button
            className="rounded-xl bg-green-600 px-6 py-3 text-white"
          >
            Save Student
          </button>
        )}

      </div>

    </div>
  );
}