import axios, { AxiosRequestConfig } from 'axios';
import { EditBlogFormModel } from '@/models';



export default async function editBlog(data:EditBlogFormModel,token:string){
    const url = process.env.NEXT_PUBLIC_API_URL+'/api/blog/edit-blog'

    const Bearertoken = 'Bearer '+token


    const config: AxiosRequestConfig = {
        method: 'put',
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