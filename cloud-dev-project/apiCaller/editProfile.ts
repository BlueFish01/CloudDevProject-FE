import axios from 'axios'
import { useCookies } from 'react-cookie';
import {getProfileModel} from '../models/Profile';
import ValidateForm from '@/src/app/profile/page';

// export default async function editProfile(data:getProfileModel) {

//     const url = process.env.NEXT_PUBLIC_AUTH_URL;
    

//     const config = {
//         method: 'post',
//         url: url,
//         headers: { 
//             'Content-Type': 'application/json'
//         },
//         data : data
//     };

//     try {
//         const response = await axios(config);
//         // const response = {data :{result:{authToken:"1234567890"}}};

//         return response.data;

//     } catch (error) {
//         throw error;
//     }

// }
export default async function editProfile(data:getProfileModel) {
    // Example data to update
    const updatedData = {
        
    };
    
    // API endpoint where you want to update data
    const apiUrl = 'https://api.example.com/data'; // Replace with your API endpoint
    
    // Make a POST request to update the data
    fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        // Add any necessary authorization headers here
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        },
        body: JSON.stringify(updatedData),
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
        })
        .then(data => {
        console.log('Data updated successfully:', data);
        // Handle the updated data as needed
        })
        .catch(error => {
        console.error('Error updating data:', error);
        // Handle errors
        });
    }