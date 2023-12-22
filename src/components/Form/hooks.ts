import { useState } from "react";
import { useTodoStore } from "../../store";

export const useFormHooks = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const loading = useTodoStore((state) => state.loading);
  const [todo, setTodo] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (title: string) => {
    if (title) {
      addTodo({ title: title });
      setTodo("");
    }
  };

  return { loading, todo, handleChange, handleAddTodo } as const;
};
