import React, { useState, useEffect } from 'react';
import { TextField, Typography, Button, Box } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { StyledPaper, StyledForm, FileInput, SubmitButton } from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (currentId){
            dispatch(updatePost(currentId, postData));
        }
        else{
        dispatch(createPost(postData));
        }
        clear();
    };

    const clear = (event) => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };

    return (
        <StyledPaper>
            <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <Box sx={{ width: "100%" }}>
                    <TextField
                        name="creator"
                        variant="outlined"
                        label="Creator"
                        fullWidth
                        value={postData.creator}
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        fullWidth
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <TextField
                        name="message"
                        variant="outlined"
                        label="Message"
                        fullWidth
                        multiline
                        rows={4}
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <TextField
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    />
                </Box>
                <FileInput>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </FileInput>
                <SubmitButton variant="contained" color="primary" size="large" type="submit">
                    Submit
                </SubmitButton>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
            </StyledForm>
        </StyledPaper>
    );
};

export default Form;