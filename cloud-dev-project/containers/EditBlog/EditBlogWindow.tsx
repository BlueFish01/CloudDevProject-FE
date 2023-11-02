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
  TextField,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Paragraph from "@/containers/EditBlog/ExampleofParagraph";

const EditingBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1300px",
  height: "700px",
  bgcolor: COLORS.WHITE,
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
};

export default function EditBlogWindow() {
  const [openEditWindow, setopenEditWindow] = useState(false);
  const handleOpenEditWindow = () => setopenEditWindow(true);
  const handleCloseEditWindow = () => setopenEditWindow(false);
  return (
    <Stack>
      <Button variant="outlined" onClick={handleOpenEditWindow}>
        Edit
      </Button>
      <Modal open={openEditWindow} onClose={handleCloseEditWindow}>
        <Box sx={EditingBoxStyle} borderRadius={"10px"}>
          <Stack bgcolor={COLORS.PRIMARY_DARK} sx={{ p: 2 }}>
            <Typography fontSize={'20px'}>Blog Editor</Typography>
          </Stack>
          <Stack sx={{ p: 2 }}>
            <Stack
              direction={"row"}
              bgcolor={COLORS.PRIMARY_LIGHT}
              borderRadius={"10px"}
              sx={{ p: 2 }}
              spacing={2}
            >
              <Image
                src={"/MockPhoto.jpeg"}
                width={284}
                height={280}
                alt="MockPhoto"
              />
              <Stack flexGrow={1} spacing={2}>
                <TextField
                  label="Title"
                  variant="outlined"
                  id="outlined-basic"
                  fullWidth
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  id="outlined-basic"
                  multiline
                  rows={7.5}
                />
              </Stack>
            </Stack>
          </Stack>
          <Paragraph />
          <Stack flexGrow={1} alignItems={"flex-end"}>
            <Stack direction={"row"} spacing={2} sx={{ p: 2 }}>
              <Button variant="outlined">Cancel</Button>
              <Button
                variant="outlined"
                style={{ color: COLORS.DANGER, borderColor: COLORS.DANGER }}
              >
                Delete
              </Button>
              <Button variant="contained">Save</Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
}
