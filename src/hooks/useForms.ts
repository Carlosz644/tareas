import React, { useState } from 'react/';
import { Todo } from '../types';

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Función para agregar una tarea
  const handleAddTodo = (
    event: React.FormEvent<HTMLFormElement>,
    todo: string,
    cb: () => void
  ) => {
    event.preventDefault();

    const newTodo: Todo = { id: Math.random(), todo: todo.trim() };

    if (!newTodo.todo.trim()) {
      alert("Ingrese una tarea válida");
      return;
    }

    setTodos((prevState) => [...prevState, newTodo]);

    cb(); // Limpiar el campo de entrada
  };

  // Función para eliminar una tarea
  const handleDeleteTodo = (todoId: number) => {
    const filteredTodos: Todo[] = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  return { todos, handleAddTodo, handleDeleteTodo };
};

export default useTodo;
