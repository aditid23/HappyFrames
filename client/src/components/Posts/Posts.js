import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../Posts/Post/Post.js';
// import { MainContainer, SmMargin, ActionDiv } from "./styles";

const Posts = () =>{
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    return(
        <>
        <h1>POSTS</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;