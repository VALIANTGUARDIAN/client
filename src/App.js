import React from "react";
import { container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import chat from './images/chat.jpg'
import useStyles from './styles';

const App = ()=> {
  const classes = useStyles();
  return (
    <container maxidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Xenon-Chat</Typography>
        <img className={classes.image} src={chat} alt="xenon-chat" height="60"/>
      </AppBar>
      <Grow in>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing="">
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </container>
  );
}

export default App;