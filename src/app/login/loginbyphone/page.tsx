'use client'
import { useState } from "react";
import { supabase } from "@/lib/supabaseCleint";
export default function Page  () {
    const [phone, setphone] = useState('') ;
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignUp = async () =>{
       let {data, error} = await supabase.auth.signUp({
        phone: phone,
        password: password
       }) 

       if(error){
        setMessage(error.message);

       }else{
        setMessage("otp sent! please verify your phone number")
       }
    }
    
    return (
      <form onSubmit={handleSignUp}>
        <input
          type="tel"
          placeholder="enter phone number"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />

        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>sign up</button>
        <p>{message}</p>
      </form>
    );

}