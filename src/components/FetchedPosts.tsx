import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoaderAction, showAlertAction, showLoaderAction } from '../redux/appReducer';
import { fetchPosts } from '../redux/postsReducer';
import { IPost } from '../types/interfaces';
import Alert from './Alert';
import Loader from './Loader';
import PostItem from './PostItem';

const FetchedPosts = () => {
    const dispatch = useDispatch();
    const {fetchedPosts} = useSelector((state: any) => state.posts);
    const {isLoading} = useSelector((state: any) => state.app)

    const postsHandler = async () => {
        dispatch(showLoaderAction());
        await dispatch(fetchPosts());
        dispatch(hideLoaderAction());
    }
    
    if (isLoading) return <Loader />

    if (!fetchedPosts.length) {
        return <button
            className='btn btn-primary'
            onClick={postsHandler}
        >Browse</button>
    }
    return (fetchedPosts.map((post: IPost) => <PostItem key={post.id} post={post}/>));
};

export default FetchedPosts;