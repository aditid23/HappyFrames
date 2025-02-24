import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => {
    console.log(`Sending DELETE request to: ${url}/${id}`);
    return axios.delete(`${url}/${id}`);
};

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);