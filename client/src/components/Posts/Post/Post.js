import React from 'react';
import { StyledCard, StyledMedia, Overlay, Overlay2, Details, Title, StyledCardActions } from './styles';  
import moment from 'moment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CardContent, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch(); 
    if (!post) return null;  

    return (
        <StyledCard>
            <StyledMedia image={post.selectedFile} title={post.title} />
            <Overlay>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>
                    {moment(post.createdAt).isValid() ? moment(post.createdAt).fromNow() : 'Invalid date'}
                </Typography>
            </Overlay>
            <Overlay2>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </Overlay2>
            <Details>
                <Typography variant='body2' color="textSecondary">
                    {post.tags?.map((tag) => `#${tag} `)}
                </Typography>
            </Details>
            <CardContent>
                <Title variant='h5' gutterBottom>{post.title}</Title>
            </CardContent>
            <CardContent>
                <Title variant='body2' color = "textSecondary" component="p">{post.message}</Title>
            </CardContent>
            <StyledCardActions>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </StyledCardActions>
        </StyledCard>
    );
}

export default Post;
