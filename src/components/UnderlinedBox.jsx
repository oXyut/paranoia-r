import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


const SmallFontBox = styled(Box)(({ theme }) => ({
    fontSize: 12,
  }))


// const StyleUnderlinedBox = styled(Box)(({ theme }) => ({
//     padding: theme.spacing(1),
//     margin: theme.spacing(1),
//     textAlign: 'center',
//     // color: theme.palette.text.secondary,
//   }));

const UnderlinedBox = (props) => {
    return (
        <Box sx={{borderBottom:1, textAlign:"center"}}>
        <SmallFontBox>{props.name}</SmallFontBox>
        <Box>{props.value}</Box>
        </Box>
    )
}

export default UnderlinedBox;
