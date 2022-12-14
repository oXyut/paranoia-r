import {Box, AppBar, Typography, Stack, Paper, Container, LinearProgress} from '@mui/material'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, deepOrange, yellow, green, blue, indigo, grey } from '@mui/material/colors';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { NextLinkComposed } from './NextLinkComposed';
import { useEffect, useState, useContext } from 'react';
import { v4 } from "uuid";
import axios, { AxiosResponse, AxiosError } from "axios";
import testCharInfoWithId from '../../public/charInfoWithId.json';


type typeCharInfoWithId = typeof testCharInfoWithId;

type Props = {
    charInfoList: typeCharInfoWithId,
    isDeleting: boolean,
    deleteCharInfoHandler: (id: string) => void,
}

type typeIsDeleteDict = {
    id : string,
    isDelete : boolean,
}

const CharList = (props: Props) => {
    const {charInfoList, isDeleting, deleteCharInfoHandler} = props;
    const [charInfoThemeList, setCharInfoThemeList] = useState({});
    const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

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


    type deleteDialogPropsType = {
        id: string,
    }
    // ダイアログのレンダリング
    const DeleteDialog = (props: deleteDialogPropsType) => {
        console.log("renderDialog");
        return (
            <Dialog
                open={isOpenDialog}
                onClose={() => {setIsOpenDialog(false)}}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"削除しますか？"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        削除したキャラクターは復元できません。
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {setIsOpenDialog(false)}}
                        >キャンセル</Button>
                    <Button
                        onClick={() => {
                            deleteCharInfoHandler(props.id);
                            setIsOpenDialog(false);
                        }}
                    >削除</Button>
                </DialogActions>
            </Dialog>
        )
    }

    return (
        <div>
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
                // 削除中の場合はローディングを表示
                // 場所が悪いので，削除中のカードの下に表示したいがやり方がわからない
                isDeleting && <LinearProgress />
            }
            {
            (Object.keys(charInfoThemeList).length > 0) ? (
            <Stack spacing={2}>
            {charInfoList.map((charInfo) => (
                <Paper variant="outlined" key={charInfo.id}>
                <Grid container spacing={1} margin={1} p={1}>
                <Grid xs={7.5}>
                    <ThemeProvider theme={charInfoThemeList[charInfo.id]}>
                    <Typography
                    variant="h6"
                    color={"primary"}
                    >
                    {charInfo.information.CoreInformation.name}-{charInfo.information.CoreInformation.clearance}-{charInfo.information.CoreInformation.sector}-{charInfo.information.CoreInformation.number[0]}
                    </Typography>
                    </ThemeProvider>
                    <Grid container>
                    <Grid xs={4}>
                        <Typography variant="body1">
                        タグ : {charInfo.tag}
                        </Typography>
                    </Grid>
                    <Grid xs={8}>
                        <Typography variant="body1">
                        最終更新日時 : {charInfo.lastUpdate}
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid xs={1.5}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<VisibilityIcon />}
                        fullWidth
                        component={NextLinkComposed}
                        to={{pathname: "/char/view/"+ charInfo.id}}
                    >
                        閲覧
                    </Button>
                </Grid>
                <Grid xs={1.5}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<EditIcon />}
                        component={NextLinkComposed}
                        to={{pathname: "/char/edit/"+ charInfo.id}}
                    >
                        編集
                    </Button>
                </Grid>
                <Grid xs={1.5}>
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        fullWidth
                        onClick={() => {
                            console.log("削除ボタンが押されました")
                            setIsOpenDialog(true);
                        }}
                    >
                        削除
                    </Button>
                </Grid>
                </Grid>
                <DeleteDialog id={charInfo.id}/>
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
        </div>
    );
}

export default CharList;