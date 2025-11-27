"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const DetailsPage = () => {
    const params = useParams();
    const id = params.id;
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/allcourses/${id}`)
                .then(response => {
                    setCourse(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error:", error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-lg">Loading course details...</div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen  flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Course not found</h1>
                    <Link href="/Courses" className=" text-black bg-amber-700 hover:underline">
                        Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Back Button */}
                <Link 
                    href="/Courses" 
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
                >
                    <span>←</span>
                    <span>Back to All Courses</span>
                </Link>

                {/* Course Details Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="md:flex">
                        {/* Course Image */}
                        <div className="md:w-2/5">
                            <div className="h-64 md:h-full">
                                <img
                                    src={course.img}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Course Info */}
                        <div className="md:w-3/5 p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                        {course.category}
                                    </span>
                                </div>
                                <span className="text-gray-500 text-sm">{course.date}</span>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                            <p className="text-gray-600 text-lg mb-4">by {course.author_name}</p>
                            
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                {course.short_description}
                            </p>

                            <div className="flex items-center justify-between mb-6">
                                <span className="text-3xl font-bold text-green-600">
                                    ${course.price}
                                </span>
                                <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    Course ID: {course.id}
                                </span>
                            </div>

                            <div className="flex gap-4">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex-1">
                                    Enroll Now
                                </button>
                                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-semibold">
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Long Description */}
                <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Description</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {course.long_description || "No detailed description available."}
                    </p>
                </div>

                {/* Course Features */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                        <ul className="text-gray-700 space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                Python programming fundamentals
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                Advanced Python concepts
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                Real-world project development
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                Problem-solving skills
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Course Includes</h3>
                        <ul className="text-gray-700 space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                Lifetime access
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                Certificate of completion
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                Downloadable resources
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                Community support
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Instructor Info */}
                <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">About the Instructor</h3>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-lg">
                                {course.author_name?.charAt(0)}
                            </span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">{course.author_name}</h4>
                            <p className="text-gray-600">Professional Python Developer & Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;