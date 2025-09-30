"use client";
import { supabase } from "@/lib/supabaseCleint";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let { data: userData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (userData) {
        router.refresh();
      }
      if (data) console.log(data);
      if (error) {
        console.log("error ", error.message);
      } else {
        console.log("login successfully ");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-blue-100 text-lg">Sign in to your account</p>
        </div>

        <div className="p-8">
          <form onSubmit={login} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={data?.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
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
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={data?.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Alternative Options */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center space-y-4">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link
                  href={"/register"}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition duration-200"
                >
                  Create account
                </Link>
              </p>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <Link
                href={"/login/loginbyphone"}
                className="inline-flex items-center justify-center w-full bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-4 rounded-lg transition duration-200 hover:shadow-md"
              >
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2zm4 4V4h-4v2h4z" />
                </svg>
                Sign in with Phone
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
