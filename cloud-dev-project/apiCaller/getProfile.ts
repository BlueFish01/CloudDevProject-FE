import axios, { AxiosRequestConfig } from 'axios'

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
            const response = await axios(config);
            return response.data;
    
        } catch (error) {
            throw error;
        }
        
}