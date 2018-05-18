import reducer, { addTodo } from './index';

it(`has default Todo`, () => {
  const reduced = reducer(undefined, {});
  expect(reduced.list.length).toBe(1);
});
it(`adds Todo`, () => {
  const reduced = reducer(undefined, addTodo({ title: 'Check it' }));
  expect(reduced.list.length).toBe(2);
});
