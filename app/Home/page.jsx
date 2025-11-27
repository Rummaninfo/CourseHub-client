"use client";
import { useRouter } from "next/navigation";
import React from 'react';

const Home = () => {
    const router = useRouter();

    // Section 1: Features
    const features = [
        {
            icon: "📊",
            title: "Easy Management",
            description: "Create and organize courses with our intuitive dashboard"
        },
        {
            icon: "📈",
            title: "Track Progress",
            description: "Monitor student enrollment and course performance"
        },
        {
            icon: "⚡",
            title: "Quick Setup",
            description: "Get your courses live in minutes, not hours"
        },
        {
            icon: "📊",
            title: "Smart Analytics",
            description: "Make data-driven decisions with detailed insights"
        }
    ];

    // Section 2: Popular Courses - WITH IMAGES
    const popularCourses = [
        {
            id: 1,
            title: "Web Development Bootcamp",
            instructor: "Sarah Johnson",
            price: 59.99,
            rating: 4.8,
            students: 2340,
            category: "Development",
            image: "https://i.ibb.co/SwdVv91V/web-development.jpg" // Your first image link
        },
        {
            id: 2,
            title: "Mobile App Mastery",
            instructor: "Mike Chen",
            price: 49.99,
            rating: 4.7,
            students: 1870,
            category: "Mobile",
            image: "https://i.ibb.co/mCQNKVdh/mobile-app.jpg" // Your second image link
        },
        {
            id: 3,
            title: "Data Science Fundamentals",
            instructor: "Dr. Emily Davis",
            price: 69.99,
            rating: 4.9,
            students: 1560,
            category: "Data Science",
            image: "https://i.ibb.co/S7mSjZPY/data-science.jpg" // Your third image link
        },
        {
            id: 4,
            title: "UI/UX Design Pro",
            instructor: "Alex Rodriguez",
            price: 44.99,
            rating: 4.6,
            students: 2100,
            category: "Design",
            image: "https://i.ibb.co/DxrF5Cq/ui-ux-design.jpg" // Your fourth image link
        }
    ];

    // Section 3: Testimonials
    const testimonials = [
        {
            name: "Jennifer Wilson",
            role: "Course Creator",
            content: "This platform made course management so simple. I've doubled my student enrollment in 3 months!",
            avatar: "👩‍🏫"
        },
        {
            name: "Marcus Thompson",
            role: "Instructor",
            content: "The analytics helped me understand what my students need. Highly recommended for educators!",
            avatar: "👨‍💻"
        },
        {
            name: "Sophia Lee",
            role: "Student",
            content: "Found amazing courses here. The learning experience is smooth and engaging.",
            avatar: "👩‍🎓"
        },
        {
            name: "David Park",
            role: "Entrepreneur",
            content: "Created my first course in under an hour. The platform is incredibly user-friendly.",
            avatar: "👨‍💼"
        }
    ];

    // Section 4: Stats Banner
    const stats = [
        { number: "50,000+", label: "Active Students" },
        { number: "500+", label: "Expert Instructors" },
        { number: "1,000+", label: "Courses Available" },
        { number: "95%", label: "Success Rate" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Fixed */}
            <section className="w-full bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 py-20 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                        Manage Courses <span className="block text-green-200">Easily</span>
                    </h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Create, organize, and track your courses from one simple dashboard. Start your teaching journey today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/AddCourse")}
                            className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
                        >
                            🚀 Start Managing
                        </button>
                        <button
                            onClick={() => router.push("/Courses")}
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105 text-lg"
                        >
                            📚 View Courses
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 1: Features */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
                        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                            Everything you need to create, manage, and grow your online courses
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300 cursor-pointer group hover:scale-105"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Popular Courses WITH IMAGES */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
                        <p className="text-gray-600 text-xl">Join thousands of students learning with us</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {popularCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:scale-105"
                            >
                                {/* Course Image */}
                                <div className="h-48 relative overflow-hidden">
                                    <img 
                                        src={course.image} 
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            // Fallback gradient if image fails to load
                                            e.target.style.background = `linear-gradient(135deg, ${getCategoryColor(course.category)})`;
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    {/* Fallback gradient background */}
                                    <div 
                                        className="absolute inset-0 hidden"
                                        style={{ background: `linear-gradient(135deg, ${getCategoryColor(course.category)})` }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                                            {getCategoryIcon(course.category)}
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                            {course.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-green-500 text-white px-3 py-2 rounded-xl text-lg font-bold">
                                            ${course.price}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-lg">by {course.instructor}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-yellow-500 text-lg">⭐</span>
                                            <span className="font-semibold text-gray-900">{course.rating}</span>
                                        </div>
                                        <span className="text-gray-500 font-medium">{course.students.toLocaleString()} students</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button
                            onClick={() => router.push("/Courses")}
                            className="px-10 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 text-lg shadow-lg hover:shadow-xl"
                        >
                            View All Courses
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 3: Stats Banner */}
            <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="group hover:scale-110 transition-transform duration-300">
                                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-blue-100 font-semibold text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Testimonials */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
                        <p className="text-gray-600 text-xl">Join our community of satisfied instructors and students</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:scale-105"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-4xl bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                        <p className="text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex mb-4 text-yellow-500 text-xl">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg italic">
                                    "{testimonial.content}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper function for category colors
const getCategoryColor = (category) => {
    const colors = {
        'Development': '#3B82F6, #1D4ED8',
        'Mobile': '#10B981, #047857',
        'Data Science': '#8B5CF6, #7C3AED',
        'Design': '#F59E0B, #D97706'
    };
    return colors[category] || '#6B7280, #4B5563';
};

// Helper function for category icons
const getCategoryIcon = (category) => {
    const icons = {
        'Development': '💻',
        'Mobile': '📱',
        'Data Science': '📊',
        'Design': '🎨'
    };
    return icons[category] || '📚';
};

export default Home;