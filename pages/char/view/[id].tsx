import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

import { Grid, Button, Box, Rating, Paper, Container, Typography, } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UnderlinedBox from '../../../src/components/UnderlinedBox';

import SearchAppBar from "../../../src/components/SearchAppBar";
import ViewCoreInformation from "../../../src/components/ViewCoreInformation";
import { NextLinkComposed } from "../../../src/components/NextLinkComposed";
import ViewDevelopment from "../../../src/components/ViewDevelopment";
import ViewSkills from "../../../src/components/ViewSkills";
import ViewWellbeing from "../../../src/components/ViewWellbeing";
import ViewEquipment from "../../../src/components/ViewEquipment";

import testCharInfoWithId from "../../../public/charInfoWithId.json";
import testCharInfoOnlyInfo from "../../../public/charInfoOnlyInfo.json";

type typeCharInfoWithId = typeof testCharInfoWithId;
type typeCharInfoOnlyInfo = typeof testCharInfoOnlyInfo;

const CharacterView = () => {

    const router = useRouter();
    const { id } = router.query;

    const [info, setInfo] = useState<typeCharInfoOnlyInfo>(testCharInfoOnlyInfo);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        console.log("useEffect");
        const { id } = router.query;
        console.log(`id: ${id}`);
        setInfo(testCharInfoWithId.find((char) => char.id === id));
    }, []);

    const handleDataLoad = () => {
        setIsDataLoaded(true);
    }

    const SmallFontBox = styled(Box)(({ theme }) => ({
        fontSize: 14,
      }))


    return (
        <div>
            <SearchAppBar/>
            <h1>閲覧モード</h1>
            <p>id is : {id}</p>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
            {isDataLoaded && ( // jsxなりのif文の書き方らしい
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center" margin={3}>
                        {`${info.information.CoreInformation.name}-${info.information.CoreInformation.clearance}-${info.information.CoreInformation.sector}-${info.information.CoreInformation.number[0]}`}
                    </Typography>

                    <ViewCoreInformation info={info.information.CoreInformation}/>
                    <ViewDevelopment info={info.information.Development}/>
                    <ViewSkills info={info.information.Skills}/>
                    <ViewWellbeing info={info.information.Wellbeing}/>
                    <ViewEquipment info={info.information.Equipment}/>


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