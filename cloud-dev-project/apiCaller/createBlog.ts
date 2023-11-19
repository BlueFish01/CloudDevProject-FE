import axios, { AxiosRequestConfig } from 'axios';
import FormData from 'form-data';
import { BlogFormModel } from '@/models';



export default async function createBlog(data:BlogFormModel){
    const url = process.env.NEXT_PUBLIC_API_URL+'/api/blog/create-blog'

    const authToken = await fetch('http://localhost:3000/api/auth');
    const token = await authToken.json();
    const Bearertoken = 'Bearer '+token.value;

    const formData = new FormData();
    formData.append('file', new Blob([data.file], { type: data.file.type }));
    formData.append('json', JSON.stringify({
        blogTitle: data.blogTitle,
        blogDescription: data.blogDescription,
        blogContent: data.blogContent,
    }));

    const config: AxiosRequestConfig = {
        method: 'post',
        url: url,
        maxBodyLength: Infinity,
        headers: { 
            'Authorization': Bearertoken,
        },
        data: formData,
    };

    try {
        const response = await axios(config);
        //const response = {data:{formData}}
        return response.data;

    } catch (error) {
        throw error;
    }

}
