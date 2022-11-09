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
const ViewDevelopment = (props) => {
  // console.log(props);
  const Development = props.info;

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
          {/* <Box sx={{ flexGrow: 1 }}> */}
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <Box sx={{borderBottom:1, textAlign:"center"}}>
                <SmallFontBox>反逆スター</SmallFontBox>
                <Rating name="read-only" value={Development.star} readOnly />
              </Box>
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"XPポイント"} value={Development.xp+" xp"} />
            </Grid>
          </Grid>

          <Typography component="h3" variant="subtitle1">
            STATS
          </Typography>

          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <UnderlinedBox name={"暴力"} value={Development.Stats.violence[0] + Development.Stats.violence[1]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"知力"} value={Development.Stats.brains[0] + Development.Stats.brains[1]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"交渉力"} value={Development.Stats.chutzpah[0] + Development.Stats.chutzpah[1]} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"技術力"} value={Development.Stats.mechanics[0] + Development.Stats.mechanics[1]} />
            </Grid>
          </Grid>
        {/* </Box> */}
        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default ViewDevelopment;