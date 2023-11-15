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
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import { EditProfileModel } from "@/models/Profile";
import ValidateForm from "@/src/app/profile/page";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1150px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

function EditProfileBT() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack alignItems={'flex-end'}>
      <Button variant="outlined" onClick={handleOpen}>
        Edit Profile
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style} borderRadius={2}>
          <Stack bgcolor={COLORS.PRIMARY} borderRadius={1}>
            <Typography color={COLORS.WHITE} sx={{ p: 2 }}>
              Edit Profile
            </Typography>
          </Stack>
          <ValidateForm />
        </Box>
      </Modal>
    </Stack>
  );
}

export default EditProfileBT;
