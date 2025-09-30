import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

import {NextRequest, NextResponse} from 'next/server';

export async function middleware(req:NextRequest){
const res = NextResponse.next();
const supabase = createMiddlewareClient({ req, res});

const { 
    data: {
        session
    }
} = await supabase.auth.getSession();

console.log(session);

if(!session){
    return NextResponse.redirect(new URL('/login' , req.url))
}
console.log(session);
return res;


};

export const config = {
  matcher: ['/dashboard/', '/profile/:path*'],
};
