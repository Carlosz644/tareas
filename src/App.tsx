import { useState } from "react";
import { Todo } from "./types";
import TodoForm from './components/TodoForm'


const App = () => {
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

  return (
    <>
      <h1>Lista de Tareas</h1>
      <TodoForm handleAddTodo={handleAddTodo} />
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.todo}{" "}
              <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No hay tareas</h2>
      )}
    </>
  );
};

export default App;
