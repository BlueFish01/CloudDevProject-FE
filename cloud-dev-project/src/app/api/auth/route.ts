import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const authToken = request.cookies.get("authToken")?.value;
    console.log(authToken);
    return NextResponse.json({ message : authToken });
}