import { useState } from "react";

interface TodoFormProps {
  handleAddTodo: (
    event: React.FormEvent<HTMLFormElement>,
    todo: string,
    cb: () => void
  ) => void;
}

const TodoForm = ({ handleAddTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState<string>("");

  // Función para limpiar el campo de entrada
  const reset = () => {
    setTodo("");
  };

  // Maneja los cambios en el campo de texto
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={(event) => handleAddTodo(event, todo, reset)}>
      <input
        type="text"
        onChange={handleInputChange}
        value={todo}
        placeholder="Escribe una nueva tarea"
      />
      <button type="submit" disabled={!todo.trim()}>
        Agregar
      </button>
    </form>
  );
};

export default TodoForm
