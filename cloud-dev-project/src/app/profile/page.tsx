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
import { EditProfileModel, getProfileModel } from "@/models";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import LeaveButton from "@/containers/EditProfile/LeaveButton";
import { useQuery } from "@tanstack/react-query";
import getProfile from "@/apiCaller/getProfile";
import { AxiosRequestConfig } from "axios";
import axios from "axios";

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

type TValidFormProps = {
  initdata: getProfileModel | null | undefined;
};

function ValidateForm({ initdata }: TValidFormProps) {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [data, setData] = useState<EditProfileModel | null>(null);
  const [api, setApi] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      // Name : `${initdata?.userFname} ${initdata?.userLname}`,
      Name: initdata?.userFName,
      Surname: initdata?.userLName,
      City: initdata?.userAddress,
      // IG: Array.isArray(initdata?.userSocial) ? initdata?.userSocial.join(', ') : initdata?.userSocial,
      IG: Array.isArray(initdata?.userSocial)
        ? initdata?.userSocial[0]
        : initdata?.userSocial,
      Discord: Array.isArray(initdata?.userSocial)
        ? initdata?.userSocial[1]
        : initdata?.userSocial,
      About: initdata?.userAbout,
    },
  });

  function convertFormDataToEditProfile(formData: FormData): EditProfileModel {
    const userFName = formData.get('userFName') as string;
    const userLName = formData.get('userLName') as string;
    const userAddress = formData.get('userAddress') as string;
    const userSocial = (formData.get('userSocial') as string).split(','); // Assuming userSocial is comma-separated
    const userAbout = formData.get('userAbout') as string;
  
    return {
      userFName,
      userLName,
      userAddress,
      userSocial,
      userAbout,
    };
  }
  
  const onSubmitHandler = async (formdata: EditProfileModel) => {
    // const authToken = await fetch("http://localhost:3000/api/auth");
    // const token = await authToken.json();
    // const Bearertoken = "Bearer " + token.value;
    // try {
    //   // Make a POST request to the API endpoint with the updated data
    //   const response = await fetch(
    //     " http://devlog-res-test-env.eba-mjqi25dd.us-east-1.elasticbeanstalk.com/api/user/edit-profile",
    //     {
    //       method: "PUT",
    //       headers: {
    //         'Authorization': Bearertoken,
    //         "Content-Type": "application/json",
    //         // Add any necessary authorization headers here
    //       },
    //       body: JSON.stringify(formdata), // Convert formdata to JSON string
    //     }
    //   );

    //   if (!response.ok) {
    //     console.log("Fetch data success")

    //     throw new Error("Failed to update profile");
    //   }

    //   // If the update was successful
    //   const responseData = await response.json();
    //   console.log("Profile updated:", responseData);

    //   // Handle success - open modal or show success message
    //   handleOpen1(); // Open success modal or show success message
    //   // refreshPage(); // Refresh the page or perform other actions
    // } catch (error) {
    //   console.log("Fetch data failed")
    //   console.error("Error updating profile:", error);
    //   // Handle error - show error message or perform necessary actions
    // }
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/user/edit-profile";
    const authToken = await fetch("http://localhost:3000/api/auth");
    const token = await authToken.json();
    const Bearertoken = "Bearer " + token.value;

    formdata.append("userFName", "John");
    formdata.append("userLName", "Doe");
    formdata.append("userAddress", "123 Main St");
    formdata.append("userSocial", "instagram,twitter"); // Example for multiple socials separated by comma
    formdata.append("userAbout", "This is a test description.");


    const config: AxiosRequestConfig = {
      method: "post",
      url: url,
      maxBodyLength: Infinity,
      headers: {
        Authorization: Bearertoken,
      },
      data: formdata,
    };

    try {
      const response = await axios(config);
      //const response = {data:{formData}}
      return response.data;
    } catch (error) {
      throw error;
    }
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
            <Image
              src="/UIProfile.png"
              width={200}
              height={200}
              alt="Profile Picture"
            />
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
            <LeaveButton />
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
          </Stack>
        </Stack>
      </Stack>
    </form>
  );
}

export default ValidateForm;
