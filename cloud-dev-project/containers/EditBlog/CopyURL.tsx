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
const NotiBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-450px, -250px)",
  width: "900px",
  height: "64px",
  bgcolor: COLORS.SECONDARY,
  border: "2px solid #000",
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
    refreshPage();
  };

  return (
    <Stack>
      <Button onClick={handleCopyClick} variant="contained">SHARE</Button>
      {/* <Stack alignItems={'center'}>
        {copied && <p>URL copied to clipboard!</p>}
      </Stack> */}
      <Modal open={openNoti} onClose={handleCloseNoti}>
        <Box sx={NotiBoxStyle} borderRadius={"10px"}>
          <Typography align="center" fontSize={"20px"} sx={{ p: 2 }}>
            URL was cpied to clipboard
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
};

export default CopyURLButton;
