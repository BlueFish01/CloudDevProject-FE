import { COLORS } from "@/constants";
import { Container, Button, Box, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";

export default function LoginLayout({children,}: {children: React.ReactNode;}) {
  return (
    <Container maxWidth={false}>
      <Box flex={1} height={"100%"} display={"flex"} overflow={'hidden'}>
        <Grid container>
          <Grid item xs={8}>
						<Box pt={6} pl={3}>
							<Typography  variant={'h1'} color={COLORS.PRIMARY}>
								DEV<br/>WLOG
							</Typography>
						</Box>
						<Box display={'flex'} flex={1} justifyContent={'center'} alignItems={'center'}>
							<Image alt='' src={'/login.png'} width={'850'} height={'650'} />
						</Box>
					</Grid>
          <Grid item xs={4}>
            <Box
              sx={{ backgroundColor: COLORS.PRIMARY_LIGHT }}
              height={"100vh"}
              overflow={"hidden"}
            >
							<Stack spacing={3} p={3} px={7} pt={6} rowGap={3}>
								<Typography variant={'h1'} color={COLORS.WHITE} textAlign={'right'}>
									WELCOME<br/>BACK<br/><br/><br/>Login.
								</Typography>
								{children}
							</Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
