import axios, { AxiosRequestConfig } from 'axios'
import { useCookies } from 'react-cookie';
import {EditProfileModel, getProfileModel} from '../models/Profile';
import ValidateForm from '@/src/app/profile/page';
import { number } from 'yup';

export default async function editProfile(data:EditProfileModel, token:string){
    const url = process.env.NEXT_PUBLIC_API_URL+'/api/user/edit-profile'

    const Bearertoken = 'Bearer '+token;

    const formData = new FormData();
    formData.append('json', JSON.stringify({
        userFName : data.userFName,
        userLName: data.userLName,
        userSocial: data.userSocial,
        userAbout: data.userAbout,
        userAddress: data.userAddress,
    }));

    const config: AxiosRequestConfig = {
        method: 'put',
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