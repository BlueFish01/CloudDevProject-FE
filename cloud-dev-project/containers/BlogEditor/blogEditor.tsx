"use client";
import { useState, useRef } from "react";
import {
  Modal,
  Box,
  Stack,
  Typography,
  IconButton,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import { COLORS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faFileImage,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Tiptap from "./Tiptap";
import { Editor } from "@tiptap/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import createBlog from "@/apiCaller/createBlog";
import ConfirmDialog from "@/components/Dialog/confirmDialog";
import { BlogFormModel } from "@/models";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1300px",
  height: "800px",
  bgcolor: COLORS.WHITE,
  boxShadow: 24,
  overflow: "scroll",
  borderRadius: "10px",
  paddingBottom: "0px",
};

const schema = yup.object().shape({
  topic: yup.string().required("Topic is required"),
  description: yup.string(),
  coverImage: yup.mixed().nullable().required("CoverImage is required"),
});

type BlogEditorProps = {
  open: boolean;
  onClose: () => void;
  mode: "edit" | "write";
  content?: object | null;
};

function BlogEditor({ 
  open,
  onClose,
  mode,
  content,
}: BlogEditorProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [editor, setEditor] = useState<Editor | null>(null);
  const [openConfirmCreateModel, setOpenConfirmCreateModel] = useState<boolean>(false);
  const [createBlogPayload, setCreateBlogPayload] = useState<BlogFormModel|null>(null); // [topic, description, coverImage, content
  const [currentCoverImage, setCurrentCoverImageCoverImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const json = !!editor ? editor?.getJSON() : null;
    console.log(json);
  };

  const getEditor = (editor: Editor) => {
    setEditor(editor);
  };

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setCurrentCoverImageCoverImage(event.target.files[0]);
      setValue("coverImage", event.target.files[0]);
    }
  };

  const dropCurrentCoverImage = () => {
    setCurrentCoverImageCoverImage(null);
    reset({ "coverImage" : {}});
  }

  const createBlogHandler = async() => {
    console.log("create blog handler :", createBlogPayload);
    try {
      const response = await createBlog(createBlogPayload as BlogFormModel);
      console.log('create blog successful', response);
      setOpenConfirmCreateModel(false);
      onClose();
    }
    catch (error) {
      console.error('create blog failed', error);
    }
  }

  const onSubmitHandler = (data: any) => {
    const payload = {
      topic: data.topic,
      description: data.description,
      coverImage: data.coverImage,
      content: !!editor ? editor?.getJSON() : null,
    };
    console.log(payload);
    if(mode === "write"){
      setCreateBlogPayload({
        file: payload.coverImage,
        blogTitle: payload.topic,
        blogDescription: payload.description,
        blogContent: JSON.stringify(payload?.content),
      });
      setOpenConfirmCreateModel(true);
    }
  };

  return (
    <Modal open={open} onClose={()=>{}}>
      <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Box bgcolor={"white"} sx={style}>
          <Stack
            direction={"row"}
            bgcolor={COLORS.PRIMARY}
            sx={{ px: 2, py: 1, pr: 1 }}
            height={"45px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            position={"sticky"}
            top={0}
            zIndex={999}
          >
            <Typography fontSize={"20px"} color={COLORS.WHITE}>
              Blog Editor
            </Typography>
            <IconButton 
              sx={{ width: "24px", height: "24px" }}
              onClick={onClose}
            >
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ color: COLORS.WHITE }}
              />
            </IconButton>
          </Stack>
          <Stack sx={{ px: 2, py: 1, pb: 0 }} height={"835px"}>
            <Stack
              direction={"row"}
              height={"250px"}
              p={1}
              pr={3}
              borderRadius={"10px"}
              bgcolor={COLORS.PRIMARY_LIGHT}
              alignItems={"center"}
              columnGap={3}
            >
              <Box
                width={"234px"}
                height={"234px"}
                position={"relative"}
                bgcolor={COLORS.WHITE}
                borderRadius={"10px"}
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                {currentCoverImage ? (
                  <>
                    <img
                      src={URL.createObjectURL(getValues("coverImage") as Blob)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <IconButton
                      sx={{position:'absolute', top:0, right:0}}
                      onClick={dropCurrentCoverImage}
                    >
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ color: 'red' }}
                      />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                      }}
                      onClick={handleFileSelect}
                    >
                      <Stack spacing={1} alignItems={"center"}>
                        <FontAwesomeIcon
                          icon={faFileImage}
                          style={{ color: COLORS.DARK_GRAY }}
                          size={"5x"}
                        />
                        <Typography color={COLORS.DARK_GRAY} fontWeight={800}>
                          Upload Image
                        </Typography>
                      </Stack>
                    </Button>
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png" // Define accepted file types
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                  </>
                )}
              </Box>
              <Stack flexGrow={1} height={"100%"} rowGap={2}>
                <TextField
                  {...register("topic")}
                  name="topic"
                  label="Topic"
                  type="text"
                  error={!!errors.topic?.message}
                  fullWidth
                />
                <TextField
                  {...register("description")}
                  name="description"
                  label="Description"
                  type="text"
                  error={false}
                  sx={{ height: "100%" }}
                  inputProps={{ style: { height: "130px" } }}
                  multiline
                  fullWidth
                />
              </Stack>
            </Stack>

            <Tiptap setEditor={getEditor} mode={mode}/>

            <Stack
              justifyContent={"flex-end"}
              direction={"row"}
              columnGap={2}
              py={1}
              pb={0}
            >
              <Button variant={"outlined"} fullWidth size={"small"} onClick={onClose}>
                cancle
              </Button>
              <Button
                variant={"contained"}
                fullWidth
                size={"small"}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </form>
      <ConfirmDialog
        open={openConfirmCreateModel}
        onClose={()=>{setOpenConfirmCreateModel(false)}}
        onConfirm={createBlogHandler}
        onCancel={()=>{setOpenConfirmCreateModel(false)}}
        message={'create blog post?'}
      />
      </>
    </Modal>
  );
}

export default BlogEditor;
