import SearchAppBar from '../src/components/SearchAppBar'
import {Button, Box, AppBar, Typography, Stack, Paper, Container, LinearProgress} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, deepOrange, yellow, green, blue, indigo, grey } from '@mui/material/colors';
import { NextLinkComposed } from '../src/components/NextLinkComposed';
import testCharInfoWithId from '../public/charInfoWithId.json';
import { useEffect, useState, useContext, createContext } from 'react';
import { v4 } from "uuid";
import firebaseURL from "../public/firebaseURL.json";
import axios, { AxiosResponse, AxiosError } from "axios";
import CharList from '../src/components/CharList';
import { useRouter } from 'next/router'
import TopPageFooter from "../src/components/TopPageFooter";

type typeCharInfoWithId = typeof testCharInfoWithId;
const getAllCharInfoURL = firebaseURL.root + "getAllCharInfo";
const deleteCharInfoURL = firebaseURL.root + "deleteCharInfo";


export default function Home() {
  const router = useRouter();

  // charInfoListを管理するuseState
  const [charInfoList, setCharInfoList] = useState<typeCharInfoWithId>([]);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // useStateをuseContextでexport

  useEffect(() => {
    getAllCharInfoHandler();
  }, []);

  const getAllCharInfoHandler = async () => {
        // firebaseからデータを取得
        await axios.get(getAllCharInfoURL)
        .then((res: AxiosResponse) => {
          console.log(res.data);
          setCharInfoList(res.data);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        })
  }

  const deleteCharInfoHandler = async (id: string) => {
    console.log("deleteCharInfo");
    console.log(id);
    setIsDeleting(true);
    await axios.post(deleteCharInfoURL, { id: id })
      .then((res: AxiosResponse) => {
        console.log(res.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      })
    await getAllCharInfoHandler();
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
        <h1>パラノイアリブーテッド用キャラクターシート作成サイト</h1>

        <CharList charInfoList={charInfoList} deleteCharInfoHandler={deleteCharInfoHandler} isDeleting={isDeleting}/>

        <TopPageFooter/>

      </ThemeProvider>
    </div>
  )
}
