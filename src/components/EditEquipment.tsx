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





const EditEquipment = (props) => {
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
            PART5 EQUIPMENT
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>未実装</Typography>
        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default EditEquipment;