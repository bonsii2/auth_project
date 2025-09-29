import {createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
 export  const supabase = createClientComponentClient();

 const serverComponent = createServerComponentClient({cookies});
 

 