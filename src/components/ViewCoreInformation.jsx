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

const ViewCoreInformation = (props) => {
  // console.log(props);
  const CoreInformation = props.info;

    return (
      <>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>PART1 CORE INFORMATION</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs>
              <UnderlinedBox name={"キャラクター名"} value={CoreInformation.name} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"セキュリティクリアランス"} value={CoreInformation.clearance} />
            </Grid>
            <Grid xs>
              <UnderlinedBox name={"ホームセクター"} value={CoreInformation.sector} />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{margin: 1}}>
            <Grid xs={4}>
              <UnderlinedBox name={"性別"} value={CoreInformation.sex} />
            </Grid>
            <Grid xs={6}>
              <UnderlinedBox name={"性格"} value={CoreInformation.personality.join(", ")} />
            </Grid>
            <Grid xs={2}>
              <UnderlinedBox name={"クローンナンバー"} value={CoreInformation.number} />
            </Grid>
          </Grid>
        </Box>
        </AccordionDetails>
      </Accordion>

      </>
    );
}

export default ViewCoreInformation;