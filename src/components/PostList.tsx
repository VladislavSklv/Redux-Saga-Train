import { connect, useDispatch, useSelector } from 'react-redux'
import React from 'react';
import { IPost } from '../types/interfaces';
import PostItem, { IPostProps } from './PostItem';

interface IPostListProps {
    syncPosts?: IPost[];
}

const PostList: React.FC<IPostListProps> = ({syncPosts}: any) => {
    if (syncPosts.length === 0) {return <h2>There are no posts yet</h2>}

    return (
        syncPosts.map((post: IPost) => <PostItem key={post.title} post={post}/>)
    );
};

const mapStateToProps = (state: any) => {
    return {
        syncPosts: state.posts.posts
    };
};

export default connect(mapStateToProps, null)(PostList);