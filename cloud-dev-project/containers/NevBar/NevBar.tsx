import React, { ReactNode } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { COLORS, PATH } from "@/constants";
import Link from "next/link";
import zIndex from "@mui/material/styles/zIndex";

interface NavBarProps {
  children?: ReactNode;
}

const NavBar = ({ children, ...props }: NavBarProps) => {
  return (
    <Box bgcolor={COLORS.PRIMARY_LIGHT} width={"100%"} height={70}>
      <Stack
        p={1}
        pr={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link
          href={PATH.HOME}
          style={{
            textDecoration: "none",
          }}
        >
          <Typography variant={"h2"} color={COLORS.WHITE}>
            DEV
            <br />
            BLOG
          </Typography>
        </Link>
        <Typography>{children}</Typography>
      </Stack>
    </Box>
  );
};

export default NavBar;
