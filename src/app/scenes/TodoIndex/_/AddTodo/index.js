// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { TextField } from '../../../../../lib/atoms';
import { addTodo } from '../../../../flux/todos/index';
import type { Dispatch } from 'redux';

export type TodoSeed = {
  title: string
};
type Props = {
  onSubmit: TodoSeed => void
};
type State = {
  title: string
};
class AdditionForm extends React.Component<Props, State> {
  state = {
    title: 'Say hi to my boss'
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title } = this.state;
    this.props.onSubmit({ title });
    this.setState({ title: '' });
  };

  render = () => {
    const { title } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          name="title"
          label="TodoTitle"
          value={title}
          onChange={this.handleChange}
          autoFocus
          fullWidth
        />
      </form>
    );
  };
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  onSubmit: ({ title }) => dispatch(addTodo({ title }))
});
export default connect(null, mapDispatchToProps)(AdditionForm);
