import * as React from 'react';
import { connect } from 'react-redux';
import { Checkbox, Typography } from '../../../../../lib/atoms';
import type Todo from '../../../../types/Todo';
import { completeTodo, uncompleteTodo } from '../../../../flux/todos/index';

type Props = {
  todo: Todo,
  onComplete: Todo => void,
  onUncomplete: Todo => void
};

export class TodoDetail extends React.Component<Props> {
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { todo, onComplete, onUncomplete } = this.props;
    if (e.target.checked) {
      onComplete(todo);
    } else {
      onUncomplete(todo);
    }
  };

  render = () => {
    const { todo } = this.props;
    return (
      <React.Fragment>
        <Typography variant="display1">
          <Checkbox
            checked={todo.completed}
            onChange={this.handleChange}
            value="completed"
          />
          {todo.title}
        </Typography>
      </React.Fragment>
    );
  };
}

export default connect(null, dispatch => ({
  onComplete: (todo: Todo) => dispatch(completeTodo(todo.id)),
  onUncomplete: (todo: Todo) => dispatch(uncompleteTodo(todo.id))
}))(TodoDetail);
