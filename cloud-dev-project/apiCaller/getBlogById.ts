import axios, { AxiosRequestConfig } from 'axios';

export default async function getBlogById(id : number){
    
        const url = process.env.NEXT_PUBLIC_API_URL+`/api/blog/get-blog?blogId=${id}`

        const config: AxiosRequestConfig = {
            method: 'get',
            url: url,
        };
        try {
            const response = await axios(config);
            return response.data;
    
        } catch (error) {
            throw error;
        }
        
}