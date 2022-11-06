import { Container, Paper, Typography, Button, Box, AppBar, TextField } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
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
import EditSkills from "../../../src/components/EditSkills";
import EditWellbeing from "../../../src/components/EditWellbeing";
import EditEquipment from "../../../src/components/EditEquipment";

type typeCharInfoinitial = typeof charInfoinitial;

export const CharInfoContext = createContext({} as {
    charInfo: typeCharInfoinitial, setCharInfo: React.Dispatch<React.SetStateAction<typeCharInfoinitial>>
});

const CharacterEdit = () => {

    const router = useRouter();
    const { id } = router.query;
    const [charInfo, setCharInfo] = useState<typeCharInfoinitial>(charInfoinitial);
    
    const postCharInfoURL = firebaseURL.root + "postCharInfo";
    const getCharInfoURL = firebaseURL.root + "getCharInfo";

    useEffect(() => {
      if (typeof id === "string") {
        // firebaseからデータを取得
        axios.get(getCharInfoURL, { params: { id: id } })
          .then((res: AxiosResponse) => {
            if (res.data === "not found") {
              // firebaseにデータがない場合は初期値をセット
              // charInfoのidを更新
              setCharInfo(charInfo => ({ ...charInfo, id: id }))
              // 最終更新日時を更新
              setCharInfo(charInfo => ({ ...charInfo, lastUpdate: "保存されていません"}));
            } else {
              // firebaseにデータがある場合はfirebaseから取得したデータをセット
              setCharInfo(res.data);
            }
          })
          .catch((err: AxiosError) => {
            console.log(err);
          })
      }
    }, []);

    const saveCharInfo = async () => {
        console.log("saveCharInfo");
        console.log(charInfo);
        if (typeof id === "string") {
          // charInfoのidと最終更新日時を更新
          const newCharInfo = { ...charInfo, id: id, lastUpdate: new Date().toLocaleString() };
          setCharInfo(newCharInfo);
          // charInfoをfirebaseに保存
          await axios.post(postCharInfoURL, newCharInfo)
          .then((res: AxiosResponse) => {
              console.log(res.data);
          })
          .catch((err: AxiosError) => {
              console.log(err);
          })
        }

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
          }))
    }, [charInfo.information.CoreInformation.clearance]);

    return (
        <div>
            <ThemeProvider theme={theme}>
            <SearchAppBar/>
            <h1>編集モード</h1>
            <p>id is : {id}</p>
            <p>最終更新日時 : {charInfo.lastUpdate}</p>
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
                <TextField
                    label="タグ"
                    variant="outlined"
                    fullWidth
                    value={charInfo.tag}
                    onChange={(e) => setCharInfo(charInfo => ({ ...charInfo, tag: e.target.value }))}
                />
                <CharInfoContext.Provider value={{charInfo: charInfo, setCharInfo: setCharInfo}}>
                  <EditCoreInformation/>
                  <EditDevelopment/>
                  <EditSkills/>
                  <EditWellbeing/>
                  <EditEquipment/>
                </CharInfoContext.Provider>
              </Paper>
            </Container>

            <Box pt={5}>
              <AppBar
                position="fixed"
                sx={{ top: 'auto', bottom: 0 }}
                color="secondary"
                >
                <Box p={2}>
                  <Grid container spacing={2} justifyContent="center" alignItems={"center"}>
                    <Grid xs={6}>
                      <Typography variant="body2" color="text.primary" align="center">
                      </Typography>
                    </Grid>
                    <Grid xs={3}>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={saveCharInfo}
                        >
                        保存
                      </Button>
                    </Grid>
                    <Grid xs={3}>
                    <Button
                      component={NextLinkComposed}
                      to={{pathname: "/char/view/"+id}}
                      variant="contained"
                      fullWidth
                    >
                    閲覧モードへ
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

export default CharacterEdit;