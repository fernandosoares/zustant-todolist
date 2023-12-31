import {
  CheckCircleRounded,
  DeleteOutlineRounded,
  DoneOutlineRounded,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { Button, TableCell, TableRow } from "@mui/material";

import { Todo } from "../../types";
import { useTodoItemHooks } from "./hooks";

const TodoItem = (todo: Todo) => {
  const { handleComplete, handleDelete } = useTodoItemHooks();

  return (
    <TableRow>
      <TableCell
        sx={
          todo.done ? { textDecoration: "line-through", color: "#C0C0C0" } : {}
        }
      >
        {todo.title}
      </TableCell>
      <TableCell align="center">
        {todo.done ? (
          <CheckCircleRounded
            color={todo.done === true ? "success" : "action"}
          />
        ) : (
          <RemoveCircleOutline color="error" />
        )}
      </TableCell>
      <TableCell align="right">
        <Button onClick={() => handleComplete(todo.id!, !todo.done)}>
          <DoneOutlineRounded
            color={todo.done === true ? "action" : "success"}
          />
        </Button>
        <Button onClick={() => handleDelete(todo.id!)}>
          <DeleteOutlineRounded color="error" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
