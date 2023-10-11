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
  width: "1150px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const schema = yup.object().shape({
  Name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

function EditProfileBT() {
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
  });

  const onSubmitHandler = (data: EditProfileModel) => {
    console.log(data);
    //call Api here
    //success => redirect to home page
    //fail => show error message
    router.push(PATH.PROFILE);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Stack flexGrow={1} alignItems={"flex-end"} sx={{ pr: 2, pb: 2, pt: 5 }}>
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
            <Stack sx={{ p: 2 }} spacing={4}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack
                  direction={"column"}
                  spacing={4}
                  flexGrow={1}
                  sx={{ pr: 2 }}
                >
                  <Stack direction={"row"} spacing={4}>
                    <TextField
                      id="outlined-basic"
                      name="Name"
                      label="Name"
                      variant="outlined"
                      error={!!errors.Name}
                      fullWidth
                    />

                    <FormHelperText
                      error={!!errors.Name}
                      sx={{ fontSize: 14 }}
                    >
                      {errors.Name?.message}
                    </FormHelperText>

                    <TextField
                      {...register("Name")}
                      id="outlined-basic"
                      label="Surname"
                      variant="outlined"
                      fullWidth
                    />
                  </Stack>

                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    fullWidth
                  />
                </Stack>
                <Stack alignContent={"flex-end"}>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png" />
                </Stack>
              </Stack>

              <Stack direction={"row"} spacing={3}>
                <TextField
                  id="outlined-basic"
                  label="IG"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Discord"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="LinkedIn"
                  variant="outlined"
                  fullWidth
                />
              </Stack>
              <TextField
                id="outlined-multiline-static"
                multiline
                label="About"
                variant="outlined"
                rows={6}
              />
              <Stack flexGrow={1} alignItems={"flex-end"}>
                <Stack direction={"row"} spacing={2}>
                  <Button variant="outlined">Cancel</Button>
                  <Button variant="contained" type="submit">Save</Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </Stack>
    </form>
  );
}

export default EditProfileBT;
