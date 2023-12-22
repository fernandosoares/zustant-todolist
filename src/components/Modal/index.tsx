import { Modal } from "@mui/material";
import { useTodoStore } from "../../store";

const LoadingOverlay = () => {
  const loading = useTodoStore((state) => state.loading);
  return (
    <Modal open={loading}>
      <></>
    </Modal>
  );
};

export default LoadingOverlay;
