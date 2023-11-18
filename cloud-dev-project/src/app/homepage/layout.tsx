import type { Metadata } from "next";
import { Container, Stack, Box, Typography, IconButton } from "@mui/material";
import NavBar from "@/containers/NevBar/NevBar";
import { COLORS, PATH} from "@/constants";
import LogoutButton from "@/components/logoutButton/LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Homepage",
  description: "",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <Container maxWidth={false}>
      <Stack overflow={"auto"} height={"100vh"}>
        <Stack position={"fixed"} width={"100vw"} top={0} zIndex={999}>
          <NavBar>

            <Link href={PATH.PROFILE} style={{ textDecoration: 'none' }}>
            <IconButton sx={{backgroundColor:COLORS.WHITE, width:'45px', height:'45px'}}>
              <FontAwesomeIcon icon={faUser} style={{color:COLORS.SECONDARY}}/>
            </IconButton>
            </Link>

          </NavBar>
        </Stack>
        <Stack paddingTop={"70px"}>{children}</Stack>
      </Stack>
    </Container>
  );
}
