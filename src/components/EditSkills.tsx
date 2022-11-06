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
    const newCharInfo = {...charInfo};
    const moxieLimit = 8
      -charInfo.information.Skills.Violence.athletics[1]
      -charInfo.information.Skills.Violence.guns[1]
      -charInfo.information.Skills.Violence.melee[1]
      -charInfo.information.Skills.Violence.throw[1]
      -charInfo.information.Skills.Brains.science[1]
      -charInfo.information.Skills.Brains.psychology[1]
      -charInfo.information.Skills.Brains.bureaucracy[1]
      -charInfo.information.Skills.Brains.alpha_complex[1]
      -charInfo.information.Skills.Chutzpah.bluff[1]
      -charInfo.information.Skills.Chutzpah.charm[1]
      -charInfo.information.Skills.Chutzpah.intimidate[1]
      -charInfo.information.Skills.Chutzpah.stealth[1]
      -charInfo.information.Skills.Mechanics.operate[1]
      -charInfo.information.Skills.Mechanics.engineer[1]
      -charInfo.information.Skills.Mechanics.program[1]
      -charInfo.information.Skills.Mechanics.demolitions[1];
    newCharInfo.information.Wellbeing.moxie[1] = moxieLimit;
    setCharInfo(newCharInfo);
  },[
    charInfo.information.Skills.Violence.athletics[1],
    charInfo.information.Skills.Violence.guns[1],
    charInfo.information.Skills.Violence.melee[1],
    charInfo.information.Skills.Violence.throw[1],
    charInfo.information.Skills.Brains.science[1],
    charInfo.information.Skills.Brains.psychology[1],
    charInfo.information.Skills.Brains.bureaucracy[1],
    charInfo.information.Skills.Brains.alpha_complex[1],
    charInfo.information.Skills.Chutzpah.bluff[1],
    charInfo.information.Skills.Chutzpah.charm[1],
    charInfo.information.Skills.Chutzpah.intimidate[1],
    charInfo.information.Skills.Chutzpah.stealth[1],
    charInfo.information.Skills.Mechanics.operate[1],
    charInfo.information.Skills.Mechanics.engineer[1],
    charInfo.information.Skills.Mechanics.program[1],
    charInfo.information.Skills.Mechanics.demolitions[1],
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
          {/* charInfo.information.Skillsを編集 */}
          <Box borderBottom={1} borderColor="grey.400" width="100%">
            <Grid container spacing={1} sx={{margin: 0}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 0}}>
                  <Typography component="h3" variant="subtitle1">
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 0}}>
                  <Typography component="h3" variant="subtitle1">
                    基本値
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 0}}>
                  <Typography component="h3" variant="subtitle1">
                    増加値
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 0}}>
                  <Typography component="h3" variant="subtitle1">
                    合計値
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box borderBottom={1} borderColor="grey.400" width="100%">
            <Box sx={{margin: 1}}>
            <Typography component="h3" variant="subtitle1">
              暴力に関連するスキル
            </Typography>
            </Box>

            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    運動
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.athletics[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Violence.athletics[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.athletics[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Violence.athletics[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.athletics[0]+charInfo.information.Skills.Violence.athletics[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    銃器
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.guns[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Violence.guns[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.guns[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Violence.guns[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.guns[0]+charInfo.information.Skills.Violence.guns[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    接近戦
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.melee[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Violence.melee[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.melee[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Violence.melee[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.melee[0]+charInfo.information.Skills.Violence.melee[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    巧投
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.throw[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Violence.throw[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.throw[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Violence.throw[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Violence.throw[0]+charInfo.information.Skills.Violence.throw[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
          </Box>

          <Box borderBottom={1} borderColor="grey.400" width="100%">
            <Box sx={{margin: 1}}>
              <Typography component="h3" variant="subtitle1">
                知力に関連するスキル
              </Typography>
            </Box>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    科学
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.science[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Brains.science[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.science[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Brains.science[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.science[0]+charInfo.information.Skills.Brains.science[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    心理学
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.psychology[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Brains.psychology[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.psychology[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Brains.psychology[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.psychology[0]+charInfo.information.Skills.Brains.psychology[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    官僚主義
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.bureaucracy[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Brains.bureaucracy[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.bureaucracy[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Brains.bureaucracy[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.bureaucracy[0]+charInfo.information.Skills.Brains.bureaucracy[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle2">
                    アルファコンプレックス
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.alpha_complex[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Brains.alpha_complex[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.alpha_complex[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Brains.alpha_complex[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Brains.alpha_complex[0]+charInfo.information.Skills.Brains.alpha_complex[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
          </Box>

          <Box borderBottom={1} borderColor="grey.400" width="100%">
            <Box sx={{margin: 1}}>
              <Typography component="h3" variant="subtitle1">
                交渉力に関連するスキル
              </Typography>
            </Box>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    ごまかし
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.bluff[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Chutzpah.bluff[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.bluff[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Chutzpah.bluff[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.bluff[0]+charInfo.information.Skills.Chutzpah.bluff[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    魅惑
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.charm[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Chutzpah.charm[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.charm[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Chutzpah.charm[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.charm[0]+charInfo.information.Skills.Chutzpah.charm[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    威圧
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.intimidate[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Chutzpah.intimidate[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.intimidate[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Chutzpah.intimidate[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.intimidate[0]+charInfo.information.Skills.Chutzpah.intimidate[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    秘密行動
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.stealth[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Chutzpah.stealth[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.stealth[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Chutzpah.stealth[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Chutzpah.stealth[0]+charInfo.information.Skills.Chutzpah.stealth[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
          </Box>

          <Box borderBottom={1} borderColor="grey.400" width="100%">
            <Box sx={{margin: 1}}>
              <Typography component="h3" variant="subtitle1">
                技術力に関連するスキル
              </Typography>
            </Box>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    操作
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Mechanics.operate[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Mechanics.operate[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Mechanics.operate[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Mechanics.operate[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Mechanics.operate[0]+charInfo.information.Skills.Mechanics.operate[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    機械工作
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Mechanics.engineer[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Mechanics.engineer[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Mechanics.engineer[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Mechanics.engineer[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Mechanics.engineer[0]+charInfo.information.Skills.Mechanics.engineer[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
              <Grid xs>
                <Box sx={{textAlign:"center", margin: 1.5}}>
                  <Typography component="h3" variant="subtitle1">
                    プログラム
                  </Typography>
                </Box>
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Mechanics.program[0]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Mechanics.program[0] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Mechanics.program[1]}
                  onChange={(e) => {
                    const newCharInfo = {...charInfo};
                    newCharInfo.information.Skills.Mechanics.program[1] = Number(e.target.value);
                    setCharInfo(newCharInfo);
                  }}
                  />
              </Grid>
              <Grid xs>
                <TextField
                  type="number"
                  value={charInfo.information.Skills.Mechanics.program[0]+charInfo.information.Skills.Mechanics.program[1]}
                  inputProps={{ readOnly: true }}
                  />
              </Grid>
            </Grid>
              <Grid container spacing={1} sx={{margin: 1}} alignItems="stretch">
                <Grid xs>
                  <Box sx={{textAlign:"center", margin: 1.5}}>
                    <Typography component="h3" variant="subtitle1">
                      爆破
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs>
                  <TextField
                    type="number"
                    value={charInfo.information.Skills.Mechanics.demolitions[0]}
                    onChange={(e) => {
                      const newCharInfo = {...charInfo};
                      newCharInfo.information.Skills.Mechanics.demolitions[0] = Number(e.target.value);
                      setCharInfo(newCharInfo);
                    }}
                    />
                </Grid>
                <Grid xs>
                  <TextField
                    type="number"
                    value={charInfo.information.Skills.Mechanics.demolitions[1]}
                    onChange={(e) => {
                      const newCharInfo = {...charInfo};
                      newCharInfo.information.Skills.Mechanics.demolitions[1] = Number(e.target.value);
                      setCharInfo(newCharInfo);
                    }}
                    />
                </Grid>
                <Grid xs>
                  <TextField
                    type="number"
                    value={charInfo.information.Skills.Mechanics.demolitions[0]+charInfo.information.Skills.Mechanics.demolitions[1]}
                    inputProps={{ readOnly: true }}
                    />
                </Grid>
              </Grid>
          </Box>



        </AccordionDetails>
      </Accordion>
      </>
    );
}

export default EditSkills;