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
import { FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

import UnderlinedBox from './UnderlinedBox';

const SmallFontBox = styled(Box)(({ theme }) => ({
  fontSize: 14,
}))

const ViewWellbeing = (props) => {
  // console.log(props);
  const Wellbeing = props.info;

    return (
      <>
      <Accordion defaultExpanded={true} variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography component="h3" variant="h6">
          PART4 WELLBEING
        </Typography>

        </AccordionSummary>
        <AccordionDetails>
          {/* <Box sx={{ flexGrow: 1 }}> */}
            <Box sx={{margin:1, borderBottom:1, textAlign:"center"}}>
              <SmallFontBox>気力</SmallFontBox>
              <Rating name="read-only" value={Wellbeing.moxie[0]} max={Wellbeing.moxie[1]} readOnly />
            </Box>
            <Box sx={{margin:1, borderBottom:1, textAlign:"center"}}>
              <SmallFontBox>ダメージ</SmallFontBox>
              <Grid container>
                <Grid xs><FormControlLabel label="軽傷" control={<Checkbox  checked={Wellbeing.Wounds.hurt} />}  /></Grid>
                <Grid xs><FormControlLabel label="重傷" control={<Checkbox  checked={Wellbeing.Wounds.injured} />}  /></Grid>
                <Grid xs><FormControlLabel label="瀕死" control={<Checkbox  checked={Wellbeing.Wounds.maimed} />}  /></Grid>
                <Grid xs><FormControlLabel label="死亡" control={<Checkbox  checked={Wellbeing.Wounds.dead} />}  /></Grid>
              </Grid>
            </Box>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <Box sx={{borderBottom:1, textAlign:"center"}}>
                <SmallFontBox>メモリー</SmallFontBox>
                <Typography>{Wellbeing.memory}</Typography>
              </Box>
            </Grid>
          </Grid>
        {/* </Box> */}
        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default ViewWellbeing;