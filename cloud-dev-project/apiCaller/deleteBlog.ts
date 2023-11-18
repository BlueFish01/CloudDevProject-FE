import axios, { AxiosRequestConfig } from 'axios';

export default async function deleteBlog(blogId:number){
    const url = process.env.NEXT_PUBLIC_API_URL+'/api/blog/delete-blog'

    const authToken = await fetch('http://localhost:3000/api/auth');
    const token = await authToken.json();
    const Bearertoken = 'Bearer '+token.value;

    const data = {"blogId":blogId} 

    const config: AxiosRequestConfig = {
        method: 'delete',
        url: url,
        maxBodyLength: Infinity,
        headers: { 
            'Authorization': Bearertoken,
            'Content-Type': 'application/json',
        },
        data: data,
    };

    try {
        const response = await axios(config);
        return response.data;

    } catch (error) {
        throw error;
    }

}