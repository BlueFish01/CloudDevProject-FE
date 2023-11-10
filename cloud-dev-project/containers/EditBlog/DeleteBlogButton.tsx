import React, { useState } from "react";
import copy from "clipboard-copy";
import { COLORS, PATH } from "@/constants";
import {
  Container,
  Button,
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
  Modal,
} from "@mui/material";
import { useRouter } from "next/navigation";

const NotiBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-450px, -250px)",
  width: "900px",
  height: "64px",
  bgcolor: COLORS.DANGER,
  border: "2px solid #000",
  boxShadow: 24,
  pl: 5,
};

const DeleteBlogButton: React.FC = () => {
  const [openNoti, setOpenNoti] = useState(false);
  const [openLeave, setOpenLeave] = useState(false);
  const handleOpenNoti = () => setOpenNoti(true);
  const handleCloseNoti = () => setOpenNoti(false);
  const handleOpenLeave = () => setOpenLeave(true);
  const handleCloseLeave = () => setOpenLeave(false);
  const router = useRouter();

  const leave = () => {
    // Your click event handler code here
    console.log("Button clicked");
    handleCloseLeave();
    handleOpenNoti();
    setTimeout(() => {
      router.push(PATH.HOME);
    }, 1500);
  };

  return (
    <Stack>
      <Button
        onClick={leave}
        variant="contained"
        style={{ backgroundColor: COLORS.DANGER }}
      >
        Delete
      </Button>
      <Modal open={openNoti} onClose={handleCloseNoti}>
        <Box sx={NotiBoxStyle} borderRadius={"10px"}>
          <Typography
            align="center"
            fontSize={"20px"}
            sx={{ p: 2 }}
            color={COLORS.WHITE}
          >
            This blog is deleted.
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
};

export default DeleteBlogButton;
