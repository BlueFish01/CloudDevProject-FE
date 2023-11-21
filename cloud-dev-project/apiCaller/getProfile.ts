import axios, { AxiosRequestConfig } from 'axios'

export default async function getProfile(token:string){
    
        const url = process.env.NEXT_PUBLIC_API_URL+`/api/user/get-profile`
        const Bearertoken = 'Bearer '+token;

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