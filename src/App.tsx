import { useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useTodoStore } from "./store";
import LoadingOverlay from "./components/Modal";

const App = () => {
  const getTodos = useTodoStore((state) => state.getTodos);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <>
      <Form />
      <TodoList />
      <LoadingOverlay />
    </>
  );
};

export default App;
