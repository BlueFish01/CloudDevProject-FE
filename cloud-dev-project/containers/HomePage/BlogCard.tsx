import { COLORS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Box, Typography } from "@mui/material";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type BlogCardProps = {
  cardId?: string;
  title?: string;
  views?: number;
  createdDate?: string;
  pictureLink?: string;
};

const BlogCard = ({
  cardId = "123",
  title = "Heading",
  views = 1230,
  createdDate = "12/12/2021",
  pictureLink = "/MockPhoto.jpeg",
}: BlogCardProps) => {
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
        <Image src={pictureLink} layout="fill" alt="Picture of the author" />
      </Box>
      <Stack justifyContent={"space-between"} flexGrow={1}>
        <Typography variant="h2" color={COLORS.PRIMARY} pl={1}>
          {title}
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"} px={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <FontAwesomeIcon icon={faEye} color={COLORS.PRIMARY_LIGHT} />
            <Typography color={COLORS.PRIMARY_LIGHT}>{views}</Typography>
          </Stack>
          <Typography color={COLORS.PRIMARY_LIGHT}>{createdDate}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogCard;
