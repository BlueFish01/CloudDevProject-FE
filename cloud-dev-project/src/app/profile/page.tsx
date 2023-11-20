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
            <Image
              src={response?.userPicture ?? ''}
              width={420}
              height={420}
              alt="Profile Picture"
            />
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

