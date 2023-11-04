import { COLORS } from "@/constants";
import {
  Container,
  Button,
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
  Modal,
  TextField,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const style2 = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pb: 5,
};

export default function LeaveButton() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [openLeave, setOpenLeave] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpenLeave = () => setOpenLeave(true);
  const handleCloseLeave = () => setOpenLeave(false);

  const refreshPage = () => {
    const success = true;
    setTimeout(() => {
      if (success) {
        window.location.reload();
      } else {
        console.error("API call failed");
      }
    }, 1500);
  };

  const leave = () => {
    // Your click event handler code here
    console.log("Button clicked");
    handleClose();
    refreshPage();
  };

  return (
    <Stack>
      <Button variant="outlined" onClick={handleOpenLeave}>
        Cancel
      </Button>
      <Modal open={openLeave} onClose={handleClose1}>
        <Box sx={style2} borderRadius={2}>
          <Stack flex={1} alignItems={"center"} sx={{ pt: 10 }}>
            <Stack color={COLORS.PRIMARY_DARK} sx={{ pl: 7, pr: 3 }}>
              <Typography fontSize={20}>Do you want to leave?</Typography>
              <Typography fontSize={20} color={COLORS.DANGER}>
                All your unsaved change will be lost
              </Typography>
            </Stack>
            <Stack sx={{ pt: 10 }} spacing={2}>
              <Button
                variant="contained"
                onClick={leave}
                style={{ backgroundColor: COLORS.DANGER }}
              >
                Leave
              </Button>
              <Button variant="outlined" onClick={handleCloseLeave}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
}
