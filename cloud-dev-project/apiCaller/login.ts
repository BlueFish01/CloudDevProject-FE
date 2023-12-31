import axios from "axios";
import { LoginFormModel } from "../models/loginModel";

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
    const response = await axios(config);
    //const response = {data :{result:{authToken:"1234567890"}}};

    return response.data;
  } catch (error) {
    throw error;
  }
}
