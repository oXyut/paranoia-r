import * as React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import { Box, Paper, TextField } from '@mui/material';
import {InputLabel, Select, MenuItem, FormControl} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CharInfoContext} from '../../pages/char/edit/[id]';





const EditCoreInformation = (props) => {
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
            PART1 CORE INFORMATION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <TextField
                label="キャラクター名"
                value={charInfo.information.CoreInformation.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.CoreInformation.name = e.target.value; setCharInfo(newCharInfo);}}
              />
            </Grid>
            <Grid xs>
              <FormControl fullWidth>
                  <InputLabel >セキュリティクリアランス</InputLabel>
                <Select
                    label="セキュリティクリアランス"
                    value={charInfo.information.CoreInformation.clearance}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.CoreInformation.clearance = e.target.value; setCharInfo(newCharInfo);}}
                >
                  <MenuItem value={"IR"}>IR</MenuItem>
                  <MenuItem value={"RED"}>RED</MenuItem>
                  <MenuItem value={"ORANGE"}>ORANGE</MenuItem>
                  <MenuItem value={"YELLOW"}>YELLOW</MenuItem>
                  <MenuItem value={"GREEN"}>GREEN</MenuItem>
                  <MenuItem value={"BLUE"}>BLUE</MenuItem>
                  <MenuItem value={"INDIGO"}>INDIGO</MenuItem>
                  <MenuItem value={"UV"}>UV</MenuItem>
                </Select>
                </FormControl>
            </Grid>
            <Grid xs>
              <TextField
                label="ホームセクター"
                value={charInfo.information.CoreInformation.sector}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.CoreInformation.sector = e.target.value; setCharInfo(newCharInfo);}}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs={2}>
              <FormControl fullWidth>
                <InputLabel >性別</InputLabel>
              <Select
                  label="性別"
                  value={charInfo.information.CoreInformation.sex}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.CoreInformation.sex = e.target.value; setCharInfo(newCharInfo);}}
              >
                <MenuItem value={"男性"}>男性</MenuItem>
                <MenuItem value={"女性"}>女性</MenuItem>
                <MenuItem value={"その他"}>その他</MenuItem>
              </Select>
              </FormControl>
            </Grid>
            <Grid xs={2.5}>
              <TextField
                      label="性格1"
                      value={charInfo.information.CoreInformation.personality[0]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.CoreInformation.personality[0] = e.target.value; setCharInfo(newCharInfo);}}
                    />
            </Grid>
            <Grid xs={2.5}>
              <TextField
                      label="性格2"
                      value={charInfo.information.CoreInformation.personality[1]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.CoreInformation.personality[1] = e.target.value; setCharInfo(newCharInfo);}}
                    />
            </Grid>
            <Grid xs={2.5}>
              <TextField
                      label="性格3"
                      value={charInfo.information.CoreInformation.personality[2]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.CoreInformation.personality[2] = e.target.value; setCharInfo(newCharInfo);}}
                    />
            </Grid>
            <Grid xs={2}>
            <TextField
                      label="クローンナンバー"
                      type = "number"
                      value={charInfo.information.CoreInformation.number}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {const newCharInfo = {...charInfo}; newCharInfo.information.CoreInformation.number = Number(e.target.value); setCharInfo(newCharInfo);}}
                    />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default EditCoreInformation;