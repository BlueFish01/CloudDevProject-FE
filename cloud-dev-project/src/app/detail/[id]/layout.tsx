'use client';
import { COLORS, PATH } from "@/constants";
import {
  Container,
  Button,
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
  Modal,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import NavBar from "@/containers/NevBar/NevBar";
import EditBlog from "./page";
import Tiptap from "@/containers/BlogEditor/Tiptap";
import { Editor } from "@tiptap/react";
import { useState } from "react";
import CompanyCard from "@/containers/HomePage/CompanyCard";
import Link from "next/link";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UI_BlogDetail({
  children,
}: {
  children: React.ReactNode;
}) {

  const [editor, setEditor] = useState<Editor | null>(null);

  const getEditor = (editor: Editor) => {
    setEditor(editor);
  };

  const mock_content = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 1,
        },
        content: [
          {
            type: "text",
            marks: [
              {
                type: "bold",
              },
            ],
            text: "Hello this is test",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "test ",
          },
          {
            type: "text",
            marks: [
              {
                type: "bold",
              },
            ],
            text: "code block ",
          },
          {
            type: "text",
            text: "json result",
          },
        ],
      },
      {
        type: "codeBlock",
        attrs: {
          language: "python",
        },
        content: [
          {
            type: "text",
            text: "for i range(1,10):\n\tprint(i)\n\n##this is comment",
          },
        ],
      },
    ],
  };

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

      <Stack direction={"row"} sx={{ p: 2 }} spacing={3} style={{ position: "static", overflow: "hidden" }}>
        <Stack
          direction={"column"}
          spacing={2}
          width={'80%'}
          px={20}
        >
          <Box style={{ overflow: "hidden", overflowY: "scroll"}} height={"90VH"}>
            <Stack style={{ borderRadius: "10px", overflow: "hidden" }}>
              <Image
                src={"/MockPhoto.jpeg"}
                width={1000}
                height={310}
                alt="image"
              />
            </Stack>
            {/* tiptap */}
            <Tiptap setEditor={getEditor} mode={'read'} jsonConten={mock_content}/>
          </Box>
        </Stack>

        <Stack
          direction={"column"}
          spacing={2}
        >
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
          <CompanyCard />
        </Stack>
      </Stack>
    </Container>
  );
}
