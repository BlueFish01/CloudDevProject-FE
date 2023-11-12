"use client";
import { useEffect, useState } from "react";
import { Stack, Typography, Box, Button, Grid, CircularProgress } from "@mui/material";
import { COLORS } from "@/constants";
import BlogCard from "@/containers/HomePage/BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import NewsCard from "@/containers/HomePage/NewsCard";
import CompanyCard from "@/containers/HomePage/CompanyCard";
import BlogEditor from "@/containers/BlogEditor/blogEditor";
import Link from "next/link";
import { useQuery } from '@tanstack/react-query';
import getBlogList from '@/apiCaller/getBlogList';
import {BlogResponseModel} from '@/models';
const filter: string[] = ["latest", "popular", "oldest"];

export default function HomePage() {
  const [seletedButton, setSelectedButton] = useState<string>("latest");
  const [limit, setLimit] = useState<number>(5);
  const [openBlogEditModal, setOpenBlogEditModal] = useState<boolean>(false);

  const { data , isPending } = useQuery({
    queryKey: ['getBlogList', seletedButton, limit],
    queryFn: ()=>getBlogList(seletedButton,limit),
  })

  const {response}:{ response : BlogResponseModel[] } = data || {response:[]}; 

  return (
    <Stack direction={"row"} width={"100%"} height={"100%"}>
      <Stack width={"75%"}>
        <Stack height={"100%"}>
          <Stack direction={"column"} rowGap={3} padding={2} pt={3} mr={2}>
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

            {isPending ? (
              <Box 
                display={'flex'}
                height={'80vh'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={'column'}
                rowGap={2}
              >
                <CircularProgress
                  thickness={5}
                  sx={{transition: 'ease-in-out 500ms'}}
                />
                <Typography variant="h2" color={COLORS.PRIMARY_LIGHT}>
                  Loading...
                </Typography>
              </Box>
            ) : (
              <Grid container width={"100%"}>
                {response?.map((item, index) => (
                  <Grid
                    key={item.blogId}
                    item
                    xs={4}
                    height={375}
                    pr={2}
                    pt={2}
                  >
                    <Link
                      href={`/detail/${item.blogId.toString()}`}
                      style={{ textDecoration: "none" }}
                    >
                      <BlogCard cardDetail={item} />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            )}

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
          onClick={() => {
            setOpenBlogEditModal(true);
          }}
        >
          Write
        </Button>
        <NewsCard />
        <CompanyCard />
      </Stack>
      <BlogEditor
        mode={"write"}
        open={openBlogEditModal}
        onClose={() => {
          setOpenBlogEditModal(false);
        }}
      />
    </Stack>
  );
}
