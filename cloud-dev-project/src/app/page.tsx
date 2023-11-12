"use client";
import { CookiesProvider } from 'react-cookie';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { 
  Container,
  Box,
} from '@mui/material';

function page() {
  return (
    <CookiesProvider>
        <Container>
          <Box flex={1} height={'100vh'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
            {/* <Loading/> */}
          </Box>  
        </Container>
       
    </CookiesProvider>
  );
}

export default page;
