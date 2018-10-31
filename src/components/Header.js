import React from 'react';
import PropTypes from 'prop-types';

import TodoStatistics from './TodoStatistics';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

function Header({ todos }) {

  return(
    <AppBar position="static" color="secondary">
      <Grid container justify="center">
        <Grid item xs={12} sm={3}>
          <TodoStatistics todos={todos} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1>Todo List</h1>
        </Grid>
        <Grid item xs={12} sm={3}>
        </Grid>
      </Grid>
    </AppBar>
  );
}

Header.propTypes = {
  todos: PropTypes.array
}

export default Header;