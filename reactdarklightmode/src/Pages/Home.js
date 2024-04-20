import React, {useContext} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header';
import { ColorModeContext } from "../theme";
import { ThemeProvider, useTheme } from "@mui/material";

const Home = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
           
            <CssBaseline />
            <Container maxWidth="lg">
              <Header/>
             
            </Container>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
    
}

export default Home;