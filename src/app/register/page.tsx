import { supabase } from "@/lib/supabase"
import { useState } from "react";
import { useRouter } from "next/navigation";
const router = useRouter();
  const [data, setData] = useState<{
    email: string,
    password: string
  }>({
     email: '',
    password: ''
  })

 const signUp = async (e: React.FormEvent) => {
         e.preventDefault();
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
     }
   }
export default function page() {
  return (
    <form onSubmit={signUp}>
      <label htmlFor="email">email</label>
      <input type="email" placeholder="email" name="email" />

      <label htmlFor="password">password</label>
      <input type="password" name="password" placeholder="password" />
      <button type="submit">register</button>
    </form>
  );
}
