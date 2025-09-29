'use client'
import { supabase } from "@/lib/supabase"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Page() {
  const [loading, setLoading] = useState(false);
 
  const router = useRouter();
  const [data, setData] = useState<{
    email: string,
    password: string
  }>({
     email: '',
    password: ''
  })

  const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    try{
      

let { data: userData, error } = await supabase.auth.signInWithPassword({
  email: data.email,
  password: data.password,
});




if(userData){
  console.log(userData)
}
if(data) console.log(data);
if(error){
  console.log('error ', error.message)
}else{
  console.log('login successfully ');
  router.push('/')
}
}catch(error){
      console.log(error)
}finally{
  setLoading(false);
}

  }

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setData((prev: any) =>({
      ...prev,
      [name] : value,
    }))
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Login
      </h1>
      <form onSubmit={login} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={data?.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={data?.password}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          {loading ? (
            <div className="flex justify-center items-center mt-4">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
              <span className="ml-4 text-sm text-gray-600">loging...</span>
            </div>
          ):(
              "login"
          )}
        </button>
        <Link href={'/register'} className="text-black">register</Link>
      </form>
    </div>
  );
  }

