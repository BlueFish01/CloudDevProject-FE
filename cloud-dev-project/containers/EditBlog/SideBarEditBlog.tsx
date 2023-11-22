import { BlogResponseModel } from "@/models";
import { useState } from "react";
import { useRouter } from "next/navigation";
import deleteBlog from "@/apiCaller/deleteBlog";
import { PATH, COLORS } from "@/constants";
import { Stack, Button } from "@mui/material";
import CopyURLButton from "@/containers/EditBlog/CopyURL";
import BlogEditor from "@/containers/BlogEditor/blogEditor";
import ConfirmDialog from "@/components/Dialog/confirmDialog";
import Alert from "@/components/Alert/alert";
import { useCookies } from "react-cookie";
interface EditBlogProps {
    blogId: number | null;
    apidata : BlogResponseModel
  }
  
  export default function EditBlog({blogId, apidata}:EditBlogProps) {
    const [cookie, setCookie, removeCookie] = useCookies(["authToken"]);
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
          const response = await deleteBlog(blogId, cookie.authToken);
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