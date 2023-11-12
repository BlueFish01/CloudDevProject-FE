import { Divider, Stack, Typography } from "@mui/material";
import { COLORS } from "@/constants";
import { TNewsModel } from "@/models";

function NewsCard() {
  const news: TNewsModel[] = [
    {
      title: "title 1",
      content: "content 1",
      author: "author 1",
      createDate: "12/12/2021",
    },
    {
      title: "title 2",
      content: "content 2",
      author: "author 2",
      createDate: "12/12/2021",
    },
  ];

  return (
    <Stack
      borderRadius={"10px"}
      border={`1px solid ${COLORS.PRIMARY_LIGHT}`}
      p={2}
      mt={3}
      rowGap={1}
    >
      <Typography variant={"h3"} color={COLORS.PRIMARY} fontWeight={600}>
        News
      </Typography>
      <Divider sx={{ background: COLORS.PRIMARY_LIGHT }} />
      {news?.map((item, index) => (
        <Stack key={index}>
          <Typography
            key={index}
            variant={"h4"}
            color={COLORS.PRIMARY}
            fontWeight={400}
            gutterBottom
          >
            {item.title}
          </Typography>
          <Typography
            variant={"h5"}
            color={COLORS.PRIMARY_LIGHT}
            fontWeight={300}
          >
            {item.content}
          </Typography>
          <Typography
            variant={"h5"}
            color={COLORS.PRIMARY_LIGHT}
            fontWeight={300}
            textAlign={"right"}
          >
            {item.author}
            <br />
            {item.createDate}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default NewsCard;
