import { Button, Paper, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

import SearchAppBar from "../../../src/components/SearchAppBar";
import ViewCoreInformation from "../../../src/components/ViewCoreInformation";
import { NextLinkComposed } from "../../../src/components/NextLinkComposed";
import ViewDevelopment from "../../../src/components/ViewDevelopment";
import ViewSkills from "../../../src/components/ViewSkills";
import ViewWellbeing from "../../../src/components/ViewWellbeing";
import ViewEquipment from "../../../src/components/ViewEquipment";
import testCharInfo from "../../../public/testCharInfo.json";

type typeCharInfo = typeof testCharInfo;

const CharacterView = () => {

    const router = useRouter();
    const { id } = router.query;

    const [info, setInfo] = useState<typeCharInfo>(testCharInfo);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        console.log("useEffect");
        const { id } = router.query;
        console.log(`id: ${id}`);
    }, []);

    const handleDataLoad = () => {
        setIsDataLoaded(true);
    }


    return (
        <div>
            <SearchAppBar/>
            <h1>閲覧モード</h1>
            <p>id is : {id}</p>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
            {isDataLoaded && ( // jsxなりのif文の書き方らしい
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center" margin={3}>
                        {`${info.info.CoreInformation.name}-${info.info.CoreInformation.clearance}-${info.info.CoreInformation.sector}-${info.info.CoreInformation.number}`}
                    </Typography>
                    <ViewCoreInformation info={info.info.CoreInformation}/>
                    <ViewDevelopment info={info.info.Development}/>
                    <ViewSkills info={info.info.Skills}/>
                    <ViewWellbeing info={info.info.Wellbeing}/>
                    <ViewEquipment info={info.info.Equipment}/>
                    </Paper>
            )}
            {!isDataLoaded && (
                <Button onClick={handleDataLoad}>Data Loading...</Button>
            )}
            </Container>

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
    );
}

export default CharacterView;