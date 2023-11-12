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
import Alert from "@/components/Alert/alert"; 

const DeleteBlogButton: React.FC = () => {
  const [openNoti, setOpenNoti] = useState(false);
  const router = useRouter();

  const leave = () => {
    setOpenNoti(true);
    setTimeout(() => {
      setOpenNoti(false);
      router.replace(PATH.HOME);
    }, 1000);
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
      <Alert
        message={"Blog deleted"}
        type={"error"}
        open={openNoti}
        handleClose={()=>{setOpenNoti(false)}}
      />
    </Stack>
  );
};

export default DeleteBlogButton;
