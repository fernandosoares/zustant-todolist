export type Todo = {
  id?: string;
  title: string;
  done?: boolean;
  createAt?: Date;
  updatedAt?: Date;
};

export type TodoStore = {
  loading: boolean;
  todos: Todo[];
  getTodos: () => void;
  addTodo: (todo: Todo) => void;
  completeTodo: (id: string, status: boolean) => void;
  removeTodo: (id: string) => void;
};
