// components/Hero.tsx
"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="w-full bg-gradient-to-b from-indigo-50 to-white py-16 px-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold">
        Manage Courses Easily
      </h1>

      <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">
        Create, organize, and track your courses from one simple dashboard.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => router.push("/add-course")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition"
        >
          Start Managing
        </button>

        <button
          onClick={() => router.push("/courses")}
          className="px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:shadow-md transition"
        >
          View Courses
        </button>
      </div>
    </section>
  );
}
