
import axios from "axios";
import { LoginFormModel } from '@/models';
import { NextResponse } from "next/server";

export default async function LoginApi(data: LoginFormModel) {
  const url = process.env.NEXT_PUBLIC_AUTH_URL;

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    // const response = await axios(config);
    const response = {
      data: {"result" : { "authtoken" : "1234567890" }},
    };
    const oneDay = 24 * 60 * 60 * 1000
    const authToken = response.data?.result?.authtoken;

    return response.data;

  } catch (error) {
    throw error;
  }
}
