import { NextResponse } from "next/server";
import { getSessionToken } from "@/utils/sessionStorage"; 
import type { NextRequest } from "next/server";
import {PATH} from "@/constants";
import { parse } from 'cookie';



const protectedRoutes = [PATH.HOME,PATH.PROFILE] as string[] ;

export default function middleware(req: NextRequest) {

    const cookies = new Headers(req.headers).get('cookie') || '';
    const parsedCookies = parse(cookies) as {[key: string]: string};

    console.log("authToken : ",cookies);

    if (!parsedCookies.authToken && protectedRoutes.includes(req.nextUrl.pathname)) {
      const absoluteURL = new URL(PATH.LOGIN, req.nextUrl.origin);
      console.log("redirected to login");
      return NextResponse.redirect(absoluteURL.toString());
      
    }
    else{
      console.log("next : ");
      return NextResponse.next();
    }
  }