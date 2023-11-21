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
  IconButton,
  Modal,
  Skeleton,
} from "@mui/material";
import Image from "next/image";
import NavBar from "@/containers/NevBar/NevBar";
import LogoutButton from "@/components/logoutButton/LogoutButton";
import { useQuery } from "@tanstack/react-query";
import getProfile from "@/apiCaller/getProfile";
import { EditProfileModel, getProfileModel } from "@/models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faDiscord,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import ValidateForm from "@/containers/EditProfile/ValidateForm";

const styleEditProfile = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1150px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

type TSocialMedia = {
  name: string;
  link: string;
  icon: IconDefinition;
};

const socialMedia: TSocialMedia[] = [
  { name: "Discord", link: "https://discord.com/", icon: faDiscord },
  { name: "Instagram", link: "https://www.instagram.com/", icon: faInstagram },
  { name: "Linkedin", link: "https://www.linkedin.com/", icon: faLinkedin },
];

export default function ProfilePage() {
  
  const { data, isPending } = useQuery({
    queryKey: ["getProfile"],
    queryFn: () => getProfile(),
  });
  const { response }: { response: getProfileModel } = data || { response: {} };
  
  // const {editProfile}: { editProfile: EditProfileModel} = data;

  const [openEditProfileModal, setOpenEditProfileModal] =
    useState<boolean>(false);

  return (
    <Container maxWidth={false}>
      <NavBar>
        <LogoutButton />
      </NavBar>

      <Typography
        variant="h5"
        pt={3}
        pl={2}
        color={COLORS.PRIMARY}
        fontSize={"16px"}
        fontWeight={500}
        letterSpacing={"2.8px"}
      >
        Profile
      </Typography>

      <Stack
        direction={"row"}
        spacing={{ xs: 1, sm: 2 }}
        pl={2}
        sx={{ height: "540px" }}
      >
        <Box
          sx={{
            px: 2,
            py: 2,
            border: "2px solid",
            borderColor: COLORS.SECONDARY,
            borderRadius: "10px",
            flex: 1,
            height: "100%",
          }}
          justifyContent={"space-between"}
          display={"flex"}
          flexDirection={"column"}
        >
          {/* /Left stack */}
          <Stack direction={"column"}>
            <Stack direction={"row"}>
              <Typography
                fontSize={"40px"}
                fontWeight={800}
                letterSpacing={"7px"}
              >
                {response.userFName} {response.userLName}
              </Typography>
              <Stack flexGrow={1} alignItems={"flex-end"} pr={3}>
                <Typography
                  fontSize={"48px"}
                  fontWeight={800}
                  letterSpacing={"8.4px"}
                >
                  {response.numberOfPost}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"}>
              <Typography variant="h4">{response.userAddress}</Typography>
              <Stack flexGrow={1} alignItems={"flex-end"} pr={4}>
                <Typography
                  variant="h2"
                  fontSize={"32px"}
                  fontWeight={400}
                  letterSpacing={"5.6px"}
                >
                  Blogs
                </Typography>
              </Stack>
            </Stack>

            <Stack pr={2}>
              <Stack spacing={1} flexGrow={1} pt={5}>
                <Typography>About</Typography>
                <Divider />
              </Stack>
              <Typography paragraph={true}>{response.userAbout}</Typography>
            </Stack>
          </Stack>
          <Stack alignItems={"flex-end"}>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenEditProfileModal(true);
              }}
            >
              <Typography
                fontSize={"20px"}
                fontWeight={500}
                letterSpacing={"3.5"}
              >
                Edit Profile
              </Typography>
            </Button>

            <Modal
              open={openEditProfileModal}
              onClose={() => {
                setOpenEditProfileModal(false);
              }}
            >
              <Box sx={styleEditProfile} borderRadius={2}>
                <Stack bgcolor={COLORS.PRIMARY} borderRadius={1}>
                  <Typography color={COLORS.WHITE} sx={{ p: 2 }}>
                    Edit Profile
                  </Typography>
                </Stack>

                <ValidateForm initdata={response} />

              </Box>
            </Modal>
          </Stack>
        </Box>
        {/* /End left stack */}

        {/* Right Stack */}
        <Stack direction={{ xs: "column" }} spacing={{ xs: 1, sm: 1 }}>
          <Stack sx={{ borderRadius: "10px" }} flex={1} alignItems={"flex-end"}>
            {isPending ? 
              <Box 
              width={420}
              height={420}
              pr={2}
              >
                <Skeleton variant="rounded" 
                  width={'100%'} 
                  height={'100%'}
                  animation="wave"
                />
              </Box>
              :
            <Image
              src={response?.userPicture ?? ''}
              width={420}
              height={420}
              alt="Profile Picture"
            />}
          </Stack>
          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Typography variant="h4" fontSize={"20px"} fontWeight={500}>
              Follow on
            </Typography>
            <Stack direction={"row"} columnGap={2}>
              {socialMedia.map((item, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: "50px",
                    height: "50px",
                    background: COLORS.SECONDARY,
                  }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <FontAwesomeIcon icon={item.icon} color={COLORS.LIGHT_GRAY} />
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>
        {/* /End right stack */}
      </Stack>
    </Container>
  );
}

=======
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
  const [openLeave, setOpenLeave] = React.useState(false);
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
