import { getAllPosts, searchPosts } from "../api/posts"

export const allPostsAction =  () => {
    return async (dispatch) => {
        const posts = await getAllPosts(); 
        return dispatch({
            type: "GET_ALL",
            payload: posts
        });
    }
}

export const searchPostsAction = (toSearch) => {
    return async (dispatch) => {
        const posts = await searchPosts(toSearch);
        console.log(posts);
        return dispatch({
        type: "GET_ALL",
        payload: posts
    });
    }
}