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

export default function PublicBlogLayout(
  { children }: { children: ReactNode },
) {
  return (
    <Container maxWidth={false}>
      <Stack
        style={{ position: "sticky", overflow: "hidden", top: 0, zIndex: 999 }}
      >
        <NavBar>
          <Link href={PATH.PROFILE} style={{ textDecoration: 'none' }}>
            <></>
          </Link>
        </NavBar>

      </Stack>

      {children}
    </Container>
  );
}