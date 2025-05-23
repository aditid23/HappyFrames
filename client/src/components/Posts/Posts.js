import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import { MainContainer, SmMargin } from './styles'; 

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    
    return (
        !posts.length ? <CircularProgress /> : (
            <MainContainer container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6}>
                        <SmMargin>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </SmMargin>
                    </Grid>
                ))}
            </MainContainer>
        )
    );
}

export default Posts;
