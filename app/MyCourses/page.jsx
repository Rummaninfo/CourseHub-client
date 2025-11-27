"use client";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [mydata, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null); // _id currently being deleted

  // fetch courses
  useEffect(() => {
    if (!user?.email) return;

    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://courses-mocha-five.vercel.app/mycourses", {
          params: { email: user.email },
        });
        const payload = res.data?.result ?? res.data;
        setMyData(Array.isArray(payload) ? payload : []);
      } catch (err) {
        console.error("fetch mycourses error:", err);
        setMyData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user?.email]);

  // delete handler (waits for server, then removes from UI)
  const postdeleted = async (item) => {
  const id = item._id ?? item.id;
  if (!id) return;

  // SweetAlert Confirm
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  // যদি ইউজার Yes চাপায়
  if (result.isConfirmed) {
    try {
      await axios.delete(`https://courses-mocha-five.vercel.app/mycourses/${id}`);

      // UI থেকে item remove
      setMyData((prev) => prev.filter((c) => (c._id ?? c.id) !== id));

      // Success Message
      Swal.fire({
        title: "Deleted!",
        text: "Course has been deleted.",
        icon: "success",
        timer: 1800,
      });

    } catch (err) {
      console.log(err);

      Swal.fire({
        title: "Failed!",
        text: "Could not delete. Check console.",
        icon: "error",
      });
    }
  }
};

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Courses</h2>

      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : mydata.length === 0 ? (
        <p className="text-sm text-gray-500">No courses found.</p>
      ) : (
        <div className="space-y-4 mt-5">
          {mydata.map((item) => {
            const id = item._id ?? item.id;
            return (
              <div
                key={id}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
              >
                {/* Image */}
                <div className="w-28 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      No Image
                    </div>
                  )}
                </div>

                {/* Title + Price */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title || "Untitled"}</h3>
                  <p className="text-sm text-gray-600">
                    {item.category ? `${item.category} • ` : ""}
                    <span className="font-semibold text-gray-700">
                      ${Number(item.price || 0).toFixed(2)}
                    </span>
                  </p>
                </div>

                {/* Edit Button */}
                <button
                  type="button"
                  onClick={() => {
                    // change to navigate or open modal
                    console.log("edit", item);
                    alert("Edit clicked — implement navigation or modal.");
                  }}
                  className="px-3 py-1 bg-yellow-400 text-black text-sm rounded"
                >
                  Edit
                </button>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() => postdeleted(item)}
                  className={`px-3 py-1 text-sm rounded text-white ${
                    deletingId === id ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:opacity-90"
                  }`}
                  disabled={deletingId === id}
                >
                  {deletingId === id ? "Deleting..." : "Delete"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
