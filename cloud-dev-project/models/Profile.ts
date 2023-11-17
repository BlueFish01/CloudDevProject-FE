
export type EditProfileModel = {
    userFname: string;
    userLname: string;
    userCity: string;
    userSocical : string[]
    userAbout: string;
}

// const  payload:EditProfileModel = {
//     userFname : FormData.name,
//     ...,
//     userSocical : ["IG": formdata?.IG ? "","FaceBon"]
// }

export type getProfileModel = {
    userId?: number;
    username?: string;
    userFname?: string;
    userLname?: string;
    userEmail?: string;
    userSocial?: string[];
    userPicture?: string;
    userAbout?: string;
    createDate?: Date;
    userStatus?: string;
    cuid?: string;
    userCity: string;
    numOfBlog: number;
}