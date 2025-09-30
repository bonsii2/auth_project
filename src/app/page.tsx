import { supabase } from "@/lib/supabaseCleint";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to Client Auth
          </h1>
          <p className="text-gray-600 text-lg">
            Authentication Tutorial Project
          </p>
        </div>

        {/* Decorative Icon/Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-8 text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            What i will  learn in this Project:
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              User Authentication & Authorization
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Secure Session Management
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Protected Routes & Middleware
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <Link
          href={"/login"}
          className="inline-block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Get Started - Login
        </Link>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-6">
          Built with Next.js & Supabase
        </p>
      </div>
    </div>
  );
}
