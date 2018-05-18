// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { getTodo } from '../../flux/todos/index';
import TodoDetail from './_/TodoDetail';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '../../../lib/atoms';
import type Todo, { TodoId } from '../../types/Todo';

const subTasks = [
  {
    title: 'Xxx1',
    completed: false,
    subTasks: [
      { title: 'Yyy-1', completed: false },
      { title: 'Zzz-1', completed: false }
    ]
  },
  {
    title: 'Xxx2',
    completed: false,
    subTasks: [
      { title: 'Yyy-2', completed: false },
      { title: 'Zzz-2', completed: false }
    ]
  }
];

type Props = {
  todo: ?Todo,
  match: {
    params: {
      todoId: TodoId
    }
  }
};

const Fallback = () => <div>Not found</div>;

const TodoShow = ({ todo }: Props) =>
  todo == null ? (
    <Fallback />
  ) : (
    <div>
      <TodoDetail todo={todo} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tittle</TableCell>
            <TableCell>sub-title</TableCell>
            <TableCell>completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subTasks.map((subTask, index) => (
            <React.Fragment key={index}>
              <TableRow rowSpan={subTask.subTasks.length}>
                <TableCell rowSpan={2}>{subTask.title}</TableCell>
                <TableCell>
                  {subTask.subTasks[0] && subTask.subTasks[0].title}
                </TableCell>
                <TableCell>
                  {subTask.subTasks[0] && subTask.subTasks[0].completed}
                </TableCell>
              </TableRow>
              {subTasks.slice(1).map((subTask, j) => (
                <TableRow key={j}>
                  <TableCell>
                    {subTask.subTasks[0] && subTask.subTasks[0].title}
                  </TableCell>
                  <TableCell>
                    {subTask.subTasks[0] && subTask.subTasks[0].completed}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );

export default connect((state, props) => ({
  todo: getTodo(props.match.params.todoId)(state.todos)
}))(TodoShow);
