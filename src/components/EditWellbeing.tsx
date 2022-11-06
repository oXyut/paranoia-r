import * as React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import { Box, Paper, Rating, TextField } from '@mui/material';
import {InputLabel, Select, MenuItem} from '@mui/material';
import { FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import UnderlinedBox from './UnderlinedBox';
import {CharInfoContext} from '../../pages/char/edit/[id]';





const EditWellbeing = (props) => {
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
          // sx={{border:1}}
        >
          <Typography component="h3" variant="h6">
            PART5 WELLBEING
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Box sx={{margin: 1, padding:1}}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
              <Typography component="h3" variant="subtitle1">
                  気力
              </Typography>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
              <Rating
                name="simple-controlled"
                value={charInfo.information.Wellbeing.moxie[0]}
                max={charInfo.information.Wellbeing.moxie[1]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const newCharInfo = {...charInfo};
                  newCharInfo.information.Wellbeing.moxie[0] = Number(e.target.value);
                  setCharInfo(newCharInfo);
                }}
              />
            </Box>
          </Box>

          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <Typography component="h3" variant="subtitle1">
                ダメージ
            </Typography>
          </Box>

          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <FormControlLabel
                label="軽傷"
                control={
                  <Checkbox
                    checked={charInfo.information.Wellbeing.Wounds.hurt}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newCharInfo = {...charInfo};
                      newCharInfo.information.Wellbeing.Wounds.hurt = e.target.checked;
                      setCharInfo(newCharInfo);
                    }}
                  />
                }
                />
            </Grid>
            <Grid xs>
              <FormControlLabel
                label="重傷"
                control={
                  <Checkbox
                    checked={charInfo.information.Wellbeing.Wounds.hurt}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newCharInfo = {...charInfo};
                      newCharInfo.information.Wellbeing.Wounds.hurt = e.target.checked;
                      setCharInfo(newCharInfo);
                    }}
                  />
                }
                />
            </Grid>
            <Grid xs>
              <FormControlLabel
                label="瀕死"
                control={
                  <Checkbox
                    checked={charInfo.information.Wellbeing.Wounds.hurt}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newCharInfo = {...charInfo};
                      newCharInfo.information.Wellbeing.Wounds.hurt = e.target.checked;
                      setCharInfo(newCharInfo);
                    }}
                  />
                }
                />
            </Grid>
            <Grid xs>
              <FormControlLabel
                label="死亡"
                control={
                  <Checkbox
                    checked={charInfo.information.Wellbeing.Wounds.hurt}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newCharInfo = {...charInfo};
                      newCharInfo.information.Wellbeing.Wounds.hurt = e.target.checked;
                      setCharInfo(newCharInfo);
                    }}
                  />
                }
                />
            </Grid>
          </Grid>

          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <Typography component="h3" variant="subtitle1">
                記憶
            </Typography>
          </Box>

          <TextField
            fullWidth={true}
            id="outlined-multiline-static"
            multiline={true}
            rows={4}
            variant="outlined"
            defaultValue={charInfo.information.Wellbeing.memory}
          />

        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default EditWellbeing;