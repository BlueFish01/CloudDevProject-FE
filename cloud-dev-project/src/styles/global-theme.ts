import { COLORS } from "@/constants";
import { alpha, createTheme } from "@mui/material/styles";
import { JetBrains_Mono } from "next/font/google";

const jetBrains_mono = JetBrains_Mono({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
      light: COLORS.PRIMARY_LIGHT,
      dark: COLORS.PRIMARY,
      contrastText: COLORS.WHITE,
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
      fontWeight: "800",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "800",
    },
    h3: {
      fontSize: "18px",
    },
    h4: {
      fontSize: "16px",
    },
    h5: {
      fontSize: "14px",
    },
    h6: {
      fontSize: "12px",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "16px",
    },
    caption: {
      fontSize: "15px",
    },
    fontFamily: [
      jetBrains_mono.style.fontFamily,
    ].join(","),
  },
  components: {
    MuiContainer: {
        defaultProps: {
          disableGutters: true,
        }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: 'none',
          fontWeight: 'normal',
        },
        sizeSmall: {
          height: '50px',
          width: '144px',
        },
        sizeMedium: {
          height: '50px',
          width: '300px',
        },
        sizeLarge: {
          height: '60px',
          width: '410px',
        },
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        
      },
      styleOverrides: {
        root: {
          borderRadius: '10px',
          background: COLORS.WHITE,
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        }
      }
    },
  },
});
