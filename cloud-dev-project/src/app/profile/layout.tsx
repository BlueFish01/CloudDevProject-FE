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
} from "@mui/material";
import Image from "next/image";
import NavBar from "@/containers/NevBar/NevBar";
import EditProfileBT from "@/containers/EditProfile/EditProfile";
import LogoutButton from "@/components/logoutButton/LogoutButton";
import { useQuery } from "@tanstack/react-query";
import getProfile from "@/apiCaller/getProfile";
import { getProfileModel } from "@/models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faDiscord,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isPending } = useQuery<getProfileModel | null>({
    queryKey: ["getProfile"],
    queryFn: () => getProfile(),
  });

  return (
    <Container maxWidth={false}>
      <NavBar>
        <LogoutButton />
      </NavBar>

      <Typography variant="h5" pt={3} pl={2}>
        Profile
      </Typography>

      <Stack direction={"row"} spacing={{ xs: 1, sm: 2 }} pl={2} sx={{height:'540px'}}>
        <Box
          sx={{
            px: 2,
            py: 2,
            border: "2px solid",
            borderColor: COLORS.SECONDARY,
            borderRadius: "10px",
            flex: 1,
            height: '100%'
          }}
          justifyContent={'space-between'}
          display={'flex'}
          flexDirection={'column'}
        >
          {/* /Left stack */}
          <Stack direction={"column"}>
            <Stack direction={"row"}>
              <Typography fontSize={35} fontWeight={"bold"}>
                {data?.name}
              </Typography>
              <Stack flexGrow={1} alignItems={"flex-end"} pr={4}>
                <Typography fontSize={35} fontWeight={"bold"}>
                  {data?.numberOfBlog}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"}>
              <Typography variant="h4">{data?.city}</Typography>
              <Stack flexGrow={1} alignItems={"flex-end"} pr={4}>
                <Typography variant="h2">Blogs</Typography>
              </Stack>
            </Stack>

            <Stack pr={2}>
              <Stack spacing={1} flexGrow={1} pt={5}>
                <Typography>About</Typography>
                <Divider />
              </Stack>
              <Typography paragraph={true}>{data?.about}</Typography>
            </Stack>
          </Stack>
          <EditProfileBT />
        </Box>
        {/* /End left stack */}

        {/* Right Stack */}
        <Stack direction={{ xs: "column" }} spacing={{ xs: 1, sm: 1 }}>
          <Stack sx={{ borderRadius: "10px" }} flex={1} alignItems={"flex-end"}>
            <Image
              src="/UIProfile.png"
              width={420}
              height={420}
              alt="Profile Picture"
            />
          </Stack>
          <Stack direction={"row"}>
            <Typography variant="h4">Follow on</Typography>
            <Stack direction={"row"}>
              {socialMedia.map((item, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: "100px",
                    height: "47px",
                    background: COLORS.WHITE,
                  }}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  <FontAwesomeIcon icon={item.icon} color={COLORS.SECONDARY} />
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
