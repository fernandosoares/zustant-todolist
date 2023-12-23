import { create } from "zustand";
import { api } from "./services/api";
import { TodoStore } from "./types";

export const useTodoStore = create<TodoStore>()((set) => ({
  loading: false,
  todos: [],
  getTodos: () => {
    api
      .get("/todos")
      .then((res) => set({ todos: res.data }))
      .catch((err) => console.error(err));
  },
  addTodo: (todo) => {
    api
      .post("/todos", todo)
      .then((res) => set((state) => ({ todos: [...state.todos, res.data] })))
      .catch((err) => console.error(err));
  },
  completeTodo: (id, status) => {
    api
      .patch(`/todos/${id}`, { done: status })
      .then(() => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          ),
        }));
      })
      .catch((err) => console.error(err));
  },
  removeTodo: (id) => {
    api
      .delete(`todos/${id}`)
      .then(() => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      })
      .catch((err) => console.error(err));
  },
}));
