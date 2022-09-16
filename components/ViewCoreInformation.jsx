import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import UnderlinedBox from './UnderlinedBox';

const SmallFontBox = styled(Box)(({ theme }) => ({
  fontSize: 14,
}))

const ViewCoreInformation = () => {
  const CoreInformation = {
    "name": "ADAM",
    "clearance": "UV",
    "sector": "JPN",
    "sex": "男",
    "personality": ["短気", "優柔不断", "臆病"],
  }

    return (
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
          <Grid xs={8}>
            <UnderlinedBox name={"性格"} value={CoreInformation.personality.join(", ")} />
          </Grid>
        </Grid>
      </Box>
    );
}

export default ViewCoreInformation;