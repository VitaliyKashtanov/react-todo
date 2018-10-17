import React from 'react';
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';


function Header({ todos }) {

  return(
    <AppBar position="static" color="secondary">
      <Grid container justify="center">
        <Grid item xs={12} sm={3}>
          <Stats todos={todos} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1>Todo List</h1>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stopwatch />
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Header;