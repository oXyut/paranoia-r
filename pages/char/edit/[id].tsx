import { Container, Paper, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import EditCoreInformation from "../../../src/components/EditCoreInformation";
import SearchAppBar from "../../../src/components/SearchAppBar";
import { NextLinkComposed } from "../../../src/components/NextLinkComposed";
import { useEffect, useState, useContext } from 'react';
import axios, { AxiosResponse, AxiosError } from "axios";

import charInfoinitial from "../../../public/charInfoInitial.json";
import firebaseURL from "../../../public/firebaseURL.json";

const CharacterEdit = () => {

    const router = useRouter();
    const { id } = router.query;
    console.log("/edit/"+id);

    type typeCharInfoinitial = typeof charInfoinitial;
    const getCharInfoURL = firebaseURL.root + "getCharInfo"

    const [CharInfo, SetCharInfo] = useState<typeCharInfoinitial>(charInfoinitial);

    useEffect(() => {
        // idを更新
        if (typeof id === "string") {
        // idがstring型であれば、axiosでキャラクター情報を取得
        axios.get(getCharInfoURL, {
            params:{id: id}
        })
        .then((res: AxiosResponse) => {
            console.log(res.data);
            SetCharInfo(res.data);
        })
        .catch((err: AxiosError) => {
            console.log(err);
        })
        }
    }, [id]);

    return (
        <div>
            <SearchAppBar/>
            <h1>編集モード</h1>
            <p>id is : {CharInfo.id}</p>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center" margin={3}>
                {CharInfo.information.CoreInformation.name}-{CharInfo.information.CoreInformation.clearance}-{CharInfo.information.CoreInformation.sector}-{CharInfo.information.CoreInformation.number}
            </Typography>
            <EditCoreInformation/>
            </Paper>
            </Container>

            <Button
                component={NextLinkComposed}
                to={{
                    pathname: "/char/view/"+id
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
        </div>
    );
}

export default CharacterEdit;