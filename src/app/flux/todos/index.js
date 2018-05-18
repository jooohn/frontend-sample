// @flow
import { handleActions } from 'redux-actions';
import type Todo, { TodoId } from '../../types/Todo';

// Actions
const ADD = 'TODO_ADD';
type AddAction = { type: 'TODO_ADD', payload: { title: string } };
export const addTodo = ({ title }: { title: string }): AddAction => ({
  type: ADD,
  payload: { title }
});

const COMPLETE = 'TODO_COMPLETE';
type CompleteAction = { type: 'TODO_COMPLETE', payload: { id: TodoId } };
export const completeTodo = (id: TodoId): CompleteAction => ({
  type: COMPLETE,
  payload: { id }
});

const UNCOMPLETE = 'TODO_UNCOMPLETE';
type UncompleteAction = { type: 'TODO_UNCOMPLETE', payload: { id: TodoId } };
export const uncompleteTodo = (id: TodoId): UncompleteAction => ({
  type: UNCOMPLETE,
  payload: { id }
});

let nextId: TodoId = 1;
const getNextId = (): TodoId => {
  const next = nextId;
  nextId++;
  return next;
};

const defaultTodo: Todo = {
  id: getNextId(),
  title: 'Buy something awesome',
  completed: false
};

// Reducers
type State = {
  todoById: { [TodoId]: Todo },
  list: Array<TodoId>
};
export default handleActions(
  {
    [ADD]: (state: State, action: AddAction): State => {
      const id = getNextId();
      return {
        ...state,
        todoById: {
          ...state.todoById,
          [id]: {
            id: id,
            title: action.payload.title,
            completed: false
          }
        },
        list: [id, ...state.list]
      };
    },
    [COMPLETE]: (state: State, action: CompleteAction): State => ({
      ...state,
      todoById: {
        ...state.todoById,
        [action.payload.id]: {
          ...state.todoById[action.payload.id],
          completed: true
        }
      }
    }),
    [UNCOMPLETE]: (state: State, action: UncompleteAction): State => ({
      ...state,
      todoById: {
        ...state.todoById,
        [action.payload.id]: {
          ...state.todoById[action.payload.id],
          completed: false
        }
      }
    })
  },
  { todoById: { [defaultTodo.id]: defaultTodo }, list: [defaultTodo.id] }
);

// Selectors
export const hasTodo = (state: State): boolean => state.list.length > 0;
export const getTodos = (state: State): Array<Todo> =>
  state.list.map(id => state.todoById[id]);
export const getTodo = (id: TodoId) => (state: State): ?Todo =>
  state.todoById[id];
