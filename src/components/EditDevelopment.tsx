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

import { red, deepOrange, yellow, green, blue, indigo, grey } from '@mui/material/colors';




const SmallFontBox = styled(Box)(({ theme }) => ({
  fontSize: 14,
}))

const EditDevelopment = (props) => {
  // console.log(props);
  // const CoreInformation = props.info;

  const {charInfo, setCharInfo} = useContext(CharInfoContext);

    return (
      <>
      <Accordion defaultExpanded={true} variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography component="h3" variant="h6">
          PART2 DEVELOPMENT
        </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <Box sx={{textAlign:"center"}}>
                <SmallFontBox>反逆スター</SmallFontBox>
                <Rating
                  value={charInfo.information.Development.star}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.star = Number(e.target.value); setCharInfo(newCharInfo);}}
                  />
              </Box>
            </Grid>
            <Grid xs>
              <TextField
                      label="XPポイント"
                      type = "number"
                      value={charInfo.information.Development.xp}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.Development.xp = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
          </Grid>

          <Typography component="h3" variant="subtitle1">
            STATS
          </Typography>

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
        </AccordionDetails>
      </Accordion>
      </>
    );
}

export default EditDevelopment;