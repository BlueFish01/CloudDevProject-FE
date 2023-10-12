"use client";
import { COLORS, PATH } from "@/constants";
import { Form, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
import React from "react";
import { useRouter } from "next/navigation";
import { EditProfileModel } from "@/models/EditProfile";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

function ConfirmEditProfile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();

  const onSubmitHandler = (data: EditProfileModel) => {
    console.log(data);
    //call Api here
    //success => redirect to home page
    //fail => show error message
    router.push(PATH.PROFILE);
  };
  return (
    <Stack>
      <Button variant="contained" onClick={handleOpen}>
        Save
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} borderRadius={2}>
          <Typography>Do you want to save the change?</Typography>
          <Button variant="contained">Save change</Button>
          <Button variant="outlined">Cancel</Button>
        </Box>
      </Modal>
    </Stack>
  );
}

export default ConfirmEditProfile;