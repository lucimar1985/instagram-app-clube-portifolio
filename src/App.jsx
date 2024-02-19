import { useState, useEffect } from "react";
import { Stories } from "./components/stories";
import ReactLoading from "react-loading";
import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/navbar";
import { Flex, Screen, Button, Typography } from "./style";
import { darkTheme, lightTheme } from "./style/theme";
import { Header } from "./components/header";
import { Publications } from "./components/publications";
import { getPhotos } from "./services/photos";


function App() {
    const PHOTOS_PER_PAGE = 8;

    const [theme, setTheme] = useState("dark");
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE);

    const releaseLoading = () => setIsLoading(false);

    const themeToggler = () => {
        theme == "light" ? setTheme("dark") : setTheme("light");
    };
    const handlePhotosPerPage = () => {
        setPhotosPerPage(photosPerPage + PHOTOS_PER_PAGE);
        
    };
    

    async function fetchPhotos() {
        setIsLoading(true);
        const data = await getPhotos(photosPerPage, releaseLoading);
        setPhotos(data);
    }

    useEffect(() => {
        fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photosPerPage]);

    return (
        <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
            <Screen>
                <NavBar themeToggler={themeToggler} theme={theme} />

                <Flex gap="2px">
                    <Header />
                    <Stories photos={photos} />
                    <Publications photos={photos} />

                    {isLoading ? (
                        <ReactLoading
                            type="spinningBubbles"
                            color={theme.textPrimary}
                            height={20}
                            width={20}
                        />
                    ) : (
                       <Button onClick={handlePhotosPerPage}>
                        <Typography>Ver Mais</Typography>
                       </Button>
                    )}
                </Flex>
            </Screen>
        </ThemeProvider>
    );
}

export default App;
