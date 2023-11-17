
export type EditProfileModel = {
    append: any;
    userFName: string;
    userLName: string;
    userAddress: string;
    userSocial : string[]
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
    userFName?: string;
    userLName?: string;
    userEmail?: string;
    userSocial?: string[];
    userPicture?: string;
    userAbout?: string;
    createDate?: Date;
    userStatus?: string;
    cuid?: string;
    userAddress: string;
    numberOfPost: number;
}