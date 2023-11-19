import React from "react";
import { 
    Box, 
    Typography,
    Modal,
} from "@mui/material";
import { COLORS } from "@/constants";

type TAlertProps = {
  message: string;
  type: "success" | "error";
  open : boolean; 
  handleClose : () => void;   
};

const styles = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-450px, -32px)",
  width: "900px",
  height: "64px",
  border: "2px solid",
  borderColor: COLORS.WHITE,
  boxShadow: 24,
  pl: 5,
}

function Alert({ 
    message, 
    type,
    open,
    handleClose, 
}: TAlertProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles} borderRadius={'10px'} bgcolor={(type === 'error') ? COLORS.DANGER : COLORS.SECONDARY}>
        <Typography
          color={COLORS.WHITE}
          align="center"
          fontSize={"20px"}
          sx={{ p: 2 }}
        >
          {message}
        </Typography>
      </Box>
    </Modal>
  );
}

export default Alert;
