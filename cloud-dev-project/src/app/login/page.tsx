"use client";
import { COLORS, PATH } from "@/constants";
import {
  Container,
  Button,
  TextField,
  Stack,
  Typography,
  Box,
  ButtonBase,
  Link,
} from "@mui/material";

import { useRouter } from 'next/navigation'

function Login() {

  const router = useRouter();

  const submitLogin = () => {
    router.push(PATH.HOME)
  }

  return (
    <form onSubmit={()=>{}}>
      <Stack alignItems={"center"} spacing={2} rowGap={3}>
        <TextField label="email" variant="outlined" fullWidth />
        <Stack width={"100%"} rowGap={1}>
          <TextField
            label="password"
            variant="outlined"
            type="password"
            autoComplete="current-password"
            fullWidth
          />
          <ButtonBase sx={{justifyContent:'flex-end'}} disableRipple>
            <Typography
              variant={"caption"}
              color={COLORS.PRIMARY}
              textAlign={"right"}
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              Forgot password?
            </Typography>
          </ButtonBase>
        </Stack>
        <Stack pt={3}>
          <Button variant={"contained"} fullWidth sx={{height:60}} onClick={submitLogin}>
            <Typography fontSize={16}>Sign in</Typography>
          </Button>
        </Stack>
        <Stack pt={5}>
          <Typography variant={"caption"} color={COLORS.WHITE}>Don’t have an account?</Typography>
          <ButtonBase disableRipple>
          <Typography
              variant={"caption"}
              color={COLORS.PRIMARY}
              sx={{textDecoration: 'underline', cursor: 'pointer'}}
            >
              Sign up
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </form>
  );
}

export default Login;
