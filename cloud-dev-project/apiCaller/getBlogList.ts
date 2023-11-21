import axios, { AxiosRequestConfig } from 'axios';

export default async function getBlogList(sort: string, limit: number){
    
        const url = process.env.NEXT_PUBLIC_API_URL+`/api/blog/blog-list?sort=${sort}&limit=${limit}`

        const authToken = await fetch('/api/auth');
        const authTokenJson = await authToken.json();
        const Bearertoken = 'Bearer '+authTokenJson.message;

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