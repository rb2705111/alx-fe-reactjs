// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  expect(screen.getByText(/build a todo app/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const button = screen.getByText(/add todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText(/new todo/i)).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText(/learn react/i);
  expect(todo).not.toHaveStyle('text-decoration: line-through');

  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
});