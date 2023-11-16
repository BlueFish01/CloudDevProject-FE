
export type EditProfileModel = {
    Name: string;
    Surname: string;
    City: string;
    IG?: string;
    Discord?: string;
    LinkedIn?: string;
    About?: string;
}

export type getProfileModel = {
    userId: number;
    username: string;
    userFname: string;
    userLname: string;
    userEmail: string;
    userSocial: string[];
    userPicture: string;
    userAbout: string;
    createDate: Date;
    userStatus: string;
    cuid: string
}