import { Dispatch } from "redux";
import { hideLoaderAction, showAlertAction } from "./appReducer";

const initialState = {
    posts: [],
    fetchedPosts: []
}

const CREATE_POST = 'CREATE_POST'; 
const FETCH_POSTS = 'FETCH_POSTS';

export const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.payload]};

        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload};

        default:
            return state;
    }
}

export function fetchPosts(): any{
    return async (dis: Dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/postssd?_limit=5');
            const json = await response.json();
            dis(fetchPostAction(json));
        } catch (error) {
            dis(showAlertAction())
        }
    }
}

export const createPostAction = (payload: any) => ({type: CREATE_POST, payload: payload});
export const fetchPostAction = (payload: any) => ({type: FETCH_POSTS, payload: payload});