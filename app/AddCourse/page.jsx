"use client";

import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function AddCourse() {
  const { user, loading } = useContext(AuthContext);

  const addedCourse = async (ev) => {
    ev.preventDefault();

    // যদি auth লোডিং চলছে বা user না থাকে, সাবমিট নিষ্ক্রিয় করুন
    if (loading) {
      alert("Please wait...");
      return;
    }
    if (!user) {
      alert("You must be logged in to add a course.");
      return;
    }

    const price = ev.target.price.value;
    const title = ev.target.title.value;
    const author = ev.target.author.value;
    const category = ev.target.category.value;
    const img = ev.target.img.value;
    const short_description = ev.target.short_description.value;
    const long_description = ev.target.long_description.value;
    const email = user?.email || "unknown@example.com";

    const newData = {
      title,
      img,
      author_name: author,
      price,
      category,
      short_description,
      long_description,
      email,
    };

    try {
      const res = await axios.post(
        "https://courses-mocha-five.vercel.app/allcourses",
        newData,
        { timeout: 10000 }
      );
      console.log("Added course:", res.data);
      alert("Successfully added");
      ev.target.reset();
    } catch (error) {
      console.error("Add course failed:", error);
      alert("Failed to add course. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-gray-50 p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Add Course</h2>
            <p className="text-sm text-gray-500">
              Design form — minimal handling included.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg shadow-sm hover:opacity-95"
            >
              Save
            </button>
          </div>
        </div>

        <form onSubmit={addedCourse} className="space-y-6">
          {/* ... আপনার ফর্ম ফিল্ডগুলো একই থাকবে ... */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Course ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course ID
              </label>
              <input
                name="course_id"
                placeholder="e.g. 1 or course-101"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price (USD)
              </label>
              <input
                name="price"
                placeholder="49.99"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                name="title"
                placeholder="Web Development Bootcamp"
                className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Author */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                name="author"
                placeholder="John Doe"
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                name="date"
                type="date"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* Image */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Course Image (URL)
              </label>
              <div className="mt-2">
                <input
                  name="img"
                  placeholder="https://example.com/image.png"
                  className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Paste an image URL — you'll provide the link.
                </p>
                <div className="mt-3 w-40 h-24 rounded-lg bg-gray-100 border border-dashed border-gray-200 flex items-center justify-center text-sm text-gray-400">
                  Preview
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Short description
              </label>
              <input
                name="short_description"
                placeholder="A short one-line summary of the course"
                className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Long description
              </label>
              <textarea
                name="long_description"
                placeholder="Full course description..."
                rows={6}
                className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Preview changes in the course list after saving.
            </div>
            <div className="flex items-center gap-3">
              <button
                type="reset"
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg shadow"
              >
                Create Course
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
