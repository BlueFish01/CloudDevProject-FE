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
import { useState } from "react";

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

const initFormValue: EditProfileModel = {
  Name: "Pigeon",
  Surname: "Krisakorn",
  City: "Bangkok, Thailand",
  IG: "",
  Discord: "",
  LinkedIn: "",
  About: "",
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

function EditProfileBT() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initFormValue,
  });

  const [data, setData] = useState<EditProfileModel | null>(null);
  const [api, setApi] = useState(false);

  const onSubmitHandler = (formdata: EditProfileModel) => {
    console.log(formdata);
    setData(formdata);
    setApi(true);
    setTimeout(() => {
      setApi(false);
      const success = true;
      if(success) {
        handleOpen1();
      }else{
        console.error('API call failed');
      }
    }, 500);
    //call Api here
    //fail => show error message
  };

  const handleClick = (newdata: EditProfileModel | null) => {
    // Your click event handler code here
    console.log(data);
    console.log('Button clicked');
    handleClose();
  }
  

  return (
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

          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <Stack sx={{ p: 2 }} spacing={4}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack
                  direction={"column"}
                  spacing={4}
                  flexGrow={1}
                  sx={{ pr: 2 }}
                >
                  <Stack direction={"row"} spacing={4}>
                    <Stack direction={"column"} spacing={1} width={"100%"}>
                      <TextField
                        {...register("Name")}
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
                    </Stack>

                    <Stack direction={"column"} spacing={1} width={"100%"}>
                      <TextField
                        {...register("Surname")}
                        id="outlined-basic"
                        name="Surname"
                        label="Surname"
                        variant="outlined"
                        error={!!errors.Surname}
                        fullWidth
                      />

                      <FormHelperText
                        error={!!errors.Surname}
                        sx={{ fontSize: 14 }}
                      >
                        {errors.Surname?.message}
                      </FormHelperText>
                    </Stack>
                  </Stack>

                  <Stack direction={"column"} spacing={1} width={"100%"}>
                    <TextField
                      {...register("City")}
                      id="outlined-basic"
                      name="City"
                      label="City"
                      variant="outlined"
                      error={!!errors.City}
                      fullWidth
                    />
                    <FormHelperText error={!!errors.City} sx={{ fontSize: 14 }}>
                      {errors.City?.message}
                    </FormHelperText>
                  </Stack>
                </Stack>
                <Stack alignContent={"flex-end"}>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png" />
                </Stack>
              </Stack>

              <Stack direction={"row"} spacing={3}>
                <TextField
                  {...register("IG")}
                  id="outlined-basic"
                  name="IG"
                  label="IG"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  {...register("Discord")}
                  id="outlined-basic"
                  name="Discord"
                  label="Discord"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  {...register("LinkedIn")}
                  id="outlined-basic"
                  name="LinkedIn"
                  label="LinkedIn"
                  variant="outlined"
                  fullWidth
                />
              </Stack>
              <TextField
                {...register("About")}
                id="outlined-multiline-static"
                multiline
                name="About"
                label="About"
                variant="outlined"
                rows={6}
              />
              <Stack flexGrow={1} alignItems={"flex-end"}>
                <Stack direction={"row"} spacing={2}>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="outlined" type="submit">
                    Save
                  </Button>
                  <Modal open={open1} onClose={handleClose1}>
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
                          <Button variant="contained" onClick={handleClick}>
                            Save change
                          </Button>
                          <Button variant="outlined" onClick={handleClose1}>
                            Cancel
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  </Modal>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Modal>
    </Stack>
  );
}

export default EditProfileBT;
