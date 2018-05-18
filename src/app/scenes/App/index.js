import * as React from 'react';
import { Route } from 'react-router-dom';
import TodoIndex from '../TodoIndex';
import TodoShow from '../TodoShow';
import Header from './_/Header';
import { Drawer, Grid } from '../../../lib/atoms';
import { withStyles } from '@material-ui/core';

const App = ({ classes }) => (
  <React.Fragment>
    <Header />
    <main className={classes.main}>
      <Route exact path="/" component={TodoIndex} />
      <Route exact path="/todos/:todoId" component={TodoShow} />
    </main>
  </React.Fragment>
);

const styles = theme => ({
  main: {
    margin: theme.spacing.unit * 3,
    flexGrow: 1
  }
});
export default withStyles(styles)(App);
