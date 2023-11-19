import { COLORS, PATH } from "@/constants";
import {
  Container,
  Stack,
  IconButton,
} from "@mui/material";
import NavBar from "@/containers/NevBar/NevBar";
import { ReactNode } from "react";
import Link from "next/link";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UI_BlogDetail(
  { children }: { children: ReactNode },
) {
  return (
    <Container maxWidth={false}>
      <Stack
        style={{ position: "sticky", overflow: "hidden", top: 0, zIndex: 999 }}
      >
        <NavBar>
          <Link href={PATH.PROFILE} style={{ textDecoration: 'none' }}>
            <IconButton sx={{backgroundColor:COLORS.WHITE, width:'45px', height:'45px'}}>
              <FontAwesomeIcon icon={faUser} style={{color:COLORS.SECONDARY}}/>
            </IconButton>
          </Link>
        </NavBar>

      </Stack>

      {children}
    </Container>
  );
}
