import { useTodoStore } from "../../store";

export const useTodoItemHooks = () => {
  const completeTodo = useTodoStore((state) => state.completeTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const handleComplete = (id: string, status: boolean) => {
    completeTodo(id, status);
  };

  const handleDelete = (id: string) => {
    removeTodo(id);
  };

  return { handleComplete, handleDelete } as const;
};
