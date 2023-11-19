import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const authToken = request.cookies.get("authToken");
    return new Response(JSON.stringify({ ...authToken }));
}