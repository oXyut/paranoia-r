import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material'; 
import { ClassNames } from '@emotion/react';
import { NextLinkComposed } from './NextLinkComposed';
import { useRouter } from 'next/router';
// import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const router = useRouter();

  return (
    <>
    <Box sx={{ flexGrow: 1 }} p={3}>
      <AppBar position="fixed">
        <Toolbar>
        <Button
          component={NextLinkComposed}
          to={{pathname: "/"}}
          variant="text"
          color="inherit"
          fullWidth
        >
        Paranoia-R
        </Button>
          <div style={{ flexGrow: 1 }}></div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="タグで検索"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  // /char/tag/tagnameに遷移
                  router.push({
                    pathname: '/char/tag/[tag]',
                    query: { tag: e.target.value },
                  });
                }
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
