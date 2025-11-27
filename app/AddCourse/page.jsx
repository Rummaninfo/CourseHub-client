"use client";

import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

// AddCourseFormDesign.jsx
// Presentation-only Next.js / React component styled with Tailwind CSS.
// Minimal interactivity: onSubmit handler present. Short description removed; image field accepts a URL (you will provide link).

export default function AddCourse() {
    let {user} = useContext(AuthContext)
    console.log(user)
  const addedCourse = (ev) => {
    ev.preventDefault();
    let price = ev.target.price.value;
    let title = ev.target.title.value;
    let author = ev.target.author.value;
    let category = ev.target.category.value;
    let img = ev.target.img.value;
    let short_description = ev.target.short_description.value;
    let long_description = ev.target.long_description.value;
    let email = user.email

      let newData ={
        title, img,  author_name: author, price, category, short_description , long_description, email
      }
      console.log(newData)
      axios.post("http://localhost:5000/allcourses", newData)
      .then((data)=>{
        console.log(data)
        alert('successfully added')
      }
     
    )
    .catch(error=>{
        console.log(error)
    })
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className="md:col-span-2"> <label className="block text-sm font-medium text-gray-700"> Short description </label> <input name="short_description" placeholder="A short one-line summary of the course" className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" /> </div>

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
