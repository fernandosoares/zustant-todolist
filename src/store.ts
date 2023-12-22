import { create } from "zustand";

export type Todo = {
  id?: string;
  title: string;
  done?: boolean;
  createAt?: Date;
  updatedAt?: Date;
};

type TodoStore = {
  loading: boolean;
  todos: Todo[];
  getTodos: () => void;
  addTodo: (todo: Todo) => void;
  completeTodo: (id: string, status: boolean) => void;
  removeTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStore>((set) => {
  return {
    loading: false,
    todos: [],
    getTodos: () => {
      set({ loading: true });
      fetch(import.meta.env.VITE_API_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (response) => {
          const todos = await response.json();
          set({ todos: todos });
        })
        .catch((err) => {
          console.log("Erro: ", err);
        })
        .finally(() => {
          set({ loading: false });
        });
    },

    addTodo: (todo) => {
      set({ loading: true });
      fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            set((state) => ({ todos: [...state.todos, data] }));
          } else {
            console.error(response.statusText);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          set({ loading: false });
        });
    },

    completeTodo: (id, status) => {
      set({ loading: true });
      const body = JSON.stringify({ done: status }, null, 2);
      console.log(body);
      fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "PATCH",
        body: body,
      })
        .then(async (response) => {
          await response.json();
          useTodoStore.getState().getTodos();
        })
        .finally(() => {
          set({ loading: false });
        });
    },

    removeTodo: (id) => {
      fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE",
      }).then(async (response) => {
        await response.json();
        useTodoStore.getState().getTodos();
      });
    },
  };
});
