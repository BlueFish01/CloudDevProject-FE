import axios, { AxiosRequestConfig } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next';
//apply promise concept here

export default async function getProfile(){
    
        const url = process.env.NEXT_PUBLIC_API_URL+`/api/user/get-profile`

        const authToken = await fetch('http://localhost:3000/api/auth');
        const token = await authToken.json();
        const Bearertoken = 'Bearer '+token.value;

        const config: AxiosRequestConfig = {
            method: 'get',
            url: url,
            headers: { 
                'Authorization': Bearertoken,
            },
        };
        try {
            // const response = await axios(config);
            const response = { data: {
              response: {
                profileImage : 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699920000&semt=ais',
                userFname : 'Kritsakorn',
                userLname : 'Sripuritanont',
                userCity : 'Pathumthani',
                userSocial : ['pigeonIG','pigeonDis'],
                userAbout : 'Hello',
                numOfBlog : 10
                }}
              }
            return response.data;
    
        } catch (error) {
            throw error;
        }
        
}