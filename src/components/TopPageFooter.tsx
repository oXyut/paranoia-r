import { v4 } from "uuid";
import {Button, Box, AppBar, Typography, Stack, Paper, Container, LinearProgress} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState, useContext, createContext } from 'react';
import { useRouter } from 'next/router'

const TopPageFooter = () => {
    const router = useRouter();
    const [uuid, setUuid] = useState<string>("");

      // uuidを生成し，/char/edit/[id]に遷移する関数
    const createNewCharInfoHandler = async () => {
        const newId = v4();
        await setUuid(newId);
        await router.push({
        pathname: '/char/edit/[id]',
        query: { id: newId },
        });
    }


    return (
        <div>
            <Box pt={5}>
            <AppBar
                position="fixed"
                sx={{ top: 'auto', bottom: 0 }}
                color="secondary"
                >
                <Box p={2}>
                <Grid container spacing={2} justifyContent="center" alignItems={"center"}>
                    <Grid xs={6}>
                    <Typography variant="body2" color="text.primary" align="center">
                    </Typography>
                    </Grid>
                    <Grid xs={3}>
                    </Grid>
                    <Grid xs={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={createNewCharInfoHandler}
                    >
                        新しくキャラクターを作成
                    </Button>
                    </Grid>
                </Grid>
                </Box>
                </AppBar>
            </Box>
        </div>
    );
}

export default TopPageFooter;