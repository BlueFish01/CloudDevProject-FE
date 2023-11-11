import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {PATH} from "@/constants";



const protectedRoutes = [PATH.HOME,PATH.PROFILE,PATH.ROOT] as string[] ;

export default function middleware(req: NextRequest) {

    
    const auth = req.cookies.has("authToken");
    const cookie = req.cookies.get("authToken");
    console.log("cookie : ",cookie);

    if (!auth && protectedRoutes.includes(req.nextUrl.pathname)) {
      const absoluteURL = new URL(PATH.LOGIN, req.nextUrl.origin);
      console.log("redirected to login");
      return NextResponse.redirect(absoluteURL.toString());
      
    }
    if (auth && (req.nextUrl.pathname === PATH.LOGIN || req.nextUrl.pathname === PATH.ROOT)) {
      const absoluteURL = new URL(PATH.HOME, req.nextUrl.origin);
      console.log("redirected to HOME");
      return NextResponse.redirect(absoluteURL.toString());
    }
    else{
      return NextResponse.next();
    }
  }