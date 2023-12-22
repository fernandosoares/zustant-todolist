import { useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useTodoStore } from "./store";

const App = () => {
  const getTodos = useTodoStore((state) => state.getTodos);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <>
      <Form />
      <TodoList />
    </>
  );
};

export default App;
