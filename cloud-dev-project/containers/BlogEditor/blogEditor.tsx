"use client"
import {
    Modal,
    Box,
    Stack,
    Typography,
    IconButton,
    TextField,
    Divider,
    Button,
} from '@mui/material'
import { COLORS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Tiptap from './Tiptap';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "1300px",
    height: "900px",
    bgcolor: COLORS.WHITE,
    boxShadow: 24,
    overflow: "scroll",
    borderRadius: "10px",
    paddingBottom: "0px",
  };


type BlogEditorProps = {
    open: boolean
}

function BlogEditor({
    open
}: BlogEditorProps) {
  return (
    <Modal
        open = {open}
        onClose = {() => {}}
    >
        <Box 
            bgcolor={'white'}
            sx={style}
        >
            <Stack 
                direction={"row"} 
                bgcolor={COLORS.PRIMARY} 
                sx={{ px : 2, py : 1, pr : 1, pb : 0 }}
                height={"45px"}
                justifyContent={"space-between"}
                alignItems={'center'}
            >
                <Typography fontSize={"20px"} color={COLORS.WHITE}>
                Blog Editor
                </Typography>
                <IconButton sx={{width:'24px', height:'24px'}}>
                <FontAwesomeIcon icon={faCircleXmark} style={{color: COLORS.WHITE,}} />
                </IconButton>
                
            </Stack>
            <Stack
                sx={{ px : 2, py : 1, pb: 0}}
                height={'835px'}
            >
                <Stack
                    direction={"row"}
                    height={"250px"}
                    p={1}
                    pr={3}
                    borderRadius={"10px"}
                    bgcolor={COLORS.PRIMARY_LIGHT}
                    alignItems={'center'}
                    columnGap={3}
                    
                >   
                    <Box width={'234px'} height={'234px'} position={'relative'}>
                        <Image 
                            alt='' 
                            src={'/login.png'} 
                            fill
                            style={{
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                        />
                    </Box>
                    <Stack 
                        flexGrow={1}
                        height={'100%'}
                        rowGap={2}
                    >
                        <TextField
                            //{...register("topic")}
                            name="topic"
                            label="Topic"
                            type="text"
                            error={false}
                            fullWidth
                        />
                        <TextField
                            //{...register("description")}
                            name="description"
                            label="Description"
                            type="text"
                            error={false}
                            sx={{height:'100%'}}
                            inputProps={{style: {height: '130px'}}}
                            multiline
                            fullWidth
                        />

                    </Stack>
                    
                </Stack>

                
                    <Tiptap/>
                
        
                <Stack
                    justifyContent={'flex-end'}
                    direction={"row"}
                    columnGap={2}
                    py={1}
                    pb={0}
                >
                    <Button
                        variant={"outlined"}
                        fullWidth
                        size={'small'}
                    >
                        cancle
                    </Button>
                    <Button
                        variant={"contained"}
                        fullWidth
                        size={'small'}
                    >
                        Submit
                    </Button>
                </Stack>
                
            </Stack>
        </Box>

    </Modal>
  )
}

export default BlogEditor