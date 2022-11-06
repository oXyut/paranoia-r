import SearchAppBar from '../../../src/components/SearchAppBar'
import {Box, AppBar, Typography, Stack, Paper, Container} from '@mui/material'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, deepOrange, yellow, green, blue, indigo, grey } from '@mui/material/colors';
import { Button } from "@mui/material";
import { NextLinkComposed } from '../../../src/components/NextLinkComposed';
import testCharInfoWithId from '../../../public/charInfoWithId.json';
import { useEffect, useState, useContext } from 'react';
import { v4 } from "uuid";
import firebaseURL from "../../../public/firebaseURL.json";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useRouter } from "next/router";



const TagSearch = () => {
  type typeCharInfoWithId = typeof testCharInfoWithId;
  const getTaggedCharInfoURL = firebaseURL.root + "getTaggedCharInfo";
  const deleteCharInfoURL = firebaseURL.root + "deleteCharInfo";

  const router = useRouter();
  const { tag } = router.query;

  const [uuid, setUuid] = useState<string>(v4());

  // charInfoListを管理するuseState
  const [charInfoList, setCharInfoList] = useState<typeCharInfoWithId>([]);

  useEffect(() => {
    getTaggedCharInfoHandler();
  }, []);

  const getTaggedCharInfoHandler = () => {
        // firebaseからtagに紐づくデータを取得
        axios.post(getTaggedCharInfoURL, { tag: tag })
        .then((res: AxiosResponse) => {
            console.log(res.data);
            setCharInfoList(res.data);
            }
        )
        .catch((err: AxiosError) => {
            console.log(err);
            }
        )
  }

  const deleteCharInfoHandler = async (id: string) => {
    console.log("deleteCharInfo");
    console.log(id);
    await axios.post(deleteCharInfoURL, { id: id })
      .then((res: AxiosResponse) => {
        console.log(res.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      })
    setTimeout(()=>{getTaggedCharInfoHandler()}, 1000);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
      secondary: {
        main: "#ffffff",
      },
    },
  })

  const [charInfoThemeList, setCharInfoThemeList] = useState({});

  useEffect(() => {
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
    let newCharInfoThemeList = {};
    // idをキーにしてthemeを作成
    for (const charInfo of charInfoList) {
      newCharInfoThemeList[charInfo.id] = createTheme({
        palette: {
          primary: {
            main: dictColor[charInfo.information.CoreInformation.clearance],
          },
          secondary: {
            main: "#ffffff",
          },
        },
      })
    }
    setCharInfoThemeList(newCharInfoThemeList);
  }, [charInfoList]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <SearchAppBar/>
        <h1>タグ検索結果 : {tag}</h1>

        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Accordion defaultExpanded={true} variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography component="h3" variant="h6">
          キャラクター一覧
        </Typography>

        </AccordionSummary>
        <AccordionDetails>
        {
          (Object.keys(charInfoThemeList).length > 0) ? (
        <Stack spacing={2}>
          {charInfoList.map((charInfo) => (
            <Paper variant="outlined" key={charInfo.id}>
            <Grid container spacing={2} margin={1} p={1}>
              <Grid xs={9}>
                <ThemeProvider theme={charInfoThemeList[charInfo.id]}>
                <Typography
                  variant="h6"
                  color={"primary"}
                >
                  {charInfo.information.CoreInformation.name}-{charInfo.information.CoreInformation.clearance}-{charInfo.information.CoreInformation.sector}-{charInfo.information.CoreInformation.number[0]}
                </Typography>
                </ThemeProvider>
                <Grid container>
                  <Grid xs={6}>
                    <Typography variant="body1">
                      最終更新日時 : {charInfo.lastUpdate}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={NextLinkComposed}
                    to={{pathname: "/char/view/"+ charInfo.id}}
                  >
                    閲覧
                  </Button>
              </Grid>
              <Grid xs={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={NextLinkComposed}
                    to={{pathname: "/char/edit/"+ charInfo.id}}
                  >
                    編集
                  </Button>
              </Grid>
              <Grid xs={1}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      console.log("削除ボタンが押されました");
                      deleteCharInfoHandler(charInfo.id);
                    }}
                  >
                    削除
                  </Button>
              </Grid>
            </Grid>
            </Paper>
          ))}
        </Stack>
        ) : (
          <Typography variant="body1">
            キャラクターが存在しません
          </Typography>
        )
        }
        </AccordionDetails>
        </Accordion>
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
                </Grid>
                <Grid xs={3}>
                  <Button
                    component={NextLinkComposed}
                    to={{
                        pathname: "/char/edit/"+ uuid
                    }}
                    variant="contained"
                >
                    新しくキャラクターを作成
                  </Button>
                </Grid>
              </Grid>
              </Box>
            </AppBar>
          </Box>

      </ThemeProvider>
    </div>
  )
}

export default TagSearch;
