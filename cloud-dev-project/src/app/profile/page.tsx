"use client";
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
import React from "react";
import * as yup from "yup";



// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "1150px",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
// };

// // function EditProfileBT() {
// //   const [open, setOpen] = React.useState(false);
// //   const handleOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);

// //   return (
// //     <Stack flexGrow={1} alignItems={"flex-end"} sx={{ pr: 2, pb: 2, pt: 5 }}>
// //       <Button variant="outlined" onClick={handleOpen}>
// //         Edit Profile
// //       </Button>
// //       <Modal open={open} onClose={handleClose}>
// //         <Box sx={style} borderRadius={2}>
// //           <Stack bgcolor={COLORS.PRIMARY} borderRadius={1}>
// //             <Typography color={COLORS.WHITE} sx={{ p: 2 }}>
// //               Edit Profile
// //             </Typography>
// //           </Stack>
// //           <Stack sx={{ p: 2 }} spacing={4}>
// //             <Stack direction={"row"} justifyContent={"space-between"}>
// //               <Stack direction={"column"} spacing={4} flexGrow={1} sx={{pr:2}}>
// //                 <Stack direction={"row"} spacing={4}>
// //                   <TextField
// //                     id="outlined-basic"
// //                     label="Name"
// //                     variant="outlined"
// //                     fullWidth
// //                   />
// //                   <TextField
// //                     id="outlined-basic"
// //                     label="Surname"
// //                     variant="outlined"
// //                     fullWidth
// //                   />
// //                 </Stack>

// //                 <TextField
// //                   id="outlined-basic"
// //                   label="City"
// //                   variant="outlined"
// //                   fullWidth
// //                 />
// //               </Stack>
// //               <Stack alignContent={"flex-end"}>
// //                 <img src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png" />
// //               </Stack>
// //             </Stack>

// //             <Stack direction={"row"} spacing={3}>
// //               <TextField
// //                 id="outlined-basic"
// //                 label="IG"
// //                 variant="outlined"
// //                 fullWidth
// //               />
// //               <TextField
// //                 id="outlined-basic"
// //                 label="Discord"
// //                 variant="outlined"
// //                 fullWidth
// //               />
// //               <TextField
// //                 id="outlined-basic"
// //                 label="LinkedIn"
// //                 variant="outlined"
// //                 fullWidth
// //               />
// //             </Stack>
// //             <TextField
// //               id="outlined-multiline-static"
// //               multiline
// //               label="About"
// //               variant="outlined"
// //               rows={6}
// //             />
// //             <Stack flexGrow={1} alignItems={"flex-end"}>
// //               <Stack direction={"row"} spacing={2}>
// //                 <Button variant="outlined">Cancel</Button>
// //                 <Button variant="contained">Save</Button>
// //               </Stack>
// //             </Stack>
// //           </Stack>
// //         </Box>
// //       </Modal>
// //     </Stack>
// //   );
// // }

// // export default EditProfileBT;
