import * as React from 'react';
import { useEffect, useState, createContext, useContext } from 'react';
import { Box, Paper, TextField, Rating, colors, Button } from '@mui/material';
import {InputLabel, Select, MenuItem, FormControl} from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CharInfoContext} from '../../pages/char/edit/[id]';
import defaultSecretSocieties from '../../public/defaultSecretSocieties.json';
import defaultMutantPowers from '../../public/defaultMutantPowers.json';

type typeMutantPower = typeof defaultMutantPowers[0];
type typeSecretSociety = typeof defaultSecretSocieties[0];

const EditDevelopment = (props) => {
  // console.log(props);
  // const CoreInformation = props.info;

  const {charInfo, setCharInfo} = useContext(CharInfoContext);
  const [mutantPower, setMutatntPower] = useState<typeMutantPower>(defaultMutantPowers[0]);
  const [secretSociety, setSecretSociety] = useState<typeSecretSociety>(defaultSecretSocieties[0]);
  const [tempPassword, setTempPassword] = useState<string>("");

  useEffect(() => {
    setMutatntPower(defaultMutantPowers.find((e) => e.name === charInfo.information.Secret.mutant));
    }, [charInfo.information.Secret.mutant]);

  useEffect(() => {
    setSecretSociety(defaultSecretSocieties.find((e) => e.name === charInfo.information.Secret.society));
    }, [charInfo.information.Secret.society]);


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
            <Grid container spacing={1} sx={{margin: 1}} justifyContent="center" alignItems={"center"}>
                <Grid xs={10}>
                    <TextField
                        label="パスワードの登録・変更"
                        value={tempPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTempPassword(e.target.value);}}
                        fullWidth
                        type="password"
                    />
                </Grid>
                <Grid xs={2}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            const newCharInfo = {...charInfo};
                            newCharInfo.password = tempPassword;
                            setCharInfo(newCharInfo);
                        }}
                    >
                        変更
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{margin: 1}}>
                <Grid xs>
                    <FormControl fullWidth>
                        <InputLabel >秘密結社</InputLabel>
                    <Select
                        label="秘密結社"
                        value={charInfo.information.Secret.society}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setCharInfo({...charInfo, information:{...charInfo.information, Secret:{...charInfo.information.Secret, society:e.target.value}}});}}
                    >
                        {defaultSecretSocieties.map((society) => {
                            return <MenuItem value={society.name}>{society.name}</MenuItem>
                        })}
                    </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Box pl={3} pr={3} pb={3}>
                <Typography>キーワード:{secretSociety.keyword.join(", ")}</Typography>
                <Typography>{secretSociety.description}</Typography>
            </Box>
            <Grid container spacing={1} sx={{margin: 1}}>
                <Grid xs>
                    <FormControl fullWidth>
                        <InputLabel >ミュータント能力</InputLabel>
                    <Select
                        label="ミュータント能力"
                        value={charInfo.information.Secret.mutant}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setCharInfo({...charInfo, information:{...charInfo.information, Secret:{...charInfo.information.Secret, mutant:e.target.value}}});}}
                    >
                        {defaultMutantPowers.map((power) => {
                            return <MenuItem value={power.name}>{power.englishName} 《{power.translateName}》</MenuItem>
                        })}
                    </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Box pl={3} pr={3}>
                <Typography>気力:{mutantPower.initiative}</Typography>
                <Typography>{mutantPower.description}</Typography>
            </Box>
        </AccordionDetails>
      </Accordion>
      </>
    );
}

export default EditDevelopment;