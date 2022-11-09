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

import UnderlinedBox from './UnderlinedBox';

const SmallFontBox = styled(Box)(({ theme }) => ({
  fontSize: 14,
}))



const ViewSecret = (props) => {
  // console.log(props);
  const Secret = props.info;

    return (
      <>
      <Accordion defaultExpanded={true} variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="h3" variant="h6">
            SECRET
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <UnderlinedBox name={"秘密結社"} value={Secret.society} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"ミュータント能力"} value={Secret.mutant} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default ViewSecret;