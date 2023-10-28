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

const schema = yup.object().shape({
  Name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]*$/, "MUST_BE_CHARACTER")
    .required("Required!"),
  Surname: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z ]*$/, "MUST_BE_CHARACTER")
    .required("Required!"),
  City: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z | ,]*$/, "MUST_BE_CHARACTER")
    .required("Required!"),
  IG: yup.string(),
  Discord: yup.string(),
  LinkedIn: yup.string(),
  About: yup.string(),
});

function ConfirmEditProfile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    //defaultValues:initFormValue,
  });
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
          <Stack flex={1} alignItems={"center"} sx={{ pt: 10 }}>
            <Typography
              fontSize={20}
              color={COLORS.PRIMARY_DARK}
              sx={{ pl: 7, pr: 3 }}
            >
              Do you want to save the change?
            </Typography>
            <Stack sx={{ pt: 10 }} spacing={2}>
              <Button variant="contained" onClick={handleClose}>
                Save change
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
}

export default ConfirmEditProfile;
