import { useEffect, useState } from "react";
import { useTodoStore } from "./store";

const App = () => {
  const { loading, todos, getTodos, addTodo, completeTodo, removeTodo } =
    useTodoStore((state) => state);
  const [todo, setTodo] = useState<string>("");

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    if (todo) {
      addTodo({ title: todo });
      setTodo("");
    }
  };

  return (
    <>
      <div>
        <input type="text" value={todo} onChange={handleChange} />
        <button onClick={handleClick} disabled={loading}>
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div style={todo.done ? { textDecoration: "line-through" } : {}}>
              {todo.title}
            </div>
            <button onClick={() => removeTodo(todo.id!)}>Delete</button>{" "}
            <button onClick={() => completeTodo(todo.id!, !todo.done)}>
              {todo.done ? "Uncomplete" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
