import * as React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import { Box, Paper, TextField, Rating } from '@mui/material';
import {InputLabel, Select, MenuItem, FormControl} from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CharInfoContext} from '../../pages/char/edit/[id]';
import UnderlinedBox from './UnderlinedBox';




const SmallFontBox = styled(Box)(({ theme }) => ({
  fontSize: 14,
}))

const EditSkills = (props) => {
  // console.log(props);
  // const CoreInformation = props.info;

  const {charInfo, setCharInfo} = useContext(CharInfoContext);

  useEffect(() => {
    console.log("EditDevelopment");
    const newCharInfo = {...charInfo};
    const numberLimit = 5
      - newCharInfo.information.Development.Stats.violence[1]
      - newCharInfo.information.Development.Stats.brains[1]
      - newCharInfo.information.Development.Stats.chutzpah[1]
      - newCharInfo.information.Development.Stats.mechanics[1];
    newCharInfo.information.CoreInformation.number[1] = numberLimit;
    setCharInfo(newCharInfo);
  },[
    charInfo.information.Development.Stats.violence[1],
    charInfo.information.Development.Stats.brains[1],
    charInfo.information.Development.Stats.chutzpah[1],
    charInfo.information.Development.Stats.mechanics[1]
  ]);

    return (
      <>
      <Accordion defaultExpanded={true} variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography component="h3" variant="h6">
          PART3 SKILLS
        </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <Box sx={{textAlign: 'center'}}>
                <Typography>暴力</Typography>
              </Box>
            </Grid>
            <Grid xs>
              <Box sx={{textAlign: 'center'}}>
                <Typography>知力</Typography>
              </Box>
            </Grid>
            <Grid xs>
              <Box sx={{textAlign: 'center'}}>
                <Typography>交渉力</Typography>
              </Box>
            </Grid>
            <Grid xs>
              <Box sx={{textAlign: 'center'}}>
                <Typography>技術力</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <TextField
                      label="暴力"
                      type = "number"
                      value={charInfo.information.Development.Stats.violence[0]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.Stats.violence[0] = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
            <Grid xs>
              <TextField
                      label="知力"
                      type = "number"
                      value={charInfo.information.Development.Stats.brains[0]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.Stats.brains[0] = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
            <Grid xs>
              <TextField
                      label="交渉力"
                      type = "number"
                      value={charInfo.information.Development.Stats.chutzpah[0]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.Stats.chutzpah[0] = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
            <Grid xs>
              <TextField
                      label="技術力"
                      type = "number"
                      value={charInfo.information.Development.Stats.mechanics[0]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.Stats.mechanics[0] = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
          </Grid>


          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <TextField
                      label="暴力"
                      type = "number"
                      value={charInfo.information.Development.Stats.violence[1]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.Stats.violence[1] = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
            <Grid xs>
              <TextField
                      label="知力"
                      type = "number"
                      value={charInfo.information.Development.Stats.brains[1]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.Stats.brains[1] = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
            <Grid xs>
              <TextField
                      label="交渉力"
                      type = "number"
                      value={charInfo.information.Development.Stats.chutzpah[1]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.Stats.chutzpah[1] = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
            <Grid xs>
              <TextField
                      label="技術力"
                      type = "number"
                      value={charInfo.information.Development.Stats.mechanics[1]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.Stats.mechanics[1] = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <TextField
                      label="暴力"
                      type = "number"
                      value={charInfo.information.Development.Stats.violence[0] + charInfo.information.Development.Stats.violence[1]}
                    />
            </Grid>
            <Grid xs>
              <TextField
                      label="知力"
                      type = "number"
                      value={charInfo.information.Development.Stats.brains[0] + charInfo.information.Development.Stats.brains[1]}
                    />
            </Grid>
            <Grid xs>
              <TextField
                      label="交渉力"
                      type = "number"
                      value={charInfo.information.Development.Stats.chutzpah[0] + charInfo.information.Development.Stats.chutzpah[1]}
                    />
            </Grid>
            <Grid xs>
              <TextField
                      label="技術力"
                      type = "number"
                      value={charInfo.information.Development.Stats.mechanics[0] + charInfo.information.Development.Stats.mechanics[1]}
                    />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      </>
    );
}

export default EditSkills;