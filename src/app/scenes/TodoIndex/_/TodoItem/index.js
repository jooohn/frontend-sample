// @flow
import * as React from 'react';
import { Checkbox, ListItem } from '../../../../../lib/atoms';
import type Todo from '../../../../types/Todo';
import { Link } from 'react-router-dom';

type Props = {
  todo: Todo
};
const TodoItem = ({ todo }: Props) => (
  <ListItem button component={Link} to={`/todos/${todo.id}`}>
    <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
    {todo.title}
  </ListItem>
);
export default TodoItem;
