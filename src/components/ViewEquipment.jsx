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
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import UnderlinedBox from './UnderlinedBox';

const SmallFontBox = styled(Box)(({ theme }) => ({
  fontSize: 14,
}))

const ViewWellbeing = (props) => {
  // console.log(props);
  const Equipment = props.info;

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

    return (
      <>
      <Accordion defaultExpanded={true} variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Typography component="h3" variant="h6">
          PART5 EQUIPMENT
        </Typography>

        </AccordionSummary>
        <AccordionDetails>
          {/* <Box sx={{ flexGrow: 1 }}> */}
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {/* <TableHead>
                  <TableRow>
                    <TableCell>装備名</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  {Equipment.map((item) => (
                    <TableRow>
                    <TableCell>{item}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          {/* </Box> */}
        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default ViewWellbeing;