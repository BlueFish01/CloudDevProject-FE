import { COLORS } from "@/constants";
import { Backdrop } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';


function Loading() {
  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: 999}}
        open={true}   
        >
        <CircularProgress sx={{color:COLORS.PRIMARY_LIGHT}} />
    </Backdrop>
  )
}

export default Loading