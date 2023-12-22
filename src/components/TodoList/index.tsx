import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTodoStore } from "../../store";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <Grid container width={750} margin="0 auto" mt={5}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="65%">Title</TableCell>
              <TableCell>Done?</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default TodoList;
