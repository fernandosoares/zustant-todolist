import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormHooks } from "./hooks";

const Form = () => {
  const { loading, todo, handleChange, handleAddTodo } = useFormHooks();
  return (
    <Grid
      container
      width={450}
      margin="0 auto"
      flex={1}
      flexDirection="column"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography variant="h4" mb={2}>
          Todo List App w/ Zustand
        </Typography>
      </Grid>
      <Grid item xs={12} flex={1} flexDirection="column">
        <TextField
          fullWidth
          label="Todo Title"
          variant="outlined"
          name="todo"
          value={todo}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => handleAddTodo(todo)}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Add Todo"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
