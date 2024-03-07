import React from "react";
import NewPostDetails from "./NewPostDetails";
interface IPrams {
    postId?: string;
}
const NewPostPage = ({ params }: { params: IPrams }) => {
    return <NewPostDetails />;
};

export default NewPostPage;
