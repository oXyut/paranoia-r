import { Container, Paper, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, deepOrange, yellow, green, blue, indigo, grey } from '@mui/material/colors';
import { useRouter } from "next/router";
import SearchAppBar from "../../../src/components/SearchAppBar";
import { NextLinkComposed } from "../../../src/components/NextLinkComposed";
import { useEffect, useState, createContext, useContext } from 'react';
import axios, { AxiosResponse, AxiosError } from "axios";

import charInfoinitial from "../../../public/charInfoInitial.json";
import firebaseURL from "../../../public/firebaseURL.json";
import EditCoreInformation from "../../../src/components/EditCoreInformation";
import EditDevelopment from "../../../src/components/EditDevelopment";

type typeCharInfoinitial = typeof charInfoinitial;

export const CharInfoContext = createContext({} as {
    charInfo: typeCharInfoinitial, setCharInfo: React.Dispatch<React.SetStateAction<typeCharInfoinitial>>
});

const CharacterEdit = () => {

    const router = useRouter();
    const { id } = router.query;
    console.log("/edit/"+id);

    const getCharInfoURL = firebaseURL.root + "getCharInfo"

    const [charInfo, setCharInfo] = useState<typeCharInfoinitial>(charInfoinitial);

    const dictColor = {
        "IR": "#000000",
        "RED": red[900],
        "ORANGE": deepOrange[500],
        "YELLOW": yellow[800],
        "GREEN": green[800],
        "BLUE": blue[500],
        "INDIGO": indigo[500],
        "UV": grey[500],
      }
    
      // charInfo.information.CoreInformation.clearanceに応じて色を変更
      const [theme, setTheme] = useState(createTheme({
        palette: {
          primary: {
            main: dictColor[charInfo.information.CoreInformation.clearance],
          },
          secondary: {
            main: '#19857b',
          },
        },
      }));

    
    useEffect(() => {
        console.log("change theme:", charInfo.information.CoreInformation.clearance);
        setTheme(createTheme({
            palette: {
              primary: {
                main: dictColor[charInfo.information.CoreInformation.clearance],
              },
              secondary: {
                main: '#19857b',
              },
            },
          }))
    }, [charInfo.information.CoreInformation.clearance]);



    useEffect(() => {
        // idを更新
        if (typeof id === "string") {
        // idがstring型であれば、axiosでキャラクター情報を取得
        // axios.get(getCharInfoURL, {
        //     params:{id: id}
        // })
        // .then((res: AxiosResponse) => {
        //     console.log(res.data);
        //     SetCharInfo(res.data);
        // })
        // .catch((err: AxiosError) => {
        //     console.log(err);
        // })
        }
    }, [id]);

    return (
        <div>
            <ThemeProvider theme={theme}>
            <SearchAppBar/>
            <h1>編集モード</h1>
            <p>id is : {charInfo.id}</p>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography
                component="h1"
                variant="h4"
                align="center"
                margin={3}
                color="primary"
                >
                {charInfo.information.CoreInformation.name}-{charInfo.information.CoreInformation.clearance}-{charInfo.information.CoreInformation.sector}-{charInfo.information.CoreInformation.number[0]}
            </Typography>
            <CharInfoContext.Provider value={{charInfo: charInfo, setCharInfo: setCharInfo}}>
            <EditCoreInformation/>
            <EditDevelopment/>
            </CharInfoContext.Provider>
            </Paper>
            </Container>

            <Button
                component={NextLinkComposed}
                to={{
                    pathname: "/char/edit/"+id
                }}
                variant="contained"
            >
                保存
            </Button>

            <Button
                component={NextLinkComposed}
                to={{
                    pathname: "/char/view/"+id
                }}
                variant="contained"
            >
                閲覧モードへ
            </Button>
            </ThemeProvider>
        </div>
    );
}

export default CharacterEdit;