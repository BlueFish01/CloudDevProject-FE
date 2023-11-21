import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const authToken = request.cookies.get("authToken");
    const res = {
        statusCode: 200,

        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify({ ...authToken })
    }
    return new Response(JSON.stringify({ ...authToken }));
    //return res;
}