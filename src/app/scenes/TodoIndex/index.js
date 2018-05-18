// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import AddTodo from './_/AddTodo';
import TodoList from './_/TodoList';
import { hasTodo } from '../../flux/todos/index';
import { Fade, Paper } from '../../../lib/atoms';
import { withStyles } from '@material-ui/core';

type Props = {
  hasTodo: boolean,
  classes: {
    addTodo: any
  }
};
const TodoIndex = ({ hasTodo, classes }: Props) => (
  <React.Fragment>
    <div className={classes.addTodo}>
      <AddTodo />
    </div>
    <Fade in={hasTodo}>
      <Paper>
        <TodoList />
      </Paper>
    </Fade>
  </React.Fragment>
);

const styles = theme => ({
  addTodo: {
    marginBottom: theme.spacing.unit * 3
  }
});
export default connect(state => ({ hasTodo: hasTodo(state.todos) }))(
  withStyles(styles)(TodoIndex)
);
