"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Courses = () => {
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState("");

  useEffect(() => {
    let mounted = true;

    axios
      .get(`http://localhost:5000/allcourses?search=${encodeURIComponent(searching)}`)
      .then((res) => {
      
        if (!mounted) return;
        const payload = res.data?.result ?? res.data;
        setData(Array.isArray(payload) ? payload : []);
      })
      .catch((err) => {
        console.error("fetch courses error:", err);
        if (mounted) setData([]);
      });

    return () => {
      mounted = false;
    };
  }, [searching]);

  const handlesearch = (ev) => {
    setSearching(ev.target.value);
  };

  return (
    <>
      <div>
        <div className="text-center max-w-2xl mx-auto my-10">
          <h2 className="text-3xl font-bold text-gray-900">Learn Mobile App Development</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Build fast, responsive and modern apps using Flutter and Dart with hands-on projects.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          {/* searching */}
          <input
            value={searching}
            onChange={handlesearch}
        
            type="text"
            placeholder="Search courses..."
            className="w-full max-w-md px-4 py-2 text-black border rounded-lg shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-indigo-500 
               focus:border-indigo-500 transition"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 px-4">
        {data.map((prev) => (
            
          <div
            key={prev._id ?? prev.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm 
                 hover:shadow-lg transition p-4 cursor-pointer"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden rounded-lg bg-gray-100">
              {prev.img ? (
                // image এর জন্য সাবধানে src ব্যবহার করো
                // যদি remote image থাকে বা CORS সমস্যা থাকে সেগুলো ঠিক করো সার্ভার সাইডে
                <img
                  src={prev.img}
                  alt={prev.title || "Course image"}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg text-black font-semibold mt-4">{prev.title || "Untitled"}</h3>

            {/* Author */}
            <p className="text-sm text-gray-500">by {prev.author_name || "Unknown"}</p>

            {/* Short description */}
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{prev.short_description}</p>

            {/* Price + Date */}
            <div className="mt-3 flex items-center justify-between text-sm text-gray-700">
              <span className="font-semibold">${Number(prev.price || 0).toFixed(2)}</span>
              <span className="text-gray-500">{prev.date}</span>
            </div>

            {/* View Details Button */}
            <Link href={`/Courses/${prev._id}`}>
              <button
                className="mt-4 w-full py-2 border rounded-lg text-indigo-600 border-indigo-500 
                   hover:bg-indigo-50 transition font-medium text-sm"
                type="button"
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
