import { COLORS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Box, Typography } from "@mui/material";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {BlogResponseModel} from "@/models"

type BlogCardProps = {
  cardDetail: BlogResponseModel;
};

const BlogCard = ({
  cardDetail
}: BlogCardProps) => {
  const {blogCover,blogTitle,blogView,blogCreateDate,blogDescription} = cardDetail;

  const date = new Date(blogCreateDate);
  const blogCreateDateFormated = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  
  return (
    <Stack
      flexGrow={1}
      height={"100%"}
      borderRadius={"10px"}
      border={`1px solid ${COLORS.PRIMARY_LIGHT}`}
      p={0.5}
      rowGap={1}
    >
      <Box
        position={"relative"}
        height={"75%"}
        borderRadius={"10px"}
        overflow={"clip"}
      >
        <Image src={blogCover} layout="fill" alt="Picture of the author" loading="lazy"/>
      </Box>
      <Stack justifyContent={"space-between"} flexGrow={1}>
        <Stack>
        <Typography variant="h2" color={COLORS.PRIMARY} pl={1}>
          {blogTitle}
        </Typography>
        <Typography variant="body1" color={COLORS.PRIMARY_LIGHT} pl={1} sx={{fontSize:'12px'}}>
          {blogDescription}
        </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} px={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FontAwesomeIcon icon={faEye} color={COLORS.PRIMARY_LIGHT} />
            <Typography color={COLORS.PRIMARY_LIGHT}>{blogView}</Typography>
          </Stack>
          <Typography color={COLORS.PRIMARY_LIGHT}>{blogCreateDateFormated}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogCard;
