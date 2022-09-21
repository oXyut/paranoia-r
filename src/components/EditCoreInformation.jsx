import * as React from 'react';
import {Box, Paper, TextField} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ViewCoreInformation = (props) => {
  // console.log(props);
  // const CoreInformation = props.info;

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
          {/* <Box sx={{ flexGrow: 1 }}> */}
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <TextField id="standard-basic" label="Standard" variant="standard" />
            </Grid>
            <Grid xs>
              <TextField id="standard-basic" label="Standard" variant="standard" />
            </Grid>
            <Grid xs>
              <TextField id="standard-basic" label="Standard" variant="standard" />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs={4}>
            </Grid>
            <Grid xs={6}>
            </Grid>
            <Grid xs={2}>
            </Grid>
          </Grid>
        {/* </Box> */}
        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default ViewCoreInformation;