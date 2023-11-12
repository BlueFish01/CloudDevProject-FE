


export type BlogResponseModel = {
    blogId: number;
    ownerId: number;
    blogTitle: string;
    blogCover: string;
    blogDescription: string;
    blogContent: string | null;
    blogView: number;
    blogCreateDate: string;
    blogEditDate: string | null;
};

export type BlogListResponseModel = BlogResponseModel[];