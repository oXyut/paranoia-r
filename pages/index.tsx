import SearchAppBar from '../src/components/SearchAppBar'
import { Button } from "@mui/material";
import { NextLinkComposed } from '../src/components/NextLinkComposed';
import testCharInfoWithId from '../public/charInfoWithId.json';
import { useEffect, useState, useContext } from 'react';
import { v4 } from "uuid";



export default function Home() {
  type typeCharInfoWithId = typeof testCharInfoWithId;

  const id = "test-id-1";

  const [uuid, setUuid] = useState<string>(v4());

  // charInfoListを管理するuseState
  const [charInfoList, setCharInfoList] = useState<typeCharInfoWithId>(testCharInfoWithId);

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
            pathname: "/char/edit/"+ uuid
        }}
        variant="contained"
    >
        新しくキャラクターを作成する
      </Button>
    </div>
  )
}
