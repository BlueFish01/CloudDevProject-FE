
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
    profileImage : string;
    name : string;
    surname : string;
    city : string;
    socialLink : string[];
    about : string;
    numberOfBlog : number;
}