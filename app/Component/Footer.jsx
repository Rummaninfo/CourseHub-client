"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo + Short text */}
          <div>
            <h2 className="text-xl font-bold text-white">CourseHub</h2>
            <p className="mt-3 text-sm text-gray-400">
              Learn modern skills and boost your career with world-class courses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/Home" className="hover:text-white transition">Home</a></li>
              <li><a href="/courses" className="hover:text-white transition">Courses</a></li>
              <li><a href="/add-course" className="hover:text-white transition">Add Course</a></li>
              <li><a href="/profile" className="hover:text-white transition">Profile</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white transition text-xl">🌐</a>
              <a href="#" className="hover:text-white transition text-xl">📘</a>
              <a href="#" className="hover:text-white transition text-xl">🐦</a>
              <a href="#" className="hover:text-white transition text-xl">📸</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CourseHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
