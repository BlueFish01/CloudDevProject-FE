import { Stack, Box, Container } from "@mui/material";

export default function HomePageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Container 
    sx={{ width: "100vh", height:'100vh', backgroundColor: 'white' }}
    >
      {children}
    </Container>
  );
}
