import { createTheme } from "@mui/material";

 const theme = createTheme({
    components: {
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundColor: "#fff",
            border: "1px solid black",
            marginTop: "2px",
            boxShadow: "none",
          },
        },
      },
    },
  });

  export default theme