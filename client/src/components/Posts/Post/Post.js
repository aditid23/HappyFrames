import React from 'react';
import { StyledCard, StyledMedia, Overlay, Overlay2, Details, Title, StyledCardActions } from './styles';  
import moment from 'moment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CardContent, Typography, Button } from '@mui/material';

const Post = ({ post }) => {
    const { selectedFile, title, creator, createdAt, tags, message, likeCount } = post || {};

    return (
        <StyledCard>
            <StyledMedia image={selectedFile} title={title} />
            <Overlay>
                <Typography variant='h6'>{creator}</Typography>
                <Typography variant='body2'>{moment(createdAt).isValid() ? moment(createdAt).fromNow() : 'Invalid date'}</Typography>
            </Overlay>
            <Overlay2>
                <Button style={{ color: 'white' }} size="small" onClick={() => { /* Handle menu click */ }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </Overlay2>
            <Details>
                <Typography variant='body2' color="textSecondary">
                    {tags?.map((tag) => `#${tag} `)}
                </Typography>
            </Details>
            <CardContent>
                <Title variant='h5' gutterBottom>{message}</Title>
            </CardContent>
            <StyledCardActions>
                <Button size="small" color="primary" onClick={() => { /* Handle like functionality */ }}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like {likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { /* Handle delete functionality */ }}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </StyledCardActions>
        </StyledCard>
    );
}

export default Post;
