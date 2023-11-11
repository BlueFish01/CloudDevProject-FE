import { COLORS } from "@/constants";
import {
  Container,
  Button,
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import NavBar from "@/containers/NevBar/NevBar";
import EditProfileBT from "@/containers/EditProfile/EditProfile";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth={false}>
      <NavBar />
      <Typography variant="h5" pt={3} pl={2}>
        Profile
      </Typography>

      <Stack direction={"row"} spacing={{ xs: 1, sm: 2 }} pl={2}>
        <Box
          sx={{
            pl: 2,
            pt: 2,
            border: 1,
            borderColor: COLORS.PRIMARY_DARK,
            borderRadius: 2,
          }}
        >
          {/* /Left stack */}
          <Stack direction={"column"}>
            <Stack direction={"row"}>
              <Typography fontSize={35} fontWeight={"bold"}>
                Denial Smith
              </Typography>
              <Stack flexGrow={1} alignItems={"flex-end"} pr={4}>
                <Typography fontSize={35} fontWeight={"bold"}>
                  12
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"}>
              <Typography variant="h4">Bangkok, Thailand</Typography>
              <Stack flexGrow={1} alignItems={"flex-end"} pr={4}>
                <Typography variant="h2">Blogs</Typography>
              </Stack>
            </Stack>

            <Stack pr={2}>
              <Stack spacing={1} flexGrow={1} pt={5}>
                <Typography>About</Typography>
                <Divider />
              </Stack>
              <Typography paragraph={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Feugiat in fermentum posuere urna. Ante metus dictum at tempor.
                Non tellus orci ac auctor augue mauris augue neque gravida. Elit
                pellentesque habitant morbi tristique.
              </Typography>
              <EditProfileBT />
            </Stack>
          </Stack>
        </Box>
        {/* /End left stack */}

        {/* Right Stack */}
        <Stack direction={{ xs: "column" }} spacing={{ xs: 1, sm: 1 }}>
          <Image src="/UIProfile.png" width={200} height={200} alt="Profile Picture" />
          <Stack direction={"row"}>
            <Typography variant="h4">Follow on</Typography>
            <Stack direction="row" pl={2}>
              <FacebookIcon style={{ color: COLORS.PRIMARY_LIGHT }} />
              <LinkedInIcon style={{ color: COLORS.PRIMARY_LIGHT }} />
              <InstagramIcon style={{ color: COLORS.PRIMARY_LIGHT }} />
            </Stack>
          </Stack>
        </Stack>
        {/* /End right stack */}
      </Stack>
    </Container>
  );
}
