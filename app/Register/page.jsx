"use client";

;
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";




const Register = () => {
     let {googleSignIn} = useContext(AuthContext)
       const router = useRouter();

       
     let gsingIN = ()=>{
       googleSignIn()
        .then(()=>{
            


  Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome to KrishiLink",
        timer: 2000,
        showConfirmButton: false,
      });
    router.push("/Home")
        })
        .catch(error=>{
            console.log(error)
        })
     }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">
          Create an account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign up to access courses and track your progress.
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              placeholder="https://..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-1 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        <div className="my-4 flex items-center">
          <div className="flex-grow h-px bg-gray-200"></div>
          <div className="px-3 text-sm text-gray-400">or</div>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        <button
          className="w-full flex items-center justify-center gap-3 py-2 rounded-lg border border-gray-300 bg-white text-sm hover:shadow-sm transition"
          onClick={gsingIN}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.6h146.9c-6.3 34.2-25.1 63.2-53.5 82.7v68.6h86.6c50.6-46.6 81.5-115 81.5-196.5z"
              fill="#4285F4"
            />
            <path
              d="M272 544.3c72.6 0 133.6-24.1 178.2-65.4l-86.6-68.6c-24.1 16.2-55 25.9-91.6 25.9-70.4 0-130-47.6-151.4-111.4H32.6v69.9C77.3 483.3 168.7 544.3 272 544.3z"
              fill="#34A853"
            />
            <path
              d="M120.6 324.8c-10.7-31.7-10.7-65.9 0-97.6V157.3H32.6c-45.7 91.9-45.7 200 0 291.9l88-69.4z"
              fill="#FBBC05"
            />
            <path
              d="M272 109.1c38.1-.6 74.4 13.9 102 40.1l76.5-76.5C404.5 24.6 344.5 0 272 0 168.7 0 77.3 61 32.6 157.3l88 69.9C142 156.7 201.6 109.7 272 109.1z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-sm text-gray-700">Continue with Google</span>
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
