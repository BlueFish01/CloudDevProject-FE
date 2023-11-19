"use client";
import { useEffect, useState } from "react";
import { COLORS, PATH } from "@/constants";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Button,
  TextField,
  Stack,
  Typography,
  Box,
  ButtonBase,
  Link,
  FormHelperText,
} from "@mui/material";
import { LoginFormModel } from "@/models";

import { useRouter } from "next/navigation";
import LoginApi from "@/apiCaller/login";
import { useCookies } from 'react-cookie';


const schema = yup.object().shape({
  email: yup.string().email("email is not valid").required("email is required"),
  password: yup.string().required("password is required"),
});

function Login() {
  
  const router = useRouter();
  const [cookies, setCookie] = useCookies(['authToken']);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addCookie = (token:string) => {
    setCookie('authToken', token, { path: '/' });
    router.replace(PATH.HOME);
  }

  const loginHandler = async(data: LoginFormModel) => {
    try {
      const response = await LoginApi(data);
      console.log('Login successful', response);
      addCookie(response.result.accessToken);

    }catch (error) {
      console.error('Login failed', error);
    }
  }; 

  const onSubmitHandler = (data: LoginFormModel) => {
    console.log(data);
    loginHandler(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Stack alignItems={"center"} spacing={2} rowGap={3}>
        <Stack width={"100%"}>
          <TextField
            {...register("email")}
            name="email"
            label="email"
            error={!!errors.email}
            fullWidth
          />

          <FormHelperText
            error={!!errors.email}
            sx={{
              fontSize: 14,
            }}
          >
            {errors.email?.message}
          </FormHelperText>
        </Stack>

        <Stack width={"100%"} rowGap={1}>
          <TextField
            {...register("password")}
            name="password"
            label="password"
            type="password"
            error={!!errors.password}
            fullWidth
          />

          <FormHelperText
            error={!!errors.password}
            sx={{
              fontSize: 14,
            }}
          >
            {errors.password?.message}
          </FormHelperText>

          <ButtonBase sx={{ justifyContent: "flex-end" }} disableRipple>
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
              <Link href="https://devlog.auth.us-east-1.amazoncognito.com/forgotPassword?response_type=code&client_id=reqk646491s71irk87m2bs027&redirect_uri=https://localhost">Forgot password?</Link>
            </Typography>
          </ButtonBase>
        </Stack>

        <Stack pt={3}>
          <Button
            variant={"contained"}
            fullWidth
            sx={{ height: 60 }}
            type="submit"
          >
            <Typography fontSize={16}>Sign in</Typography>
          </Button>
        </Stack>
        <Stack pt={5}>
          <Typography variant={"caption"} color={COLORS.WHITE}>
            Don’t have an account?
          </Typography>
          <ButtonBase disableRipple>
            <Typography
              variant={"caption"}
              color={COLORS.PRIMARY}
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              <Link href="https://devlog.auth.us-east-1.amazoncognito.com/signup?response_type=code&client_id=reqk646491s71irk87m2bs027&redirect_uri=https://localhost">Sign up</Link>
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </form>
  );
}

export default Login;
