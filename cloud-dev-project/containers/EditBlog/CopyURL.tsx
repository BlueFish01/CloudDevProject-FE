import React, { useState } from "react";
import copy from "clipboard-copy";
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
} from "@mui/material";
import Alert from "@/components/Alert/alert";

const NotiBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-450px, -250px)",
  width: "900px",
  height: "64px",
  bgcolor: COLORS.SECONDARY,
  border: "2px solid",
  borderColor: COLORS.WHITE,
  boxShadow: 24,
  pl: 5,
};

const CopyURLButton: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);
  const handleOpenNoti = () => setOpenNoti(true);
  const handleCloseNoti = () => setOpenNoti(false);

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

  const handleCopyClick = () => {
    handleOpenNoti();
    copy(window.location.href)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy URL:", error);
      });
    setTimeout(() => {
      handleCloseNoti();
    }, 1000);
  };

  return (
    <Stack>
      <Button onClick={handleCopyClick} variant="contained">SHARE</Button>
      <Alert
        message={"Copied to clipboard"}
        type={"success"}
        open={openNoti}
        handleClose={handleCloseNoti}/>
    </Stack>
  );
};

export default CopyURLButton;