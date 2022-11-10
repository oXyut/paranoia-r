import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

import { Grid, Button, Box, Rating, Paper, Container, Typography, AppBar, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, deepOrange, yellow, green, blue, indigo, grey } from '@mui/material/colors';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import SaveIcon from '@mui/icons-material/Save';
import OutputIcon from '@mui/icons-material/Output';

import SearchAppBar from "../../../src/components/SearchAppBar";
import { NextLinkComposed } from "../../../src/components/NextLinkComposed";
import ViewSecret from "../../../src/components/ViewSecret";
import ViewCoreInformation from "../../../src/components/ViewCoreInformation";
import ViewDevelopment from "../../../src/components/ViewDevelopment";
import ViewSkills from "../../../src/components/ViewSkills";
import ViewWellbeing from "../../../src/components/ViewWellbeing";
import ViewEquipment from "../../../src/components/ViewEquipment";

import testCharInfoInitial from "../../../public/charInfoInitial.json";
import firebaseURL from "../../../public/firebaseURL.json";
import axios, { AxiosResponse, AxiosError } from "axios";


type typeCharInfo = typeof testCharInfoInitial;

const CharacterView = () => {

    const router = useRouter();
    const { id } = router.query;
    const getCharInfoURL = firebaseURL.root + "getCharInfo";

    const [charInfo, setCharInfo] = useState<typeCharInfo>(testCharInfoInitial);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        const { id } = router.query;
        if (typeof id === "string") {
            axios.get(getCharInfoURL, { params: { id: id } })
                .then((res: AxiosResponse) => {
                    setCharInfo(res.data);
                    setIsDataLoaded(true);
                })
                .catch((err: AxiosError) => {
                    console.log(err);
                })
        }
    }, []);

    useEffect(() => {
        setTheme(createTheme({
            palette: {
              primary: {
                main: dictColor[charInfo.information.CoreInformation.clearance],
              },
              secondary: {
                main: "#ffffff",
              },
            },
          }));
    }, [charInfo]);

    const handleDataLoad = () => {
        setIsDataLoaded(true);
    }

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
            main: "#ffffff",
          },
        },
      }));

      //パスワードが正しいかチェック
      const checkPassword = () => {
        if (password === charInfo.password) {
          setIsPasswordCorrect(true);
        } else {
          setIsPasswordCorrect(false);
        }
      }


    return (
        <div>
            <ThemeProvider theme={theme}>
            <SearchAppBar/>
            <h1>閲覧モード</h1>
            <p>id is : {id}</p>
            <p>最終更新日時 : {charInfo.lastUpdate}</p>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
            {isDataLoaded && ( // jsxなりのif文の書き方らしい
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography
                      component="h1"
                      variant="h4"
                      align="center"
                      margin={3}
                      color="primary"
                      >
                        {`${charInfo.information.CoreInformation.name}-${charInfo.information.CoreInformation.clearance}-${charInfo.information.CoreInformation.sector}-${charInfo.information.CoreInformation.number[0]}`}
                    </Typography>

                    <Typography
                      component="h2"
                      variant="h6"
                      margin={3}
                      >
                        {`タグ : ${charInfo.tag}`}
                    </Typography>

                    {isPasswordCorrect? (<ViewSecret info={charInfo.information.Secret}/>):(null)}
                    <ViewCoreInformation info={charInfo.information.CoreInformation}/>
                    <ViewDevelopment info={charInfo.information.Development}/>
                    <ViewSkills info={charInfo.information.Skills}/>
                    <ViewWellbeing info={charInfo.information.Wellbeing}/>
                    <ViewEquipment info={charInfo.information.Equipment}/>


                    </Paper>
            )}
            {!isDataLoaded && (
                <Button onClick={handleDataLoad}>Data Loading...</Button>
            )}
            </Container>

            <Box pt={5}>
              <AppBar
                position="fixed"
                sx={{ top: 'auto', bottom: 0 }}
                color="secondary"
                >
                <Box p={2}>
                  <Grid container spacing={2} justifyContent="center" alignItems={"center"}>
                    <Grid xs={3} p={1}>
                      <TextField
                        label="パスワード"
                        fullWidth
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />

                    </Grid>
                    <Grid xs={3} p={1}>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<VisibilityIcon />}
                        sx={{backgroundColor: grey[900]}}
                        onClick={checkPassword}
                      >
                        秘匿情報の表示
                      </Button>
                    </Grid>
                    <Grid xs={3} p={1}>
                      <Button
                        variant="contained"
                        endIcon={<OutputIcon/>}
                        sx={{backgroundColor: grey[900]}}
                        fullWidth
                      >
                        ココフォリアへ出力
                      </Button>
                    </Grid>
                    <Grid xs={3} p={1}>
                    <Button
                      startIcon={<EditIcon/>}
                      component={NextLinkComposed}
                      to={{pathname: "/char/edit/"+id}}
                      variant="contained"
                      sx={{backgroundColor: grey[900]}}
                      fullWidth
                    >
                    編集モードへ
                    </Button>
                    </Grid>
                  </Grid>
                  </Box>
                </AppBar>
              </Box>
            </ThemeProvider>
        </div>
    );
}

export default CharacterView;