import { COLORS } from "@/constants";
import {
  Container,
  Button,
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
  Modal,
} from "@mui/material";
import Image from "next/image";
import NavBar from "@/containers/NevBar/NevBar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import EditBlog from "./page";
import Paragraph from "@/containers/EditBlog/ExampleofParagraph";

export default function UI_BlogDetail({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth={false}>
      <NavBar />

      <Stack direction={"row"} sx={{ p: 2 }} spacing={3}>
        <Stack direction={"column"} spacing={2} width={1000}>
          <Image
            src={"/MockPhoto.jpeg"}
            width={1001}
            height={310}
            alt="image"
          />
          <Typography fontSize={55}>Heading</Typography>
          <Paragraph/>
        </Stack>
        <Stack direction={"column"} spacing={2}>
          <Stack
            direction={"column"}
            bgcolor={COLORS.PRIMARY}
            borderRadius={"10px"}
            sx={{ p: 2 }}
          >
            <Typography fontSize={"20px"} color={COLORS.WHITE}>
              Reads
            </Typography>
            <Divider variant="middle" color={COLORS.WHITE} />
            <Typography align={"center"} fontSize={"40px"} color={COLORS.WHITE}>
              1,145
            </Typography>
          </Stack>
          <Stack
            direction={"column"}
            color={COLORS.PRIMARY}
            bgcolor={COLORS.LIGHT_GRAY}
            borderRadius={"10px"}
            borderColor={COLORS.PRIMARY_LIGHT}
            sx={{ p: 2 }}
            spacing={2}
          >
            <Typography fontSize={"20px"}>
              Created <br /> 12/12/2023
            </Typography>
            <Typography fontSize={"20px"}>
              Last Edited <br /> 12/12/2023
            </Typography>
            <Divider variant="middle" color={COLORS.PRIMARY_LIGHT} />
            <EditBlog />
          </Stack>
          <Stack
            direction={"column"}
            borderRadius={"10px"}
            bgcolor={"#CDE1F7"}
            sx={{ p: 2 }}
            spacing={2}
          >
            <Typography>COMPANY</Typography>
            <Stack direction={"row"} spacing={2}>
              <Typography fontSize={"14px"}>About</Typography>
              <Divider orientation="vertical" flexItem />
              <Typography fontSize={"14px"}>Support</Typography>
              <Divider orientation="vertical" flexItem />
              <Typography fontSize={"14px"}>Careers</Typography>
            </Stack>
            <Typography fontSize={"16px"}>CONNECT WITH US</Typography>
            <Stack direction={"row"} spacing={1}>
              <FacebookIcon sx={{ fontSize: 40 }} />
              <LinkedIn sx={{ fontSize: 40 }} />
              <InstagramIcon sx={{ fontSize: 40 }} />
            </Stack>
            <Divider variant="middle" color={COLORS.PRIMARY_LIGHT} />
            <Stack direction={"row"} spacing={2} color={COLORS.WHITE}>
              <Typography fontSize={"14px"}>Privacy</Typography>
              <Divider orientation="vertical" color={COLORS.PRIMARY_DARK} />
              <Typography fontSize={"14px"}>Term</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
