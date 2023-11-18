"use client";
import { COLORS , PATH} from "@/constants";
import {
  Container,
  Button,
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
  Modal,
  Skeleton,
  Link,
} from "@mui/material";
import { useState } from "react";
import CopyURLButton from "@/containers/EditBlog/CopyURL";
import DeleteBlogButton from "@/containers/EditBlog/DeleteBlogButton";
import BlogEditor from "@/containers/BlogEditor/blogEditor";
import Image from "next/image";
import { Editor } from "@tiptap/react";
import { useQuery } from "@tanstack/react-query";
import getBlogById from "@/apiCaller/getBlogById";
import Tiptap from "@/containers/BlogEditor/Tiptap";
import CompanyCard from "@/containers/HomePage/CompanyCard";
import { useSearchParams } from 'next/navigation'
import ConfirmDialog from "@/components/Dialog/confirmDialog";
import deleteBlog from "@/apiCaller/deleteBlog";
import Alert from "@/components/Alert/alert";
import { useRouter } from "next/navigation";
import {BlogResponseModel} from '@/models';

const style2 = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pb: 5,
};

export default function BlockDetailPage() {

  const searchParams = useSearchParams()
  const blogIdString = searchParams.get('blogId')
  const blogId = blogIdString ? parseInt(blogIdString) : null

  const [editor, setEditor] = useState<Editor | null>(null);

  const {data, isPending, isError} = useQuery({
    queryKey: ['getBlogDetail', blogId],
    queryFn: ()=> blogId ? getBlogById(blogId) : undefined,
  })

  const getEditor = (editor: Editor) => {
    setEditor(editor);
  };

  const createDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return(
    <Stack 
        direction={"row"} 
        sx={{ p: 2 }} 
        spacing={3} 
        style={{ overflow: "hidden" }}
        display={'flex'}
        width={'100hw'}
        justifyContent={'space-between'}
      >
        <Stack
          display={'flex'}
          flexGrow={1}
          direction={"column"}
          spacing={2}
          px={'auto'}
        >
          <Box style={{ overflow: "hidden", overflowY: "scroll"}} height={"90VH"}>
            {isError ? 
              <Box 
                flexGrow={1} 
                justifyContent={'center'} 
                alignContent={'center'}
                display={'flex'}
                height={'100%'}
              >
                <Box justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
                  <Typography>
                    Blog not found
                  </Typography>
                  <Link href={PATH.HOME}>
                    Go Back Home
                  </Link>
                </Box>

              </Box>
            :
            <>
              <Stack 
                style={{ borderRadius: "10px", overflow: "hidden" }}
                flex={1}
                height={"310px"}
                position={'relative'}
                mb={2}
              >
                {isPending ? 
                <Skeleton 
                  variant="rounded" 
                  width={'100%'} 
                  height={'100%'}
                  animation="wave"
                /> :
                <Image
                  src={data?.response?.blogCover}
                  style={{ objectFit: "cover" }}
                  fill
                  alt="cover-image"
                />
                }
              </Stack>
              {/* tiptap */}

              <Typography variant="h1" fontSize={'32px'}>{data?.response?.blogTitle}</Typography>
              <Typography sx={{ color : COLORS.PRIMARY_LIGHT }}>{data?.response?.blogDescription}</Typography>
              <Typography> </Typography>
              <Typography sx={{ color : COLORS.PRIMARY_LIGHT }}>Author : {data?.response?.ownerUserName}</Typography>

              {isPending ? 
              <Skeleton 
                variant="rounded"
                width={'100%'} 
                height={'100%'} 
                animation="wave"
              /> 
              : 
                <Tiptap setEditor={getEditor} mode={'read'} jsonConten={JSON.parse(data?.response?.blogContent)}/>
              }
            </>
            }
          
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
            <Typography px={2} fontSize={"20px"} color={COLORS.WHITE}>
              Reads
            </Typography>
            <Divider variant="middle" color={COLORS.WHITE} />
            <Typography align={"center"} fontSize={"40px"} color={COLORS.WHITE}>
              {isPending ? 
                <Skeleton 
                variant="text" 
                width={'100%'} 
                height={'100%'} 
                animation="wave"
                />
                :
                data?.response?.blogView
              }
            </Typography>
          </Stack>
          <Stack
            direction={"column"}
            color={COLORS.PRIMARY_LIGHT}
            borderRadius={"10px"}
            borderColor={COLORS.PRIMARY_LIGHT}
            sx={{ p: 2, border: "1px solid" }}
            spacing={2}
          >
            <Typography fontSize={"20px"}>
              Created <br /> {
                isPending ?
                <Skeleton/>
                :
                createDate(new Date(data?.response?.blogCreateDate))
              }
            </Typography>
            <Typography fontSize={"20px"}>
              Last Edited <br /> {
                isPending ?
                <Skeleton/>
                :
                createDate(new Date(data?.response?.blogLastEdited ?? data?.response?.blogCreateDate))
              }
            </Typography>
            <Divider variant="middle" color={COLORS.PRIMARY_LIGHT} />
            <EditBlog apidata={data?.response} blogId={blogId}/>
          </Stack>
          <CompanyCard />
        </Stack>
      </Stack>
  );
}

interface EditBlogProps {
  blogId: number | null;
  apidata : BlogResponseModel
}

export function EditBlog({blogId, apidata}:EditBlogProps) {
  const [openAlert, setOpenAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openLeave, setOpenLeave] = useState(false);
  const handleOpenLeave = () => setOpenLeave(true);
  const handleCloseLeave = () => setOpenLeave(false);
  const [openBlogEditModal, setOpenBlogEditModal] = useState<boolean>(false);
  const router = useRouter();

  console.log("Blog data",apidata)

  const deleteBlogHandler = async () => {
    if(blogId){
      try {
        const response = await deleteBlog(blogId);
        if(response.status_code === 200){
          console.log("Delete Blog success", response);
          setOpenAlert(true);
          setTimeout(() => {
            router.replace(PATH.HOME)
          }, 1000);
        }
        else{
          console.log("Delete Blog fail", response)
          setOpenErrorAlert(true)
          
        }
      }catch(error){
        console.log("Delete Blog fail",error)
        setOpenErrorAlert(true)
      }
    }
  };

  return (
    <Stack spacing={2}>
      <CopyURLButton blogId={blogId}/>
      <BlogEditor 
        mode={'edit'}
        data={apidata}
        open={openBlogEditModal} 
        onClose={()=>{setOpenBlogEditModal(false)}}
        content={null}
      />
      
      <Button
        variant="outlined"
        onClick={()=>{setOpenBlogEditModal(true)}}
      >
        Edit
      </Button>

      <Button
        variant="outlined"
        style={{ color: COLORS.DANGER, borderColor: COLORS.DANGER }}
        onClick={handleOpenLeave}
      >
        Delete
      </Button>
      <ConfirmDialog
        open={openLeave}
        onClose={handleCloseLeave}
        message={"Are you sure you want to delete this blog?"}
        onConfirm={deleteBlogHandler}
        onCancel={handleCloseLeave}
        confirmColor={COLORS.DANGER}
      />
      <Alert
        message={"Blog deleted"}
        type={"error"}
        open={openAlert}
        handleClose={()=>{}}
      />
      <Alert
        message={"Delete Blog fail"}
        type={"error"}
        open={openErrorAlert}
        handleClose={()=>{setOpenErrorAlert(false)}}
      />
    </Stack>
  );
}
