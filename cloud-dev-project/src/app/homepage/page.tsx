"use client";
import { useState } from "react";
import { Stack, Typography, Box, Button, Grid } from "@mui/material";
import { COLORS } from "@/constants";
import BlogCard from "@/containers/HomePage/BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import NewsCard from "@/containers/HomePage/NewsCard";
import CompanyCard from "@/containers/HomePage/CompanyCard";
import BlogEditor from "@/containers/BlogEditor/blogEditor";

const filter: string[] = ["Latest", "Popular", "Oldest"];

export default function HomePage() {
  const [seletedButton, setSelectedButton] = useState<string>("Latest");
  const [openBlogEditModal, setOpenBlogEditModal] = useState<boolean>(false);
  const fetchData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Stack direction={"row"} width={"100%"} height={"100%"}>
      <Stack width={"75%"}>
        <Stack height={"100vh"} sx={{ overflowY: "auto" }}>
          <Stack
            direction={"column"}
            rowGap={3}
            padding={2}
            pt={3}
            mr={2}
            sx={{
              overflow: "hidden",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: COLORS.DARK_GRAY, // Customize the scrollbar thumb color
                borderRadius: "10px", // Customize the scrollbar thumb border-radius
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "white", // Customize the scrollbar track color
              },
            }}
          >
            <Stack flexGrow={1} direction={"row"} columnGap={1}>
              {filter.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    width: 144,
                  }}
                  variant={seletedButton === item ? "contained" : "outlined"}
                  onClick={() => setSelectedButton(item)}
                >
                  {item}
                </Button>
              ))}
            </Stack>

            <Grid container width={"100%"}>
              {fetchData.map((item, index) => (
                <Grid key={index} item xs={4} height={375} pr={2} pt={2}>
                  <BlogCard cardId={item.toString()} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width={"25%"}
        position={"fixed"}
        right={0}
        pt={3}
        rowGap={2}
        pr={2}
      >
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          startIcon={<FontAwesomeIcon icon={faPenToSquare} />}
          onClick={()=>{setOpenBlogEditModal(true)}}
        >
          Write
        </Button>
        <NewsCard />
        <CompanyCard />
      </Stack>
      <BlogEditor open={openBlogEditModal} onClose={()=>{setOpenBlogEditModal(false)}}/>
    </Stack>
  );
}
