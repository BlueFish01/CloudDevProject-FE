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
  TextField,
  FormHelperText,
} from "@mui/material";
import React from "react";
import * as yup from "yup";
import { EditProfileModel } from "@/models";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckIcon from "@mui/icons-material/Check";

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

const style2 = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pb: 5,
};

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-300px, -250px)",
  width: "600px",
  height: "50px",
  bgcolor: COLORS.PRIMARY,
  border: "2px solid #000",
  boxShadow: 24,
  pl: 5,
};

function ValidateForm() {

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  

  const [data, setData] = useState<EditProfileModel | null>(null);
  const [api, setApi] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initFormValue,
  });

  const onSubmitHandler = (formdata: EditProfileModel) => {
    console.log(formdata);
    setData(formdata);
    setApi(true);
    setTimeout(() => {
      setApi(false);
      const success = true;
      if (success) {
        handleOpen1();
      } else {
        console.error("API call failed");
      }
    }, 500);
    //call Api here
    //success => redirect to home page
    //fail => show error message
  };

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

  const successfully = () => {
    // Your click event handler code here
    console.log(data);
    console.log("Button clicked");
    handleOpen2();
    refreshPage();
  };

  const leave = () => {
    // Your click event handler code here
    console.log("Button clicked");
    handleClose();
    refreshPage();
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Stack sx={{ p: 2 }} spacing={4}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"column"} spacing={4} flexGrow={1} sx={{ pr: 2 }}>
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

                <FormHelperText error={!!errors.Name} sx={{ fontSize: 14 }}>
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

                <FormHelperText error={!!errors.Surname} sx={{ fontSize: 14 }}>
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
            <Button variant="outlined" onClick={handleOpen3}>
              Cancel
            </Button>
            <Button variant="outlined" type="submit">
              Save
            </Button>
            <Modal open={open1} onClose={handleClose1}>
              <Box sx={style2} borderRadius={2}>
                <Stack flex={1} alignItems={"center"} sx={{ pt: 10 }}>
                  <Typography
                    fontSize={20}
                    color={COLORS.PRIMARY_DARK}
                    sx={{ pl: 7, pr: 3 }}
                  >
                    Do you want to save the change?
                  </Typography>
                  <Stack sx={{ pt: 10 }} spacing={2}>
                    <Button variant="contained" onClick={successfully}>
                      Save change
                    </Button>
                    <Modal open={open2} onClose={handleClose2}>
                      <Box sx={styleModal} borderRadius={2}>
                        <Stack direction={"row"} sx={{ pt: 1 }} spacing={4}>
                          <CheckIcon />
                          <Typography>
                            Your profile has been successfully updated!
                          </Typography>
                          {/* <ClearIcon onClick={handleClose} /> */}
                        </Stack>
                      </Box>
                    </Modal>
                    <Button variant="outlined" onClick={handleClose1}>
                      Cancel
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Modal>
            <Modal open={open3} onClose={handleClose1}>
              <Box sx={style2} borderRadius={2}>
                <Stack flex={1} alignItems={"center"} sx={{ pt: 10 }}>
                  <Stack color={COLORS.PRIMARY_DARK} sx={{ pl: 7, pr: 3 }}>
                    <Typography fontSize={20}>Do you want to leave?</Typography>
                    <Typography fontSize={20} color={COLORS.DANGER}>
                      All your unsaved change will be lost
                    </Typography>
                  </Stack>
                  <Stack sx={{ pt: 10 }} spacing={2}>
                    <Button
                      variant="contained"
                      onClick={leave}
                      style={{ backgroundColor: COLORS.DANGER }}
                    >
                      Leave
                    </Button>
                    <Button variant="outlined" onClick={handleClose3}>
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
  );
}

export default ValidateForm;