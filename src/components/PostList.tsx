import React from 'react';
import PostItem, { IPost, IPostProps } from './PostItem';

interface IPostListProps {
    posts: IPost[];
}

const PostList: React.FC<IPostListProps> = ({posts}): any => {
    return (
        posts.map(post => <PostItem key={post.title} post={post}/>)
    );
};

export default PostList;