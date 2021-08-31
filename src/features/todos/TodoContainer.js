import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function TodoContainer() {
  const todos = useSelector((state) => state.todos.entities);

  const todoArr = todos.map((todo, index) => <Todo key={index} text={todo} />);
  return <ul>{todoArr}</ul>;
}

export default TodoContainer;
