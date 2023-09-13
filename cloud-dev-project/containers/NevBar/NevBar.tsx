import React, { ReactNode } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { COLORS, PATH } from "@/constants";
import Link from "next/link";

interface NavBarProps {
	children?: ReactNode;
}

const NavBar = ({
	children,
}:NavBarProps) => {
  return (
    <Box bgcolor={COLORS.PRIMARY_LIGHT} width={"100%"} height={65}>
      <Stack p={1} pr={2} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
				<Link href={PATH.HOME} style={{
              textDecoration: 'none',
            }}>
					<Typography variant={"h2"} color={COLORS.WHITE}>
						DEV
						<br />
						WLOG
					</Typography>
				</Link>
				<Typography>fbgsjkg</Typography>
      </Stack>
    </Box>
  );
};

export default NavBar;
