// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../../../../flux/todos/index';
import { Collapse, List } from '../../../../../lib/atoms';
import TodoItem from '../TodoItem';
import { TransitionGroup } from 'react-transition-group';
import type Todo from '../../../../types/Todo';

type Props = {
  todos: Array<Todo>
};
const TodoList = ({ todos }: Props) => (
  <List component="nav">
    <TransitionGroup>
      {todos.map(todo => (
        <Collapse key={todo.id} timeout={300}>
          <TodoItem todo={todo} />
        </Collapse>
      ))}
    </TransitionGroup>
  </List>
);
export default connect(state => ({ todos: getTodos(state.todos) }))(TodoList);
