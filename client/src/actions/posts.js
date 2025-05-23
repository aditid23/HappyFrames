import * as api from '../api';

export const getPosts = () => async(dispatch)=>{
    try{
        const { data } = await api.fetchPosts();

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch(error){
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async(dispatch) =>
{
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        console.log("Dispatching deletePost action for ID:", id); // Log before calling API
        await api.deletePost(id);
        console.log("Delete request successful"); // Log after successful API call

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log("Error in deletePost action:", error);
    }
};

export const likePost = (id)=> async(dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({type: 'LIKE', payload: data });
    } catch (error) {
        console.log(error);
    }
}