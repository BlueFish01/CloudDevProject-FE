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
import { useState } from "react";
import EditBlogWindow from "@/containers/EditBlog/EditBlogWindow";

export default function Paragraph() {
  return (
    <Stack direction={"column"}>
      <Stack sx={{ p: 2 }}>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut
          diam quam nulla porttitor massa id neque aliquam. Purus sit amet
          volutpat consequat mauris. Donec massa sapien faucibus et molestie ac
          feugiat sed. Egestas sed sed risus pretium quam vulputate. Tempor orci
          eu lobortis elementum nibh tellus molestie. Auctor eu augue ut lectus
          arcu. Faucibus purus in massa tempor nec feugiat nisl. Odio tempor
          orci dapibus ultrices in iaculis nunc sed augue. Mauris sit amet massa
          vitae tortor condimentum lacinia quis. Consequat mauris nunc congue
          nisi vitae suscipit tellus mauris.
        </Typography>
        <Stack alignItems={"center"}>
          <Image
            src={"/PictureOfCode.jpg"}
            width={608}
            height={327}
            alt="Picture of Code"
          />
        </Stack>
        <Typography variant="subtitle1">
          Et tortor at risus viverra adipiscing at in tellus. Sagittis nisl
          rhoncus mattis rhoncus urna neque viverra. Et egestas quis ipsum
          suspendisse ultrices gravida dictum. Placerat orci nulla pellentesque
          dignissim. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
          Ut consequat semper viverra nam libero justo. Egestas quis ipsum
          suspendisse ultrices gravida dictum fusce ut placerat. Turpis nunc
          eget lorem dolor sed viverra ipsum nunc aliquet. Lacus vestibulum sed
          arcu non odio euismod.
        </Typography>
        <Stack alignItems={"center"}>
          <Image
            src={"/PictureOfCode.jpg"}
            width={608}
            height={327}
            alt="Picture of Code"
          />
        </Stack>
        <Typography variant="subtitle1">
          Id consectetur purus ut faucibus pulvinar. Bibendum neque egestas
          congue quisque egestas diam in arcu. In est ante in nibh mauris cursus
          mattis molestie a. Consequat interdum varius sit amet mattis vulputate
          enim. Id tristique et egestas quis ipsum suspendisse ultrices. Etiam
          erat velit scelerisque in dictum.
        </Typography>
      </Stack>
    </Stack>
  );
}
