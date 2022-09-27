import { Button, Paper, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

import { set, ref, onValue, remove, update, child, get } from 'firebase/database';
import db from "../../../database/firebase";

import SearchAppBar from "../../../src/components/SearchAppBar";
import ViewCoreInformation from "../../../src/components/ViewCoreInformation";
import { NextLinkComposed } from "../../../src/components/NextLinkComposed";
import ViewDevelopment from "../../../src/components/ViewDevelopment";
import ViewSkills from "../../../src/components/ViewSkills";
import ViewWellbeing from "../../../src/components/ViewWellbeing";
import ViewEquipment from "../../../src/components/ViewEquipment";
import InfoTypes from "../../../src/components/InfoTypes"

const CharacterView = () => {

    const router = useRouter();
    const { id } = router.query;

    const [info, setInfo] = useState<InfoTypes>({
        CoreInformation: {
            name: "ADAM",
            clearance: "UV",
            sector: "JPN",
            number: 5,
            sex: "男",
            personality: ["短気", "優柔不断", "臆病"]
            },
            Development: {
                star: 3,
                xp: 100,
                Stats: {
                    violence: [2,0],
                    brains: [1,0],
                    chutzpah: [0,0],
                    mechanics: [0,0]
                }
            },
            Skills: {
                Violence: {
                    athletics: [0,0],
                    guns: [-2,0],
                    melee: [0,0],
                    throw: [0,0]
                },
                Brains: {
                    science: [0,0],
                    psychology: [2,0],
                    bureaucracy: [3,0],
                    alpha_complex: [1,0]
                },
                Chutzpah: {
                    bluff: [5,0],
                    charm: [0,0],
                    intimidate: [-5,0],
                    stealth: [4,0]
                },
                Mechanics: {
                    operate: [0,0],
                    engineer: [-3,0],
                    program: [-4,0],
                    demolitions: [-1,0]
                }
            },
            Wellbeing: {
                moxie: [7, 8],
                Wounds: {
                    hurt: true,
                    injured: false,
                    maimed: false,
                    dead: false
                },
                memory: "this is a memory"
            },
            Equipment: ["ZAPガン", "ジャンプスーツ", "ザ・コンピュータ様への忠誠心"]
        });
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        console.log("useEffect");
        const { id } = router.query;
        console.log(`id: ${id}`);
        get(child(ref(db), `posts/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setInfo(snapshot.val().charInfo);
                setIsDataLoaded(true);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    const handleDataLoad = () => {
        console.log("handleDataLoad");
        get(child(ref(db), `posts/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            setInfo(snapshot.val().charInfo);
            } else {
            console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
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
                        {`${info.CoreInformation.name}-${info.CoreInformation.clearance}-${info.CoreInformation.sector}-${info.CoreInformation.number}`}
                    </Typography>
                    <ViewCoreInformation info={info.CoreInformation}/>
                    <ViewDevelopment info={info.Development}/>
                    <ViewSkills info={info.Skills}/>
                    <ViewWellbeing info={info.Wellbeing}/>
                    <ViewEquipment info={info.Equipment}/>
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