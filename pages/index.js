import Head from 'next/head'
import Image from 'next/image'
import SearchAppBar from '../src/components/SearchAppBar'
import styles from '../styles/Home.module.css'
import { Button } from "@mui/material";
import { NextLinkComposed } from '../src/components/NextLinkComposed';

export default function Home() {

  const id = "xxx";

  return (
    <div>
      <SearchAppBar/>
      <h1>パラノイアリブーテッド用キャラクターシート作成サイト</h1>

      <Button
        component={NextLinkComposed}
        to={{
            pathname: "/char/view/"+id
        }}
        variant="contained"
    >
        閲覧モードへ
      </Button>

      <Button
        component={NextLinkComposed}
        to={{
            pathname: "/char/edit/"+id
        }}
        variant="contained"
    >
        編集モードへ
      </Button>
    </div>
  )
}
