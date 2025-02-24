import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { StyledAppBar, StyledHeading, StyledImage } from "./styles";

import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts';
import klh from "./images/klh.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static">
        <StyledHeading variant="h2" align="center">
          Happy Frames
        </StyledHeading>
        <StyledImage src={klh} alt="memories" />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId ={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
