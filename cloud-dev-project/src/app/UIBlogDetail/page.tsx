"use client";
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
import Image from "next/image";
import { useState } from "react";
import EditBlogWindow from "@/containers/EditBlog/EditBlogWindow";
import copy from "clipboard-copy";
import CopyURLButton from "@/containers/EditBlog/CopyURL";

export default function EditBlog() {
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

  return (
    <Stack spacing={2}>
      <CopyURLButton />
      <EditBlogWindow />
      <Button
        variant="outlined"
        style={{ color: COLORS.DANGER, borderColor: COLORS.DANGER }}
      >
        Delete
      </Button>
    </Stack>
  );
}
