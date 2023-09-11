import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from '@/constants'
import { 
  Container,
  Button,
  Box,
} from '@mui/material';

function page() {
  return (
    <Container>
      <Box flex={1} height={'100vh'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button variant={"contained"} size={"medium"}>Click Me</Button>
      </Box>
      
    </Container>
  );
}

export default page;
