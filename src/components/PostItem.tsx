import React from 'react';

export interface IPost {
    title: string;
}

export interface IPostProps {
    post: IPost;
}

const PostItem: React.FC<IPostProps> = ({post}) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h2 className='card-title'>{post.title}</h2>
            </div>
        </div>
    );
};

export default PostItem;