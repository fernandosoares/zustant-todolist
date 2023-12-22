import { useTodoStore } from "../../store";

export const useTodoItemHooks = () => {
  const { completeTodo, removeTodo } = useTodoStore((state) => state);

  const handleComplete = (id: string, status: boolean) => {
    completeTodo(id, status);
  };

  const handleDelete = (id: string) => {
    removeTodo(id);
  };

  return { handleComplete, handleDelete } as const;
};
