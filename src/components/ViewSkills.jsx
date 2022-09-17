import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';

import UnderlinedBox from './UnderlinedBox';

const SmallFontBox = styled(Box)(({ theme }) => ({
  fontSize: 14,
}))


// 反逆スターとXPポイントを下に寄せてそろえたいがやり方がわからない
const ViewSkills = (props) => {
  // console.log(props);
  const Skills = props.info;

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
          {/* <Box sx={{ flexGrow: 1 }}> */}
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <UnderlinedBox name={"運動"} value={Skills.Violence.athletics[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"科学"} value={Skills.Brains.science[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"ごまかし"} value={Skills.Chutzpah.bluff[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"操作"} value={Skills.Mechanics.operate[0]} />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <UnderlinedBox name={"銃器"} value={Skills.Violence.guns[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"心理学"} value={Skills.Brains.psychology[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"魅惑"} value={Skills.Chutzpah.charm[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"機械操作"} value={Skills.Mechanics.engineer[0]} />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <UnderlinedBox name={"接近戦"} value={Skills.Violence.melee[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"官僚主義"} value={Skills.Brains.bureaucracy[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"威圧"} value={Skills.Chutzpah.intimidate[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"プログラム"} value={Skills.Mechanics.program[0]} />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <UnderlinedBox name={"巧投"} value={Skills.Violence.throw[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"アルファコンプレックス"} value={Skills.Brains.alpha_complex[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"秘密行動"} value={Skills.Chutzpah.stealth[0]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"爆破"} value={Skills.Mechanics.demolitions[0]} />
            </Grid>
          </Grid>
        {/* </Box> */}
        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default ViewSkills;