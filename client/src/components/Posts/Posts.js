import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import { MainContainer, SmMargin } from './styles'; // Ensure correct path to styles.js

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    
    return (
        !posts.length ? <CircularProgress /> : (
            <MainContainer container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6}>
                        <SmMargin>
                            <Post post={post} />
                        </SmMargin>
                    </Grid>
                ))}
            </MainContainer>
        )
    );
}

export default Posts;
