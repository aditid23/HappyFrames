import React from "react";
import { Container, Grow, Grid } from "@mui/material";
import { StyledAppBar, StyledHeading, StyledImage } from "./styles";

import klh from "./images/klh.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
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
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
