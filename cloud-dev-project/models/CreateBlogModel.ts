import { JSONContent } from "@tiptap/react";

export type BlogFormModel = {
    file: File;
    blogTitle: string;
    blogDescription : string;
    blogContent: JSONContent;
};