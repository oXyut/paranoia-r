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
import firebaseURL from "../../../public/firebaseURL.json";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useRouter } from "next/router";
import CharList from '../../../src/components/CharList';
import TopPageFooter from '../../../src/components/TopPageFooter';


const TagSearch = () => {
  type typeCharInfoWithId = typeof testCharInfoWithId;
  const getTaggedCharInfoURL = firebaseURL.root + "getTaggedCharInfo";
  const deleteCharInfoURL = firebaseURL.root + "deleteCharInfo";

  const router = useRouter();
  const { tag } = router.query;

  // charInfoListを管理するuseState
  const [charInfoList, setCharInfoList] = useState<typeCharInfoWithId>([]);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    getTaggedCharInfoHandler();
  }, []);

  const getTaggedCharInfoHandler = async () => {
        // firebaseからtagに紐づくデータを取得
        await axios.post(getTaggedCharInfoURL, { tag: tag })
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
    setIsDeleting(true);
    console.log("deleteCharInfo");
    console.log(id);
    await axios.post(deleteCharInfoURL, { id: id })
      .then((res: AxiosResponse) => {
        console.log(res.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      })
    await getTaggedCharInfoHandler();
    setIsDeleting(false);
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


  return (
    <div>
      <ThemeProvider theme={theme}>
        <SearchAppBar/>
        <h1>タグ検索結果 : {tag}</h1>

        <CharList charInfoList={charInfoList} deleteCharInfoHandler={deleteCharInfoHandler} isDeleting={isDeleting} />

        <TopPageFooter />


      </ThemeProvider>
    </div>
  )
}

export default TagSearch;
